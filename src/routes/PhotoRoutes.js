import { Router } from 'express';
import multer from 'multer';

import loginRequire from '../middlewares/loginRequired';
import PhotoController from '../controllers/PhotoControllers';
import multerConfig from '../config/multerConfig';

const router = new Router();

router.post('/', loginRequire, PhotoController.store);

export default router;
