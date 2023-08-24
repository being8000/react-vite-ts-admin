import Button from "@mui/material/Button";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useFormik } from "formik";
import DialogTitle from "@mui/material/DialogTitle";
import { Contacts, createContact, updateContact } from "@/data/contacts";
const validationSchema = yup.object({
  first: yup.string().required("First is required"),
  last: yup.string().required("Last is required"),
  favorite: yup.string().required("favorite is required"),
  twitter: yup.string().required("twitter is required"),
  avatar: yup.string().required("avatar is required"),
  notes: yup.string().required("notes is required"),
});
export default function FormDialog({
  open,
  onClose,
  data,
}: {
  open: boolean;
  onClose: () => unknown;
  data: Contacts;
}) {
  const formik = useFormik({
    initialValues: data,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (values.id) {
        await updateContact(values.id, values);
      } else {
        const contact = await createContact();
        values.id = contact.id;
        await updateContact(contact.id, values);
      }
      console.log(values);
      onClose();
    },
  });
  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <form onSubmit={formik.handleSubmit}>
          <DialogTitle>Contacts</DialogTitle>
          <DialogContent sx={{}}>
            <TextField
              fullWidth
              margin="dense"
              id="first"
              name="first"
              label="First"
              variant="standard"
              value={formik.values.first}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.first && Boolean(formik.errors.first)}
              helperText={formik.touched.first && formik.errors.first}
            />
            <TextField
              fullWidth
              margin="dense"
              id="last"
              name="last"
              label="Last"
              variant="standard"
              value={formik.values.last}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.last && Boolean(formik.errors.last)}
              helperText={formik.touched.last && formik.errors.last}
            />
            <TextField
              fullWidth
              margin="dense"
              id="twitter"
              name="twitter"
              label="twitter"
              variant="standard"
              value={formik.values.twitter}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.twitter && Boolean(formik.errors.twitter)}
              helperText={formik.touched.twitter && formik.errors.twitter}
            />
            <TextField
              fullWidth
              margin="dense"
              id="avatar"
              name="avatar"
              label="avatar"
              variant="standard"
              value={formik.values.avatar}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.avatar && Boolean(formik.errors.avatar)}
              helperText={formik.touched.avatar && formik.errors.avatar}
            />
            <TextField
              fullWidth
              margin="dense"
              id="notes"
              name="notes"
              label="notes"
              variant="standard"
              value={formik.values.notes}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.notes && Boolean(formik.errors.notes)}
              helperText={formik.touched.notes && formik.errors.notes}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="submit">Submit</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
