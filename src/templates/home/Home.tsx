import { getTodoList } from "@/api";
import { TODO } from "@/api/types";
import { Button, ListTitle, Title, Input, Modal } from "@/components";
import { useEffect, useState } from "react";
import { ListItem } from "./ListItem";
import { AddTodo } from "./AddTodo";
import { errorToast } from "@/utils";

export function Home() {
  const [data, setData] = useState<{
    completed: TODO[];
    uncompleted: TODO[];
  }>();

  const fetchData = () => {
    getTodoList()
      .then((res: typeof data) => {
        setData(res);
      })
      .catch(() => {
        errorToast();
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        background: "#f3f3f3",
        maxWidth: 450,
        margin: "10px auto",
        padding: 16,
        boxSizing: "border-box",
        borderRadius: 10,
        border: "1px solid #c0c0c0",
      }}
    >
      <AddTodo refetch={fetchData} />
      <Title style={{ marginTop: 20 }}>UNCOMPLETED</Title>
      <ul style={{ width: "100%" }}>
        {data?.uncompleted?.map((item) => (
          <ListItem key={item.id} refetch={fetchData} {...item} />
        ))}
      </ul>

      <Title style={{ marginTop: 20 }}>COMPLETED</Title>
      <ul style={{ width: "100%" }}>
        {data?.completed?.map((item) => (
          <ListItem key={item.id} refetch={fetchData} {...item} />
        ))}
      </ul>
    </div>
  );
}
