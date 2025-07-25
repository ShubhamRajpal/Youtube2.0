import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchVideo from "./components/WatchVideo";
import MainContainer from "./components/MainContainer";
import SearchResuts from "./components/SearchResuts";

const App = () => {
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
          element: <SearchResuts />,
        },
      ],
    },
  ]);

  return (
    <Provider store={appStore}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};

export default App;
