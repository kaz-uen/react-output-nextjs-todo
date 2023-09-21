"use client";

import { useState, useEffect } from "react";
import { updateTodo } from "../features/TodoSlice";
import { useDispatch } from "react-redux";
import { useSelector, AppDispatch } from "../store/store";
import { TodoItemType } from "../types/TodoType";
import { useRouter } from "next/navigation";

const EditTodo = ({ id }: { id: string }) => {
  const todoId = Number(id);
  const [todo, setTodo] = useState<TodoItemType | undefined>();
  const [updateTitle, setUpdateTitle] = useState<string | undefined>("");
  const [updateContent, setUpdateContent] = useState<string | undefined>("");
  const { todoItemsData } = useSelector((state) => state.todo);
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    todoItemsData.map((item) => {
      if (item.id === todoId) {
        setTodo(item);
        setUpdateTitle(item.title);
        setUpdateContent(item.content);
      }
    });
  }, [todoId]);

  return (
    <div className="form common-form flex-form">
      <h2>Edit Todo</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (updateTitle && updateContent) {
            dispatch(
              updateTodo({
                id: todo!.id,
                title: updateTitle,
                content: updateContent,
              })
            );
            router.push("/");
          } else {
            alert("タスクを正しく入力してください。");
          }
        }}
      >
        <label htmlFor="title">タイトル</label>
        <input
          id="title"
          type="text"
          value={updateTitle}
          onChange={(e) => setUpdateTitle(e.target.value)}
        />

        <label htmlFor="content">詳細内容</label>
        <textarea
          id="content"
          value={updateContent}
          onChange={(e) => setUpdateContent(e.target.value)}
        />

        <div className="btn-center">
          <button className="default-btn color-reverse-btn">更新</button>
        </div>
      </form>
    </div>
  );
};

export default EditTodo;
