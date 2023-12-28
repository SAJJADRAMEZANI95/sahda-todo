import { createTodo } from "@/api";
import { Button, Input, Modal } from "@/components";
import { errorToast, successToast } from "@/utils";
import { useState } from "react";

type AddTodoProps = {
  refetch: () => void;
};
export function AddTodo({ refetch }: AddTodoProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [val, setVal] = useState("");

  const handleSubmit = () => {
    setLoading(true);
    createTodo({ val })
      .then(() => {
        successToast();
        setLoading(false);
        setIsOpen(false);
        refetch();
      })
      .catch(() => {
        setLoading(false);
        errorToast();
      });
  };
  return (
    <>
      <Button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        +
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <div
          style={{
            width: 400,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <Input
            placeholder="TODO...."
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <Button onClick={handleSubmit}>
            {loading ? "SUBMITTING..." : "SUBMIT"}
          </Button>
        </div>
      </Modal>
    </>
  );
}
