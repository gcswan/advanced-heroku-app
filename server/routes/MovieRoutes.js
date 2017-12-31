import express from 'express';
import {list,show,remove,update,create} from '../controllers/MovieController';

console.log(list);

const router = express.Router();

router.get("/api/movies", list);
router.get("/api/movies/:id", show);
router.post("/api/movies", create);
router.delete("/api/movies/:id", remove);

export default router;