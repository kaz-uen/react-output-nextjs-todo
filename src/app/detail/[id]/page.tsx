import React from "react";
import DetailTodo from "../../../components/DetailTodo";
import App from "../../app";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <App>
      <DetailTodo id={params.id} />
    </App>
  );
};

export default page;
