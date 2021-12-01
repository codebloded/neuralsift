import { createContext, useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

export const UserContext = createContext();

function UserContextProvider(props) {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(true);

  const userValue = {
    darkMode,
    setDarkMode,
    location,
  };
  return (
    <UserContext.Provider value={userValue}>
      {props.children}
    </UserContext.Provider>
  );
}
export default UserContextProvider;
