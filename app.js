var express = require("express");

var app = express();
var port = 8000;

var eventRouter = express.Router();

eventRouter.route("/events").get(function (req, res) {
  var data = { data: "Hello Sanjay" };
  res.json(data);
});

app.use("/api", eventRouter);

app.listen(port, function () {
  console.log("Running on " + port);
});
