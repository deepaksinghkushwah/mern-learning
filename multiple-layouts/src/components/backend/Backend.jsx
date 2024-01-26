import React from "react";
import { Outlet } from "react-router-dom";
import LeftMenu from "./LeftMenu";

function Backend() {
  return (
    <div className="flex items-start gap-3">
      <div>
        <LeftMenu />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Backend;
