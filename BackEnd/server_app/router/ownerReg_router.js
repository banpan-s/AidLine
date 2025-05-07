import express from 'express';
import { addowner, ownerLogin, CreateQueue, getProfile, getOwnerQueue, updateOwnerProfile, upload, getUsersInQueue, saveAddNoticeText, getAllAddNotices, submitOwnerFeedback } from '../controller/owner_controler.js';

const ownerRouter = express.Router();

ownerRouter.post('/addowner', addowner);
ownerRouter.post('/ownerLogin', ownerLogin);
ownerRouter.get('/getProfile', getProfile);
ownerRouter.post('/createQueue', CreateQueue);
ownerRouter.get('/getOwnerQueue', getOwnerQueue);
ownerRouter.get('/getUsersInQueue', getUsersInQueue);

ownerRouter.post('/saveAddNoticeText', saveAddNoticeText);
ownerRouter.get('/getAllAddNotices', getAllAddNotices);

// Route for updating owner profile with file upload middleware
ownerRouter.put('/editProfile', upload.single('file'), updateOwnerProfile);

// Add route for owner feedback submission
ownerRouter.post('/submitFeedback', submitOwnerFeedback);

export default ownerRouter;
