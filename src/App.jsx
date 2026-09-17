import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import PageLoader from "./components/loaders/PageLoader";
import { router } from "./router";

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
