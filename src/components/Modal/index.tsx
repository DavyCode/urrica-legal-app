import { useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import CloseModalIcon from "../../icons/modal-icon/close-modal-icon";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  title?: string;
  children: JSX.Element;
}
const Modal: React.FC<ModalProps> = ({ isOpen, children, title, closeModal = () => null }) => {
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [closeModal]);

  return (
    <Dialog open={isOpen} onClose={closeModal} aria-labelledby='responsive-dialog-title' className='w-full'>
      <DialogTitle id='responsive-dialog-title' className='w-full relative mt-5'>
        <div className='flex justify-between items-center w-full'>
          <p className='text-lg text-color font-bold'>{title}</p>
          <div onClick={closeModal} className='close-wrapper cursor-pointer'>
            <CloseModalIcon />
          </div>
        </div>
      </DialogTitle>
      {children}
    </Dialog>
  );
};

export default Modal;
