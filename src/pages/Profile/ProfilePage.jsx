import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import axios from "../../services/axios";

const ProfilePage = () => {
  const { user, logout, loading } = useAuth();
  const [newName, setNewName] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    } else if (user) {
      setNewName(user.name);
      setNewEmail(user.email);
      setNewUsername(user.username);
      setNewPhoneNumber(user.phoneNumber);
    }
  }, [user, loading, navigate]);

  const handleUpdateProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      // eslint-disable-next-line no-unused-vars
      const response = await axios.put(
        `/users/profile-settings/${user._id}`,
        {
          name: newName,
          username: newUsername,
          email: newEmail,
          password: newPassword,
          phoneNumber: newPhoneNumber,
        },
        {
          headers: {
            "x-token": token,
          },
        }
      );
      toast.success("Profile updated successfully!");
      window.location.reload();
    } catch (err) {
      toast.error(err.response.data.msg || "Failed to update profile");
    }
  };

  const handleDeactivateAccount = async () => {
    if (!window.confirm("Are you sure you want to deactivate your account?")) {
      return;
    }
    try {
      const token = localStorage.getItem("token");
      await axios.patch(
        `/users/profile-settings/${user._id}`,
        {},
        {
          headers: {
            "x-token": token,
          },
        }
      );
      logout();
      toast.success("Account deactivated successfully!");
    } catch (err) {
      toast.error(err.response.data.msg || "Failed to deactivate account");
    }
  };

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full bg-stone-800 text-white p-8">
      <h2 className="text-2xl font-bold mb-4">Your Account</h2>
      <div className="max-w-md w-full p-8 rounded-md bg-gray-700">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-white"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-white"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            value={newPhoneNumber}
            onChange={(e) => setNewPhoneNumber(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black"
          />
        </div>
        <button
          onClick={handleUpdateProfile}
          className="w-full bg-orange-400 text-white py-2 rounded-md font-bold"
        >
          Update Profile
        </button>
        <button
          onClick={handleDeactivateAccount}
          className="w-full bg-red-500 text-white py-2 rounded-md font-bold mt-4"
        >
          Deactivate Account
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
