import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchVideo from "./components/WatchVideo";
import MainContainer from "./components/MainContainer";
import SearchResults from "./components/SearchResults";
import { useState } from "react";
import { themeContext } from "./contexts/context.js";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchVideo />,
      },
      {
        path: "/results",
        element: <SearchResults />,
      },
    ],
  },
]);

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleModeHandler = () => {
    setDarkMode(!darkMode);
  };

  return (
    <themeContext.Provider value={{ dark : darkMode }}>
      <Provider store={appStore}>
        <div className={`${darkMode && "bg-[#0F0F0F]]"}`}>
          <label className="switch fixed">
            <input type="checkbox" onChange={toggleModeHandler} />
            <span className="slider round"></span>
          </label>
          <RouterProvider router={appRouter}>
            <Body />
          </RouterProvider>
        </div>
      </Provider>
    </themeContext.Provider>
  );
};

export default App;
