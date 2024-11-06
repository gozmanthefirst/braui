// External Imports
import { TbDeviceGamepad2, TbHome2, TbLoader } from "react-icons/tb";

export const motionPages = [
  {
    icon: TbHome2,
    value: "home",
    name: "Home",
    href: "/",
  },
  {
    icon: TbLoader,
    value: "loading-spinner-button",
    name: "Loading Spinner Button",
    href: "/motions/loading-spinner-button",
  },
  {
    icon: TbDeviceGamepad2,
    value: "games-list",
    name: "Games List",
    href: "/motions/games-list",
  },
];
