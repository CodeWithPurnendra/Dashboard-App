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

  return (
    <div>
      <Navbar />
      <Sidebar sidebars={sidebars} title="SaaS Dashboard" />
    </div>
  );
}

export default App;
