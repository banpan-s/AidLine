import express from 'express';
import { addowner, ownerLogin, CreateQueue, getProfile, getOwnerQueue, updateOwnerProfile, upload, getUsersInQueue } from '../controller/owner_controler.js';

const ownerRouter = express.Router();

ownerRouter.post('/addowner', addowner);
ownerRouter.post('/ownerLogin', ownerLogin);
ownerRouter.post('/createQueue', CreateQueue);
ownerRouter.get('/getProfile', getProfile);
ownerRouter.get('/getOwnerQueue', getOwnerQueue);
ownerRouter.get('/getUsersInQueue', getUsersInQueue);

// Route for updating owner profile with file upload middleware
ownerRouter.put('/editProfile', upload.single('file'), updateOwnerProfile);

export default ownerRouter;
