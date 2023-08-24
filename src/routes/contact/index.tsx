import {
  RouteObject,
  useNavigation,
  useLoaderData,
  useSubmit,
  Form,
  // Outlet,
  // NavLink,
  LoaderFunction,
} from "react-router-dom";
import FormDialog from "./dialog";
import { TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ExampleTable from "@/components/ReactTable";

import { Contacts, getContacts } from "@/data/contacts";
import { useEffect, useState } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

type LoaderData = {
  contacts: Awaited<ReturnType<typeof getContacts>>;
  q: string;
};
export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts, q } as LoaderData;
};
function Root() {
  const [open, setOpen] = useState(false);
  const [contact, setContact] = useState<Contacts>({
    id: "",
    first: "123123",
    last: "",
    favorite: false,
    twitter: "",
    avatar: "",
    notes: "",
  });
  const navigation = useNavigation();
  const { contacts, q } = useLoaderData() as LoaderData;
  const submit = useSubmit();
  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");
  useEffect(() => {
    const qd = document.getElementById("q") as HTMLInputElement;
    qd.value = q;
    console.log(import.meta.env);
  }, [q]);

  const handleClickOpen = () => {
    setContact({
      id: "",
      first: "",
      last: "",
      favorite: false,
      twitter: "",
      avatar: "",
      notes: "",
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {open && <FormDialog onClose={handleClose} open={open} data={contact} />}
      <div id="sidebar">
        {JSON.stringify(contact)}
        <h1 className="text-[red]">React Router Contacts</h1>

        <div className="flex items-center">
          <Form id="search-form" role="search">
            <TextField
              id="q"
              label="Outlined"
              variant="outlined"
              className={searching ? "loading" : ""}
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              size="small"
              name="q"
              defaultValue={q}
              onChange={(event) => {
                const isFirstSearch = q == null;
                submit(event.currentTarget.form, {
                  replace: !isFirstSearch,
                });
              }}
            />
            {/* <input
         
        /> */}
            <div id="search-spinner" aria-hidden hidden={!searching} />
            <div className="sr-only" aria-live="polite"></div>
          </Form>
          <Button
            type="submit"
            size="small"
            variant="contained"
            onClick={handleClickOpen}
          >
            New
          </Button>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="right">First</StyledTableCell>
                <StyledTableCell align="right">Last</StyledTableCell>
                <StyledTableCell align="right">Favorite</StyledTableCell>
                <StyledTableCell
                  align="center"
                  className="sticky right-0 border-"
                >
                  Operate
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contacts.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell align="left">{row.id}</StyledTableCell>
                  <StyledTableCell align="right">{row.first}</StyledTableCell>
                  <StyledTableCell align="right">{row.last}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.favorite && <span>★</span>}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    className="sticky right-0 border-l-2"
                  >
                    Operate
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <ExampleTable />
      {/* <div
        id="detail"
        className={navigation.state === "loading" ? "loading" : ""}
      >
        <Outlet />
      </div> */}
    </>
  );
}

export default {
  path: "/contacts",
  element: <Root />,
  loader: loader,
} as RouteObject;
