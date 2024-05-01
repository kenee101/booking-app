import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleEscape = (e) => {
    console.log(e);
    if (e.key === "Escape") setIsOpenModal(false);
  };

  return (
    <div onKeyDown={handleEscape}>
      <Button
        onClick={() => {
          setIsOpenModal((show) => !show);
        }}
      >
        {isOpenModal ? "Close cabin" : "Add new cabin"}
      </Button>

      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
