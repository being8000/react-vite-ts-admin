// import { Route, redirect } from "react-router-dom";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import * as yup from "yup";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import { useEffect, useRef, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormHelperText from "@mui/material/FormHelperText";
import api from "@/utils/request";
import { FieldProps, FieldPropsNH } from "@/utils/props";
import { MD5 } from "crypto-js";
import { LoginForm, login, getToken } from "@/app/slice/UserSlice";
import { useAppDispatch } from "@/app/hooks";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
  msgCode: yup.string().required("OTP is required"),
});

function SmsSender({
  smsCheck,
}: {
  smsCheck: () => Promise<boolean | LoginForm>;
}) {
  const [time, setTime] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const timeRef = useRef<NodeJS.Timeout>();
  useEffect(() => {
    if (time > 0) {
      timeRef.current = setTimeout(() => {
        setTime((time) => time - 1);
      }, 1000);
    }
    return () => {
      clearInterval(timeRef.current);
    };
  }, [time]);

  const sendSms = async () => {
    const res = await smsCheck();
    if (res) {
      const form = res as LoginForm;
      setLoading(true);
      api
        .GET("SendLoginOTP", {
          ...form,
          password: MD5(form.password).toString(),
          type: 10,
        })
        .then(() => {
          setTime(60);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  if (time > 0) {
    return <span>{time}s</span>;
  }
  return (
    <Button variant="text" onClick={sendSms} disabled={loading}>
      Send
    </Button>
  );
}

export default function AuthRoute() {
  const navigate = useNavigate();
  // const token = useAppSelector(selectToken);
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      username: "elon",
      password: "elon123456",
      msgCode: "666666",
    } as LoginForm,
    validationSchema,
    onSubmit: async (form) => {
      try {
        await dispatch(
          login({ ...form, password: MD5(form.password).toString() })
        );
        if (getToken()) {
          navigate("/", {
            replace: true,
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  const smsCheck = async (): Promise<boolean | LoginForm> => {
    // validationSchema.validateAt("password", "").catch((el) => {
    try {
      const errors = (await formik.setTouched(
        {
          username: true,
          password: true,
        },
        true
      )) as LoginForm;
      if (errors.username || errors.password) {
        return false;
      }
      return formik.values;
    } catch (e) {
      console.log("catch");
      return false;
    }
    // });
  };

  return (
    <div className=" w-screen min-h-screen flex items-center justify-center">
      <Paper className="p-5" sx={{ width: "50ch" }}>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            margin="dense"
            variant="standard"
            {...FieldProps({
              formik,
              label: "User Name",
              field: "username",
            })}
          />
          <FormControl sx={{ marginY: 2 }} fullWidth variant="standard">
            <InputLabel
              htmlFor="password"
              error={formik.touched.password && Boolean(formik.errors.password)}
            >
              Password
            </InputLabel>
            <Input
              type={showPassword ? "text" : "password"}
              margin="dense"
              {...FieldPropsNH({
                formik,
                label: "Password",
                field: "password",
              })}
              // name="password"
              // id="password"
              // value={formik.values.password}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // error={formik.touched.password && Boolean(formik.errors.password)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />

            <FormHelperText error id="outlined-weight-helper-text">
              {formik.touched.password && formik.errors.password}
            </FormHelperText>
          </FormControl>
          <FormControl sx={{ m: 0 }} fullWidth variant="standard">
            <InputLabel
              htmlFor="msgCode"
              error={formik.touched.msgCode && Boolean(formik.errors.msgCode)}
            >
              OTP
            </InputLabel>
            <Input
              margin="dense"
              {...FieldPropsNH({
                formik,
                label: "SMS Code",
                field: "msgCode",
              })}
              endAdornment={
                <InputAdornment position="end">
                  <SmsSender smsCheck={smsCheck} />
                </InputAdornment>
              }
            />

            <FormHelperText error id="outlined-weight-helper-text">
              {formik.touched.msgCode && formik.errors.msgCode}
            </FormHelperText>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{ marginY: 4 }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </div>
  );
  // <Route
  //   {...rest}
  //   render={({ location }) =>
  //     auth.user ? (
  //       children
  //     ) : (
  //       <Redirect
  //         to={{
  //           pathname: "/login",
  //           state: { from: location },
  //         }}
  //       />
  //     )
  //   }
  // />
}
