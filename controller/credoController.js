const Credo = require('../models/credoUser')
const asyncWrapper = require("../middleware/async");
const generateAccountNumber = require("../randum-account-number");
const { createCustomError } = require("../error/custom_error");

async function encriptPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

exports.createAccount = asyncWrapper(async (req, res, next) => {
  const emailExist = await Credo.findOne({
    where: { email: req.body.email },
  });
  if (emailExist) {
    return res.status(403).json({ msg: "Email already exist" });
  }
  const accountNumber = generateAccountNumber();
  const userNumber = await Credo.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: await encriptPassword(req.body.password),
    phoneNumber: req.body.phoneNumber,
    balance: req.body.balance,
    accountNumber: accountNumber,
  });
  res
    .status(200)
    .json({ mgs: "Your account as been ctreated", data: userNumber });
});


exports.updateYourDetails = asyncWrapper(async (req, res, next) => {
  const uuid = req.params.uuid;
  const {
    address,
    phoneNumber,
    city,
    country,
    dob,
    accountType,
    gender,
    pin,
    balance,
  } = req.body;

  // Using findOneAndUpdate
  const updatedUser = await Credo.findOneAndUpdate(
    { _id: uuid },
    {
      $set: {
        address,
        phoneNumber,
        city,
        country,
        dob,
        accountType,
        gender,
        pin,
        balance,
      },
    },
    { new: true } 
  );

  if (!updatedUser) {
    return next(createCustomError("User not Found", 404));
  }

  res.status(200).json({ msg: "Account updated", data: updatedUser });
});




exports.accountDeposit = asyncWrapper(async (req, res, next) => {
  const uuid = req.params.uuid;
  const { amount } = req.body;

  const user = await Credo.findOneAndUpdate(
    { _id: uuid },
    { $inc: { amount: amount, balance: amount } }, 
    { new: true } 
  );

  if (!user) {
    return next(createCustomError("User not Found", 404));
  }

  res.status(200).json({
    data: {
      msg: "Deposit to your account successful",
      amount: user.amount, 
      balance: user.balance,
    },
  });
});





exports.accountWithdraw = asyncWrapper(async (req, res, next) => {
  const uuid = req.params.uuid;
  const { amount } = req.body;

  const user = await Credo.findOne({ _id: uuid });
  if (!user) {
    return next(createCustomError("User not Found", 404));
  }

  if (amount > user.balance) {
    return res.status(403).json({ msg: "Insufficient balance" });
  }

  const updatedUser = await Credo.findOneAndUpdate(
    { _id: uuid, balance: { $gte: amount } }, // Ensure sufficient balance before updating
    { $inc: { amount: -amount, balance: -amount } },
    { new: true } // Return the updated document
  );

  if (!updatedUser) {
    // If the document was not updated, it means there wasn't sufficient balance
    return res.status(403).json({ msg: "Insufficient balance" });
  }

  res.status(200).json({
    data: {
      msg: "Withdraw successful",
      balance: updatedUser.balance,
    },
  });
});



exports.balanceCheck = asyncWrapper(async (req, res, next)=>{
  const uuid = req.params.uuid;

  const user = await Credo.findOne( { _id: uuid } );
  if (!user) {
    return next(createCustomError("User not Found", 404));
  }
  res.status(200).json({
    data: {
      mgs: "This is ur balance",
      balance: user.balance,
    },
  });
})
