import React from "react";
import EditTodo from "../../../components/EditTodo";
import App from "../../app";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <App>
      <EditTodo id={params.id} />
    </App>
  );
};

export default page;
