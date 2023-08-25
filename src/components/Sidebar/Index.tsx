import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Divider from "@mui/material/Divider";
import MailIcon from "@mui/icons-material/Mail";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import Ring from "../Loading/Ring";
import { NavLink } from "react-router-dom";

const routers = [
  {
    path: "/",
    icon: <InboxIcon />,
    title: "Dashboard",
  },
  {
    path: "/counter",
    icon: <InboxIcon />,
    title: "Counter",
  },
  {
    path: "/contacts",
    icon: <InboxIcon />,
    title: "Contacts",
  },
];
export default function Sidebar() {
  return (
    <>
      <List
        sx={{
          padding: "5px",
        }}
      >
        {routers.map((route, index) => (
          <NavLink
            key={index}
            to={route.path}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "pointer-events-none" : ""
            }
          >
            {({ isActive, isPending }) => (
              <ListItem
                disablePadding
                className="transition duration-[150ms]"
                {...(isActive && {
                  sx: {
                    borderRadius: "8px",
                    bgcolor: "#1976d2",
                    color: "#fff",
                  },
                })}
              >
                <ListItemButton>
                  <ListItemIcon>
                    {isPending ? <Ring /> : route.icon}
                  </ListItemIcon>
                  <ListItemText primary={route.title} />
                </ListItemButton>
              </ListItem>
            )}
          </NavLink>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}
