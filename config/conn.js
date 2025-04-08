const { connect } = require("mongoose");

const dbConnectionString = "mongodb://127.0.0.1:27017/medical";

connect(dbConnectionString, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
})
 .then(() => {
  console.log("Database Connected");
 })
 .catch((e) => {
  console.log("Database Connection Error");
 });
