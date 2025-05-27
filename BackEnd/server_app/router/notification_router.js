import express from 'express';
import { createNotification, getNotifications } from '../controller/notification_controller.js';

const notificationRouter = express.Router();

notificationRouter.post('/create', createNotification);
notificationRouter.get('/list', getNotifications);

export default notificationRouter;
