import { ReactNode } from "react";

interface props {
  children: ReactNode;
  onClose: () => void;
}
export const Alert = ({ children, onClose }: props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        onClick={onClose}
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
