import React, { useState } from "react";

import { NavLink, Outlet } from "react-router";

function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("agents");
  return (
    <div className="grid grid-cols-5 gap-8">
      <aside className="col-start-1 col-end-2">
        <ul>
          <li>
            <NavLink to="/AdminDashboard/Agents">Agents</NavLink>
          </li>
          <li>
            <NavLink>Tenants</NavLink>
          </li>
          <li>
            <NavLink to="/AdminDashboard/Properties">Properties</NavLink>
          </li>
          <li>
            <NavLink>Payments</NavLink>
          </li>
          <li>
            <NavLink>Maintenance</NavLink>
          </li>
        </ul>
      </aside>
      <main className="col-start-2 col-end-6">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminDashboard;
