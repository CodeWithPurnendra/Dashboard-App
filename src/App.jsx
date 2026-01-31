import Navbar from "./Components/Navbar/Navbar.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { RiBillLine } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";

function App() {
  const sidebars = [
    { id: 1, title: "Dashboard", path: "/", icon: <MdDashboard /> },
    { id: 2, title: "Users", path: "/users", icon: <FaUsers /> },
    { id: 3, title: "Billing", path: "/billing", icon: <RiBillLine /> },
    { id: 4, title: "Settings", path: "/settings", icon: <IoSettingsSharp /> },
  ];
  const headerData = [
  {
    id: 1,
    title: "Revenue",
    value: "₹24,500",
    growth: "+12.5%",
    stats: [40, 70, 55, 90, 75, 110],
  },
  {
    id: 2,
    title: "Users",
    value: "1,240",
    growth: "+8.2%",
    stats: [20, 35, 60, 55, 80, 95],
  },
  {
    id: 3,
    title: "Orders",
    value: "320",
    growth: "-2.1%",
    stats: [60, 50, 45, 40, 38, 35],
  },
];

  return (
    <div>
      <Navbar />
      <Sidebar sidebars={sidebars} title="SaaS Dashboard" />
    </div>
  );
}

export default App;
