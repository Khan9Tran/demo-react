import ModalCreateUser from "./ModalCreateUser";

const ManageUser = (props) => {
  return (
    <div className="manage-user-container">
      <div className="title"></div>
      <div className="users-content">
        <div>
          <button>Add new User</button>
          <ModalCreateUser />
        </div>
        <div>Table user</div>
      </div>
    </div>
  );
};

export default ManageUser;
