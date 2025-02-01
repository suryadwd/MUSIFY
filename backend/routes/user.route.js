import express from "express";
import {protect} from "../middleware/protect.middleware.js" 
import { getAllUsers } from "../controller/user.controller.js";

const route = express.Router();

route.post("/", protect, getAllUsers)

export default route;
