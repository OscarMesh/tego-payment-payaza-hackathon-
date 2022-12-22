import { Icon } from "@iconify/react";

export const sidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icons: <Icon icon="material-symbols:space-dashboard-sharp" />,
    cName: "menu-item",
  },
  {
    title: " Transactions",
    path: "/transactions",
    icons: <Icon icon="grommet-icons:transaction" />,
    cName: "menu-item",
  },
  {
    title: "Profile",
    path: "/profile",
    icons: <Icon icon="healthicons:ui-user-profile" />,
    cName: "menu-item",
  },
];

export const settingsData = [
  {
    title: "Settings",
    path: "/settings",
    icons: <Icon icon="uiw:setting" />,
  },

  {
    title: "Invite Friends",

    path: "/invite-friends",
    icons: <Icon icon="mdi:invite" />,
  },
];
