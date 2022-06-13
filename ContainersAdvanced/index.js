let express = require("express");
let bodyparser = require("body-parser");

let app = express();

let users = [
  {
    firstname: "Teststudent001",
    lastname: "achternaam001",
    email: "teststudent001@ap.be"
  },
  {
    firstname: "Teststudent002",
    lastname: "achternaam002",
    email: "teststudent002@ap.be"
  },
  {
    firstname: "Teststudent003",
    lastname: "achternaam003",
    email: "teststudent003@ap.be"
  },
  {
    firstname: "Teststudent004",
    lastname: "achternaam004",
    email: "teststudent004@ap.be"
  },
  {
    firstname: "Teststudent005",
    lastname: "achternaam005",
    email: "teststudent005@ap.be"
  },
  {
    firstname: "Teststudent006",
    lastname: "achternaam006",
    email: "teststudent006@ap.be"
  },
  {
    firstname: "Teststudent008",
    lastname: "achternaam008",
    email: "teststudent008@ap.be"
  },
  {
    firstname: "Teststudent009",
    lastname: "achternaam009",
    email: "teststudent009@ap.be"
  },
 ];

for (let user of users) {
    user.state = false;
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.static("client"));

app.use(bodyparser.json());

app.get("/iot-programming/api/users", function(req, res, next) {
  res.status(200).json(users);
});

app.get("/iot-programming/api/users/:id", function(req, res, next) {
    if (req.params.id > users.length){
        res.status(404).json({"error":"This user doesn't exist in the database"})
    }
  res.status(200).json(users[req.params.id]);
});

app.post("/iot-programming/api/users/:id", function(req, res, next) {
    if(req.params.id > users.length){
        res.status(404).json({"error":"This user doesn't exist in the database"})
    }
    if(req.body.state == null){
        res.status(406).json({"error":"No state given"})
    }

    users[req.params.id].state = req.body.state;

    res.status(204).send();
})



app.listen(80);
