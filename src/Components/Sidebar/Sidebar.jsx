import "./Sidebar.css";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
function Sidebar({ sidebars, title }) {
  return (
    <main className="sidebar-container">
      <section className="sidebar">
        <div className="sidebar-logo">
       <HiOutlineSquares2X2 className="logo-icon" />
        <span className="title">{title}</span>
        </div>
        <ul>
          {sidebars.map((sidebar) => {
            return (
              <li key={sidebar.id}>
                <a href={sidebar.path}>
                  <span className="icon">{sidebar.icon}</span>
                  {sidebar.title}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Sidebar;
