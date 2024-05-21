import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import axios from "../../services/axios";

Modal.setAppElement("#root");

const ProfilePage = () => {
  const { user, logout, loading, setUser } = useAuth();
  const [formData, setFormData] = useState({
    newName: "",
    newUsername: "",
    newEmail: "",
    newPassword: "",
    newPhoneNumber: "",
    currentPassword: "",
  });
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeactivateModal, setShowDeactivateModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    } else if (user) {
      setFormData({
        newName: user.name || "",
        newEmail: user.email || "",
        newUsername: user.username || "",
        newPhoneNumber: user.phoneNumber || "",
        newPassword: "",
        currentPassword: "",
      });
    }
  }, [user, loading, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateProfile = async () => {
    if (formData.newPassword && !showPasswordModal) {
      setShowPasswordModal(true);
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const updateData = {
        name: formData.newName,
        username: formData.newUsername,
        email: formData.newEmail,
        phoneNumber: formData.newPhoneNumber,
      };

      if (formData.newPassword) {
        updateData.password = formData.newPassword;
      }

      const response = await axios.put(
        `/users/profile-settings/${user._id}`,
        updateData,
        {
          headers: {
            "x-token": token,
          },
        }
      );

      toast.success("Profile updated successfully!");
      setShowUpdateModal(false);
      setShowPasswordModal(false);
      setFormData((prevData) => ({
        ...prevData,
        newPassword: "",
        currentPassword: "",
      }));
      setUser(response.data.user);
    } catch (err) {
      toast.error(err.response.data.msg || "Failed to update profile");
    }
  };

  const handleDeactivateAccount = async () => {
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
      setShowDeactivateModal(false);
    } catch (err) {
      toast.error(err.response.data.msg || "Failed to deactivate account");
    }
  };

  const handlePasswordVerification = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `/auth/verify-password`,
        { password: formData.currentPassword },
        {
          headers: {
            "x-token": token,
          },
        }
      );
      setShowPasswordModal(false);
      handleUpdateProfile();
    } catch (err) {
      toast.error("Password is incorrect");
    }
  };

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-stone-800 text-white p-8 w-screen h-screen flex justify-center items-center flex-col">
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 bg-orange-400 text-white py-2 px-4 rounded-md font-bold"
      >
        Back to Home
      </button>
      <h2 className="text-2xl font-bold mb-4">Your Account</h2>
      <div className="max-w-md w-full p-8 rounded-md hover:border-orange-400">
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
            name="newName"
            value={formData.newName}
            onChange={handleInputChange}
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
            name="newUsername"
            value={formData.newUsername}
            onChange={handleInputChange}
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
            name="newEmail"
            value={formData.newEmail}
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-white"
          >
            Password (leave blank to keep unchanged)
          </label>
          <input
            type="password"
            id="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black"
            placeholder="••••••••"
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
            name="newPhoneNumber"
            value={formData.newPhoneNumber}
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black"
          />
        </div>

        <div className="flex place-content-around gap-2.5">
          <button
            onClick={() => setShowUpdateModal(true)}
            className="w-full bg-orange-400 text-white py-2 rounded-md font-bold h-120"
          >
            Update Profile
          </button>
          <button
            onClick={() => setShowDeactivateModal(true)}
            className="w-full bg-red-500 text-white py-2 rounded-md font-bold h-120"
          >
            Deactivate Account
          </button>
        </div>
      </div>

      <Modal
        isOpen={showUpdateModal}
        onRequestClose={() => setShowUpdateModal(false)}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="p-6 bg-stone-800 rounded-md shadow-md text-white">
          <h2 className="text-xl font-bold mb-4">Update Profile</h2>
          <p>Are you sure you want to update your profile?</p>
          <div className="flex justify-end mt-4">
            <button
              onClick={handleUpdateProfile}
              className="bg-green-500 text-white px-4 py-2 rounded mr-2"
            >
              Yes
            </button>
            <button
              onClick={() => setShowUpdateModal(false)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              No
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={showDeactivateModal}
        onRequestClose={() => setShowDeactivateModal(false)}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="p-6 bg-stone-800 rounded-md shadow-md text-white">
          <h2 className="text-xl font-bold mb-4">Deactivate Account</h2>
          <p>Are you sure you want to deactivate your account?</p>
          <div className="flex justify-end mt-4">
            <button
              onClick={handleDeactivateAccount}
              className="bg-green-500 text-white px-4 py-2 rounded mr-2"
            >
              Yes
            </button>
            <button
              onClick={() => setShowDeactivateModal(false)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              No
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={showPasswordModal}
        onRequestClose={() => setShowPasswordModal(false)}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="p-6 bg-stone-800 rounded-md shadow-md text-white">
          <h2 className="text-xl font-bold mb-4">Verify Password</h2>
          <p>Please enter your current password to proceed with the update:</p>
          <input
            type="password"
            value={formData.currentPassword}
            onChange={handleInputChange}
            name="currentPassword"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black"
            placeholder="Current Password"
          />
          <div className="flex justify-end mt-4">
            <button
              onClick={handlePasswordVerification}
              className="bg-green-500 text-white px-4 py-2 rounded mr-2"
            >
              Verify
            </button>
            <button
              onClick={() => setShowPasswordModal(false)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProfilePage;
