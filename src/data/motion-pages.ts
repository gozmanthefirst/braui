// External Imports
import {
  TbDeviceGamepad2,
  TbHome2,
  TbLayoutList,
  TbLoader,
  TbMessage2,
  TbRun,
} from "react-icons/tb";

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
  {
    icon: TbMessage2,
    value: "feedback",
    name: "Feedback",
    href: "/motions/feedback",
  },
  {
    icon: TbRun,
    value: "multi-step",
    name: "Multi-step",
    href: "/motions/multi-step",
  },
  {
    icon: TbLayoutList,
    value: "accordion",
    name: "Accordion",
    href: "/motions/accordion",
  },
];
