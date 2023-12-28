import { updateTodo } from "@/api";
import { Button, Input, Modal } from "@/components";
import { errorToast, successToast } from "@/utils";
import { useState } from "react";

type UpdateModalProps = {
  id: string;
  title: string;
  refetch: () => void;
};
export function UpdateModal({ id, title, refetch }: UpdateModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [val, setVal] = useState(title);

  const handleUpdate = () => {
    setLoading(true);
    updateTodo({ id, val })
      .then(() => {
        successToast();
        refetch();
        setLoading(false);
        setIsOpen(false);
      })
      .catch(() => {
        errorToast();
        setLoading(false);
      });
  };
  return (
    <>
      <Button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        UPDATE
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
          <Button onClick={handleUpdate}>
            {loading ? "SUBMITTING..." : "SUBMIT"}
          </Button>
        </div>
      </Modal>
    </>
  );
}
