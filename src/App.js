import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchVideo from "./components/WatchVideo";
import MainContainer from "./components/MainContainer";
import SearchResults from "./components/SearchResults";
import ThemeProvider from "./contexts/context";

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
  // const { darkMode } = ModeState();

  return (
    <ThemeProvider>
      <Provider store={appStore}>
        {/* <div className={`${darkMode && "bg-[#0F0F0F]]"}`}> */}
        <RouterProvider router={appRouter}>
          <Body />
        </RouterProvider>
        {/* </div> */}
      </Provider>
    </ThemeProvider>
  );
};

export default App;
