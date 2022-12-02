import { ReactElement } from "react";
import { createPortal } from "react-dom";
import { Variant } from "~/types";
import { StyledModalOverlay, StyledModal, StyledModalGuts } from "./Style";

export interface ModalVariant {
  variant?: Variant;
}
interface ModalProps extends ModalVariant {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  renderContent: ReactElement;
}

function Modal({
  openModal,
  setOpenModal,
  variant = "outlined",
  renderContent = <></>,
}: ModalProps) {
  const $root = document.getElementById("root") as HTMLElement;

  const closeModalHandler = () => {
    setOpenModal(false);
  };
  return (
    <>
      {openModal &&
        createPortal(
          <>
            <StyledModalOverlay />
            <StyledModal variant={variant}>
              <StyledModalGuts>{renderContent}</StyledModalGuts>
            </StyledModal>
          </>,
          $root
        )}
    </>
  );
}

export default Modal;
