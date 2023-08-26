import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Divider from "@mui/material/Divider";
import MailIcon from "@mui/icons-material/Mail";
import Ring from "../Loading/Ring";
import { NavLink } from "react-router-dom";
import { styled, useTheme, ThemeOptions, alpha } from "@mui/material/styles";

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
  const theme = useTheme();
  return (
    <>
      <List sx={{}}>
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
                  sx: (theme) => {
                    return {
                      borderRadius: "8px",
                      bgcolor: alpha(theme.palette.primary.main, 0.8),
                      color: "#fff",
                      transform: "scale(0.95)",
                    };
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
