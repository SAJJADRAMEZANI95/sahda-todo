import { toggleTodo, deleteTodo } from "@/api";
import { TODO } from "@/api/types";
import { Button, ListTitle } from "@/components";
import { UpdateModal } from "./UpdateModal";
import { errorToast, successToast } from "@/utils";

type ListItemProps = TODO & {
  refetch: () => void;
};
export function ListItem({ id, item, todoStatu, refetch }: ListItemProps) {
  const handleToggle = () => {
    toggleTodo({ id, type: todoStatu === "1" ? 2 : 1 })
      .then(() => {
        successToast();
        refetch();
      })
      .catch(() => {
        errorToast();
      });
  };

  const handleDelete = () => {
    deleteTodo({ id })
      .then(() => {
        successToast();
        refetch();
      })
      .catch(() => {
        errorToast();
      });
  };

  return (
    <div
      key={id}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
      }}
    >
      <ListTitle style={{ maxWidth: 200, textOverflow: "ellipsis" }}>
        {" "}
        - {item}
      </ListTitle>
      <div style={{ display: "flex", gap: 5 }}>
        <UpdateModal refetch={refetch} title={item} id={id} />
        <Button style={{ background: "red" }} onClick={handleDelete}>
          DELETE
        </Button>
        <Button style={{ background: "green" }} onClick={handleToggle}>
          Toggle
        </Button>
      </div>
    </div>
  );
}
