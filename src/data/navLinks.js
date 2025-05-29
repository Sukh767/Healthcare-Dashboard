// src/data/navLinks.js
import {
  CalendarDays,
  Settings,
  LayoutDashboard,
  ArrowDownUp,
  ChartLine,
  CalendarPlus2,
  Phone,
  MessageCircleMore,
} from "lucide-react";

export const navLinks = {
  general: [
    { name: "Dashboard", icon: LayoutDashboard, color: "#010a4a" },
    { name: "History", icon: ArrowDownUp, color: "#757575" },
    { name: "Calendar", icon: CalendarDays, color: "#757575" },
    { name: "Appointments", icon: CalendarPlus2, color: "#757575" },
    { name: "Statistics", icon: ChartLine, color: "#757575" },
  ],
  tools: [
    { name: "Chat", icon: MessageCircleMore, color: "#757575" },
    { name: "Support", icon: Phone, color: "#757575" },
  ],
  settings: {
    name: "Setting",
    icon: Settings,
    color: "#757575",
  },
};
