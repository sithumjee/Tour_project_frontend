// import React, { useEffect, useState } from "react";
// import { useParams, useHistory } from "react-router-dom";
// import axios from "axios";

// const UserDetail = () => {
//   const { id } = useParams();
//   const history = useHistory();
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [role, setRole] = useState("");

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await axios.get(`/api/v1/users/${id}`); // Fetch user details
//         setUser(response.data);
//         setRole(response.data.role);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching user:", error);
//       }
//     };

//     fetchUser();
//   }, [id]);

//   const handleRemoveUser = async () => {
//     try {
//       await axios.delete(`/api/v1/users/${id}`); // Delete user
//       history.push("/manage-users"); // Redirect back to manage users
//     } catch (error) {
//       console.error("Error removing user:", error);
//     }
//   };

//   const handleUpdateUserRole = async () => {
//     try {
//       const response = await axios.patch(`/api/v1/users/${id}`, {
//         role: role,
//       });
//       setUser(response.data); // Update local state with the new user data
//     } catch (error) {
//       console.error("Error updating user role:", error);
//     }
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className="user-detail-container">
//       <h2>User Details</h2>
//       <p>
//         <strong>ID:</strong> {user._id}
//       </p>
//       <p>
//         <strong>Name:</strong> {user.name}
//       </p>
//       <p>
//         <strong>Email:</strong> {user.email}
//       </p>
//       <p>
//         <strong>Role:</strong>
//         <select value={role} onChange={(e) => setRole(e.target.value)}>
//           <option value="user">User</option>
//           <option value="admin">Admin</option>
//           {/* Add more roles as needed */}
//         </select>
//         <button onClick={handleUpdateUserRole}>Update Role</button>
//       </p>
//       <p>
//         <strong>Active:</strong> {user.active ? "Active" : "Inactive"}
//       </p>
//       <button onClick={handleRemoveUser}>Remove User</button>
//     </div>
//   );
// };

// export default UserDetail;
