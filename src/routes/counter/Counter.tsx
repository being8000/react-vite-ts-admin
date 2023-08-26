import { useState } from "react";
import api from "@/utils/request";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  selectStatus,
} from "@/app/slice/CounterSlice";
import styles from "./Counter.module.css";
import {
  useNavigate,
  // useNavigation,
  // useLoaderData,
  // useSubmit,
  // Form,
  // Outlet,
  // NavLink,
  // LoaderFunction,
} from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/app/hooks";

export function loader() {
  return {};
}
export function CounterRoute() {
  const navigate = useNavigate();
  const count = useAppSelector(selectCount);
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;
  const testFetch = () => {
    console.log(import.meta.env);
    api.POST("Login", {});
  };
  const testUseFetch = () => {};
  return (
    <div>
      <button className="border p-3" onClick={testFetch}>
        fetch data
      </button>
      <button className="border p-3" onClick={testUseFetch}>
        usefetch data
      </button>
      <button className="border p-3" onClick={() => navigate("/contacts")}>
        Contacts
      </button>
      <div>{status}</div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
