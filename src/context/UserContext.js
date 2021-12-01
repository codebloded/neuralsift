import { createContext, useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

export const UserContext = createContext();

function UserContextProvider(props) {
  const location = useLocation();
  const baseUrl = "http://localhost:5000";
  const [darkMode, setDarkMode] = useState(true);

  const userValue = {
    darkMode,
    setDarkMode,
    baseUrl,
    location,
  };
  return (
    <UserContext.Provider value={userValue}>
      {props.children}
    </UserContext.Provider>
  );
}
export default UserContextProvider;
