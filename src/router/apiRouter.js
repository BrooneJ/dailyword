import express from 'express';
import { loadPages } from '../controller/wordController';


const apiRouter = express.Router();

apiRouter.post('/pages', loadPages);

export default apiRouter;