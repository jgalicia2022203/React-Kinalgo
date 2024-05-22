/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import axios from "../../services/axios";

const ConfirmDeactivateDialog = ({ user, onClose }) => {
  const handleDeactivateUser = async () => {
    try {
      await axios.patch(
        `/users/deactivate/${user._id}`,
        {},
        {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        }
      );
      toast.success("User deactivated successfully");
      onClose();
    } catch (error) {
      toast.error("Failed to deactivate user");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-stone-800 p-6 rounded-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Deactivate User</h2>
        <p>
          Are you sure you want to deactivate the user &quot;{user.name}&quot;?
        </p>
        <div className="flex justify-end gap-4 mt-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white py-2 px-4 rounded"
          >
            No
          </button>
          <button
            onClick={handleDeactivateUser}
            className="bg-red-500 text-white py-2 px-4 rounded"
          >
            Yes, Deactivate
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeactivateDialog;
