const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save-reservation", (req, res) => {
  const reservationData = req.body;

  fs.writeFile("reservation.json", JSON.stringify(reservationData, null, 2), (err) => {
    if (err) {
      console.error("Error saving file:", err);
      return res.status(500).json({ message: "Failed to save reservation" });
    }
    res.json({ message: "Reservation saved successfully" });
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
