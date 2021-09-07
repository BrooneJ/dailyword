import express from 'express';
import { loadPages } from '../controller/wordController';
import { mypageLoading } from '../controller/userController';

const apiRouter = express.Router();

apiRouter.post('/pages', loadPages);
apiRouter.post('/:id/myPages', mypageLoading)

export default apiRouter;