/* eslint-disable react/prop-types */
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "../../services/axios";

const EditUserDialog = ({ user, onClose }) => {
  const [name, setName] = useState(user.name);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(user.role);

  const handleEditUser = async () => {
    try {
      await axios.put(
        `/users/${user._id}`,
        {
          name,
          username,
          email,
          password,
          role,
        },
        {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        }
      );
      toast.success("User updated successfully");
      onClose();
    } catch (error) {
      toast.error("Failed to update user");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-stone-800 p-6 rounded-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Edit User</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
        >
          <option value="CLIENT">Client</option>
          <option value="ADMIN">Admin</option>
          <option value="ADMIN_HOTEL">Hotel Admin</option>
        </select>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-red-500 text-white py-2 px-4 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleEditUser}
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserDialog;
