const express = require("express");
const { sequelize } = require("./models");
const credoRoute = require("./routes/credoRoute");
const notFound = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/error-handler");
const PORT = process.env.PORT || 3303;
const app = express();

app.use(express.json());
app.use("/api/credo", credoRoute);
app.use(notFound);
app.use(errorHandlerMiddleware);

app.listen({ port: 3303 }, async () => {
  console.log("Server up on http://localhost:3303");
  await sequelize.authenticate();
  console.log("Database Connected!");
});
