import React, { useState, useMemo } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import { UserContext } from "../context/userContext";

function Layout() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <>
      <UserContext.Provider value={value}>
        <Header />

        <Outlet />

        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default Layout;
