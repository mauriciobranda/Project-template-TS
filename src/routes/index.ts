import { Router } from 'express';
import classRouter from './class.routes';
import lessonRouter from './lesson.routes';

const routes = Router();

routes.use('/class', classRouter);
routes.use('/lesson', lessonRouter);

export default routes;
