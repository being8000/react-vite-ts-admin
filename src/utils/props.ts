import { FormikValues } from "formik";
type FormikFieldProps = {
  formik: FormikValues;
  field: string;
  label: string;
};
export const formikFieldProps = ({
  formik,
  field,
  label,
}: FormikFieldProps) => {
  return {
    id: field,
    name: field,
    label: label,
    value: formik.values[field],
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    error: formik.touched[field] && Boolean(formik.errors[field]),
    helperText: formik.touched[field] && formik.errors[field],
  };
};
