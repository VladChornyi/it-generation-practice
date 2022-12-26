import { useEffect } from "react";
import s from "./Modal.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Modal = ({ children, onClickCloseModal }) => {
  useEffect(() => {
    window.addEventListener("keydown", onEscPress);
    return () => window.removeEventListener("keydown", onEscPress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onEscPress = (e) => {
    if (e.code !== "Escape") {
      return;
    }
    onClickCloseModal();
  };

  const onClickBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      onClickCloseModal();
    }
  };

  return (
    <div className={s.backdrop} onClick={onClickBackdrop}>
      <div className={s.modal}>
        <button
          type="button"
          className={s.closeBtn}
          onClick={onClickCloseModal}
        >
          <AiOutlineCloseCircle size={32} />
        </button>
        {children}
      </div>
    </div>
  );
};
