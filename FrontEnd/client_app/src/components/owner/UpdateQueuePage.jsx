// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';

// const UpdateQueuePage = () => {
//   const { state } = useLocation();
//   const { queueID } = state;
//   const [usersInQueue, setUsersInQueue] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [firstWaitTime, setFirstWaitTime] = useState('');

//   useEffect(() => {
//     const fetchUsersInQueue = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/owner/getUsersInQueue", {
//           params: { queueID },
//         });
//         setUsersInQueue(response.data);
//         if (response.data.length > 0) {
//           setFirstWaitTime(response.data[0].estimatedWaitTime.replace(' minutes', ''));
//         }
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching users in queue:", error);
//         setLoading(false);
//       }
//     };
//     fetchUsersInQueue();
//   }, [queueID]);

//   const updateWaitTimes = async () => {
//     const updatedQueue = usersInQueue.map((user, index) => ({
//       _id: user._id,
//       estimatedWaitTime: `${Number(firstWaitTime) + index * 10} minutes`,
//     }));

//     try {
//       await axios.put("http://localhost:3000/owner/updateWaitTimes", {
//         queueID,
//         updatedQueue,
//       });
//       setUsersInQueue((prev) =>
//         prev.map((user, index) => ({
//           ...user,
//           estimatedWaitTime: updatedQueue[index].estimatedWaitTime,
//         }))
//       );
//     } catch (error) {
//       console.error("Failed to update wait times:", error);
//     }
//   };

//   const finishFirstUser = async () => {
//     try {
//       await axios.put("http://localhost:3000/owner/finishFirstUser", { queueID });
//       const updated = usersInQueue.slice(1).map((user, index) => ({
//         ...user,
//         positionInQueue: index + 1,
//         estimatedWaitTime: `${Number(firstWaitTime) + index * 10} minutes`,
//       }));
//       setUsersInQueue(updated);
//     } catch (error) {
//       console.error("Error finishing first user:", error);
//     }
//   };

//   if (loading) return <p>Loading users in queue...</p>;

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-semibold mb-4">Users in Queue</h2>
//       <table className="table-auto w-full border">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="px-4 py-2">User Email</th>
//             <th className="px-4 py-2">Token No</th>
//             <th className="px-4 py-2">Position</th>
//             <th className="px-4 py-2">Estimated Wait Time</th>
//             <th className="px-4 py-2">Status</th>
//             <th className="px-4 py-2">Check-In</th>
//             <th className="px-4 py-2">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {usersInQueue.map((user, index) => (
//             <tr key={user._id} className="text-center">
//               <td className="border px-4 py-2">{user.userEmail}</td>
//               <td className="border px-4 py-2">{user.tokenNo}</td>
//               <td className="border px-4 py-2">{user.positionInQueue}</td>
//               <td className="border px-4 py-2">
//                 {index === 0 ? (
//                   <input
//                     type="number"
//                     value={firstWaitTime}
//                     onChange={(e) => setFirstWaitTime(e.target.value)}
//                     className="border p-1 w-20"
//                   />
//                 ) : (
//                   user.estimatedWaitTime
//                 )}
//               </td>
//               <td className="border px-4 py-2">{user.status}</td>
//               <td className="border px-4 py-2">
//                 {user.checkInDate} {user.checkInTime}
//               </td>
//               <td className="border px-4 py-2">
//                 {index === 0 && (
//                   <>
//                     <button
//                       onClick={updateWaitTimes}
//                       className="bg-blue-500 text-white px-2 py-1 mr-2 rounded"
//                     >
//                       Update Wait Time
//                     </button>
//                     <button
//                       onClick={finishFirstUser}
//                       className="bg-red-500 text-white px-2 py-1 rounded"
//                     >
//                       Finish
//                     </button>
//                   </>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UpdateQueuePage;
