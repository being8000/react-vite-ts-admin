import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
export interface Props {
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
  cancelButtonText?: string;
  confirmButtonText?: string;
}
export default function AlertDialog(props: Props) {
  const [open, setOpen] = React.useState(true);
  const handleConfirm = () => {
    setOpen(true);
    props.onConfirm();
  };

  const handleClose = () => {
    setOpen(false);
    props.onClose();
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {props.title || "Title"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.description || "Description"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            {props.cancelButtonText || "NO"}
          </Button>
          <Button onClick={handleConfirm} autoFocus>
            {props.confirmButtonText || "YES"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
