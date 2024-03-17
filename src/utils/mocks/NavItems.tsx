import { DownArrow } from "../icons/Icons";
import {
  AnalyticsLine,
  HistoryOutline,
  HomeOutline,
  ProductOutline,
  RoomOutline,
  ScheduleOutline,
} from "../icons/SidebarIcons";

export const NavMenu = [
  {
    icon: <HomeOutline />,
    title: "Proterty Type",
    downArrow: <DownArrow />,
  },
  {
    icon: <HomeOutline />,
    title: "Surface",
    downArrow: <DownArrow />,
  },
  {
    icon: <RoomOutline />,
    title: "Room/Bedroom",
    downArrow: <DownArrow />,
  },
  {
    icon: <ProductOutline />,
    title: "Products",
    downArrow: null,
  },
  {
    icon: <AnalyticsLine />,
    title: "Analytics",
    downArrow: <DownArrow />,
  },
  {
    icon: <ScheduleOutline />,
    title: "Schedules",
    downArrow: null,
  },
  {
    icon: <HistoryOutline />,
    title: "History",
    downArrow: null,
  },
  {
    icon: <HomeOutline />,
    title: "Sales",
    downArrow: <DownArrow />,
  },
];
