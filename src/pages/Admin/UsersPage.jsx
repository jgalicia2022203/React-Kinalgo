/* eslint-disable react/prop-types */
import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ConfirmDeactivateDialog from "../../components/Users/ConfirmDeactiveDialog";
import ConfirmReactivateDialog from "../../components/Users/ConfirmReactiveDialog";
import EditUserDialog from "../../components/Users/EditUsersDialog";
import axios from "../../services/axios";

const AdminUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeactivateDialog, setShowDeactivateDialog] = useState(false);
  const [showReactivateDialog, setShowReactivateDialog] = useState(false);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("/users", {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      });
      setUsers(response.data.users);
    } catch (error) {
      console.error("Failed to fetch users", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setShowEditDialog(true);
  };

  const handleDeactivateUser = (user) => {
    setSelectedUser(user);
    setShowDeactivateDialog(true);
  };

  const handleReactivateUser = (user) => {
    setSelectedUser(user);
    setShowReactivateDialog(true);
  };

  return (
    <div className="p-8 bg-stone-800 text-white w-full">
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <table className="w-full bg-gray-900 rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Username</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Role</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id} className="border-b border-gray-300">
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.username}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.role}</td>
                <td className="p-3">{user.status ? "Active" : "Inactive"}</td>
                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => handleEditUser(user)}
                    className="text-blue-500"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  {user.status ? (
                    <button
                      onClick={() => handleDeactivateUser(user)}
                      className="text-red-500"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleReactivateUser(user)}
                      className="text-green-500"
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="p-3 text-center">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {showEditDialog && (
        <EditUserDialog
          user={selectedUser}
          onClose={() => {
            setShowEditDialog(false);
            fetchUsers();
          }}
        />
      )}
      {showDeactivateDialog && (
        <ConfirmDeactivateDialog
          user={selectedUser}
          onClose={() => {
            setShowDeactivateDialog(false);
            fetchUsers();
          }}
        />
      )}
      {showReactivateDialog && (
        <ConfirmReactivateDialog
          user={selectedUser}
          onClose={() => {
            setShowReactivateDialog(false);
            fetchUsers();
          }}
        />
      )}
    </div>
  );
};

export default AdminUsersPage;
