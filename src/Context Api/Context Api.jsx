import React, { createContext, useState } from "react";
export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [sidebar, setsidebar] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const toggleSidebar = () => {
    setsidebar((prev) => !prev);
  };
  const opencategory = () => {
    setShowCategories(true);
  };
  const closecategory = () => {
    setShowCategories(false);
  };
  return (
    <DataContext
      value={{
        sidebar,
        setsidebar,
        toggleSidebar,
        showCategories,
        setShowCategories,
        opencategory,
        closecategory,
      }}
    >
      {children}
    </DataContext>
  );
};
