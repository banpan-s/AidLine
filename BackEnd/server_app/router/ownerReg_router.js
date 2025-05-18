import express from 'express';
import { addowner, ownerLogin, CreateQueue, getOwnerQueue, updateOwnerProfile, updateOwnerQueue,
 updateWaitTimes, finishFirstUser, upload, getUsersInQueue, saveAddNoticeText, getAllAddNotices,
 submitOwnerFeedback, updateAddNoticeText, deleteAddNoticeText, getProfile } from '../controller/owner_controler.js';

const ownerRouter = express.Router();

ownerRouter.post('/addowner', upload.single('file'), addowner);
ownerRouter.post('/ownerLogin', ownerLogin);
ownerRouter.get('/getProfile', getProfile);
ownerRouter.post('/createQueue', CreateQueue);
ownerRouter.get('/getOwnerQueue', getOwnerQueue);
ownerRouter.get('/getUsersInQueue', getUsersInQueue);
ownerRouter.post('/submitFeedback', submitOwnerFeedback);

ownerRouter.post('/saveAddNoticeText', saveAddNoticeText);
ownerRouter.get('/getAllAddNotices', getAllAddNotices);

ownerRouter.put('/updateAddNoticeText', updateAddNoticeText);
ownerRouter.delete('/deleteAddNoticeText/:id', deleteAddNoticeText);

ownerRouter.put('/editProfile', upload.single('file'), updateOwnerProfile);

ownerRouter.put('/editQueue', updateOwnerQueue);
ownerRouter.put('/updateWaitTimes', updateWaitTimes);
ownerRouter.put('/finishFirstUser', finishFirstUser);


export default ownerRouter;
