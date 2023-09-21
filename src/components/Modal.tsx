"use client";

import { useDispatch } from "react-redux";
import { clearTodo } from "../features/TodoSlice";
import { closeModal } from "../features/ModalSlice";
import { useSelector, AppDispatch } from "../store/store";

const Modal = () => {
  const dispatch: AppDispatch = useDispatch();
  const { todoItemsData, amount } = useSelector((state) => state.todo);

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>タスクをすべて削除しますか？</h4>
        <div className="btn-container">
          <button
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearTodo({ todoItemsData, amount }));
              dispatch(closeModal());
            }}
          >
            はい
          </button>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(closeModal())}
          >
            いいえ
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
