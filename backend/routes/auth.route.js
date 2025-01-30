import express from 'express';
import { callback } from '../controller/auth.controller';

const route = express.Router();

route.post("/callback" , callback)

export default route;