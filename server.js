const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const booking = [
  {
    id: 1,
    title: "Mr",
    firstName: "Awet",
    surname: "Fessha",
    email: "awetFessha@fessha.com",
    roomId: 2,
    checkInDate: "2017-11-21",
    checkOutDate: "2017-11-23"
  },
  {
    id: 2,
    title: "Doctor",
    firstName: "Cameron",
    surname: "Donald",
    email: "donald_cameron@cameron.org",
    roomId: 1,
    checkInDate: "2018-02-15",
    checkOutDate: "2018-02-28"
  },
  {
    id: 3,
    title: "Prince",
    firstName: "Harry",
    surname: "Wales",
    email: "harry@wales.com",
    roomId: 5,
    checkInDate: "2018-03-01",
    checkOutDate: "2018-04-09"
  },
  {
    id: 4,
    title: "Dame",
    firstName: "Judi",
    surname: "Dench",
    email: "Judi@dench.co.uk",
    roomId: 6,
    checkInDate: "2017-12-25",
    checkOutDate: "2018-01-03"
  },
  {
    id: 5,
    title: "Madam",
    firstName: "Anuradha",
    surname: "Selvam",
    email: "anu@selvam.net",
    roomId: 3,
    checkInDate: "2017-08-30",
    checkOutDate: "2017-10-02"
  }
];
//enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Getting
app.get("/bookings", function(req, res) {
  res.send(booking);
});
app.get("/bookings/:roomId", function(req, res) {
  res.send(booking.find(result => result.roomId == req.params.roomId));
  res.send(200);
});
app.use("/postBooking", function(req, res) {
  booking.push(req.body);
  res.send("Success");
});
//Delete
app.Delete("/bookings/:roomId", function(req, res) {
  booking.splice(
    booking.findIndex(result => result.roomId === req.params.roomId),
    1
  );
  res.send(200);
});

//Update
app.put("/bookings/:roomId", function(req, res) {
  let toBeUpdated = booking.find(result => result.roomId === req.params.roomId);
  toBeUpdated.surname = "Kifle";
  toBeUpdated.title = "Dr";
  res.send(200);
});
app.listen(process.env.PORT || 3001, function() {
  console.log("server listening on port 3001!");
});
