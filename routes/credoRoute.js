const router = require("express").Router();
const credoController = require('../controller/credoController')
// Create account number

router.post('/create', credoController.createAccount)

router.put('/:uuid', credoController.updateYourDetails);

router.put("/deposit/:uuid", credoController.accountDeposit);

router.put('/withdraw/:uuid', credoController.accountWithdraw);

router.get('/check-bal/:uuid', credoController.balanceCheck)


// router.post(
//   "/create",
//   asyncWrapper(async (req, res) => {
//     const emailExist = await Credo.findOne({
//       where: { email: req.body.email },
//     });
//     if (emailExist) {
//       return res.status(403).json({ msg: "Email already exist" });
//     }
//     const accountNumber = generateAccountNumber();
//     const userNumber = await Credo.create({
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       email: req.body.email,
//       phoneNumber: req.body.phoneNumber,
//       balance: req.body.balance,
//       accountNumber: accountNumber,
//     });
//     res
//       .status(200)
//       .json({ mgs: "Your account as been ctreated", data: userNumber });
//   })
// );

// router.put(
//   "/:uuid",
//   asyncWrapper(async (req, res, next) => {
//     const uuid = req.params.uuid;
//     const {
//       address,
//       phoneNumber,
//       city,
//       country,
//       dob,
//       accountType,
//       pin,
//       balance,
//     } = req.body;

//     const user = await Credo.findOne({ where: { uuid } });
//     if (!user) {
//       return next(createCustomError("User not Found", 404));
//     }
//     (user.address = address),
//       (user.phoneNumber = phoneNumber),
//       (user.city = city),
//       (user.dob = dob),
//       (user.accountType = accountType),
//       (user.pin = pin),
//       (user.balance = balance),
//       (user.country = country);
//     await user.save();

//     res.status(200).json({ msg: "Account updated", data: user });
//   })
// );

// router.put(
//   "/:uuid/Deposit",
//   asyncWrapper(async (req, res, next) => {
//     const uuid = req.params.uuid;
//     const { amount } = req.body;
//     const user = await Credo.findOne({ where: { uuid } });
//     if (!user) {
//       return next(createCustomError("User not Found", 404));
//     }
//     user.amount = amount;
//     const newBalance = user.balance + amount;
//     user.balance = newBalance;
//     await user.save();
//     res.status(200).json({
//       data: {
//         mgs: "Deposit to ur account successful",
//         amount: user.amount,
//       },
//     });
//   })
// );

// router.put(
//   "/:uuid/withdraw",
//   asyncWrapper(async (req, res, next) => {
//     const uuid = req.params.uuid;
//     const { amount } = req.body;

//     const user = await Credo.findOne({ where: { uuid } });
//     if (!user) {
//       return next(createCustomError("User not Found", 404));
//     }
//     if (amount > user.balance) {
//       return res.status(403).json({ msg: "Insufficient balance" });
//     }
//     const newBalance = user.balance - amount;
//     await Credo.update({ balance: newBalance }, { where: { uuid } });
//     const updatedUser = await Credo.findOne({ where: { uuid } });
//     res.status(200).json({
//       data: {
//         msg: "Withdraw successful",
//         balance: updatedUser.balance,
//       },
//     });
//   })
// );

// router.get(
//   "/:uuid/checkBalance",
//   asyncWrapper(async (req, res, next) => {
//     const uuid = req.params.uuid;

//     const user = await Credo.findOne({ where: { uuid } });
//     if (!user) {
//       return next(createCustomError("User not Found", 404));
//     }
//     res.status(200).json({
//       data: {
//         mgs: "This is ur balance",
//         balance: user.balance,
//       },
//     });
//   })
// );

module.exports = router;
