import express from 'express';

const route = express.Router();

route.post("/", (req, res) => {
  res.send("hlo")
})

export default route;