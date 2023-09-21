"use client";

import { useState } from "react";
import { deleteTodo, searchTodo } from "../features/TodoSlice";
import { openModal } from "../features/ModalSlice";
import Link from "next/link";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { useSelector, AppDispatch } from "../store/store";

const ListTodo = () => {
  const dispatch: AppDispatch = useDispatch();
  const { todoItemsData, amount, searchKeyword } = useSelector(
    (state) => state.todo
  );
  const [filterVal, setFilterVal] = useState("");
  const { isOpen } = useSelector((state) => state.modal);

  if (amount === 0) {
    return (
      <section className="todo no-task">
        <h2>Tasks</h2>
        <div className="todo-comment">
          <p>現在タスクはありません。</p>
        </div>
        <div className="todo-create">
          <button className="default-btn">
            <Link href="/create">新規作成</Link>
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="todo">
      <h2>Tasks</h2>

      <div className="search">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(searchTodo(filterVal));
          }}
        >
          <label htmlFor="search">タスクを探す</label>
          <div className="search-box">
            <input
              id="search"
              type="text"
              value={filterVal}
              onChange={(e) => setFilterVal(e.target.value)}
            />
            <button className="default-btn color-reverse-btn">検索</button>
          </div>
        </form>
      </div>

      {isOpen && <Modal />}

      <ul className="todo-list">
        {todoItemsData
          .filter((item) => {
            const isMatch = item.title!.indexOf(searchKeyword) !== -1;
            return isMatch;
          })
          .map((item) => {
            return (
              <li key={item.id} className="todo-item">
                <Link href={`/detail/${item.id}`}>
                  <span>{item.title}</span>
                </Link>

                <div>
                  <button className="default-btn">
                    <Link href={`/edit/${item.id}`}>編集</Link>
                  </button>

                  <button
                    className="default-btn"
                    onClick={() => dispatch(deleteTodo(item.id))}
                  >
                    完了
                  </button>
                </div>
              </li>
            );
          })}
      </ul>

      <div className="todo-remove btn-center">
        <button className="default-btn" onClick={() => dispatch(openModal())}>
          全削除
        </button>
      </div>
    </section>
  );
};

export default ListTodo;
