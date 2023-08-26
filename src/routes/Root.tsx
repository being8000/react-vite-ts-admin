import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { Outlet, useNavigation, redirect } from "react-router-dom";
import Sidebar from "@/components/Sidebar/Index";
import Navbar from "@/components/Navbar/Navbar";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import { userInfo, clearUserInfo } from "@/app/slice/UserSlice";
import { store } from "@/app/store";
import { ScrollRestoration } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}
export async function loader() {
  if (!store.getState().user.user) {
    await store.dispatch(userInfo());
  }
  if (!store.getState().user.user) {
    await store.dispatch(clearUserInfo());
    return redirect("/login");
  }
  return store.getState().user.user;
}
export function Root(props: Props) {
  const theme = useTheme();
  const navigation = useNavigation();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleMobileDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    setOpen(false);
  };
  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const drawer = (
    <div>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Sidebar></Sidebar>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Navbar
          handleDrawerToggle={handleDrawerToggle}
          handleMobileDrawerToggle={handleMobileDrawerToggle}
          open={open}
        />
        <Box
          component="nav"
          sx={{ flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <MuiDrawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleMobileDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </MuiDrawer>
          <Drawer
            variant="permanent"
            open={open}
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: {
              sm: `100%`,
            },
            maxWidth: "100vw",
          }}
        >
          <Toolbar />
          <div
            id="detail"
            className={navigation.state === "loading" ? "loading" : ""}
          >
            <Outlet />
          </div>
        </Box>
        <ScrollRestoration />
      </Box>
    </>
  );
}
