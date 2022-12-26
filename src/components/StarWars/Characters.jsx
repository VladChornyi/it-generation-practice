import { useState } from "react";
import { Modal } from "./Modal";
import UserInfo from "./UserInfo";

export const Characters = ({ users }) => {
  const [currentId, setCurrentId] = useState(null);

  const onClickOpenModal = (e) => {
    const id = e.currentTarget.dataset.id;
    setCurrentId(id);
  };

  const onClickCloseModal = (e) => {
    setCurrentId(null);
  };

  const currentItem = users.find((user) => user.name === currentId);
  return (
    <>
      <ul>
        {users.map((item) => {
          return (
            <li key={item.name}>
              <p>{item.name}</p>
              <p>{item.gender}</p>
              <button
                type="button"
                data-id={item.name}
                onClick={onClickOpenModal}
              >
                Read more
              </button>
            </li>
          );
        })}
      </ul>
      {currentId && (
        <Modal onClickCloseModal={onClickCloseModal}>
          <UserInfo item={currentItem} />
        </Modal>
      )}
    </>
  );
};
