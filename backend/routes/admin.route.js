import express from 'express';
import { protect, requireAdmin } from '../middleware/protect.middleware';
import { createSong } from '../controller/admin.controller';

const route = express.Router();

route.post("/songs",protect,requireAdmin, createSong)

export default route;