import { Suspense } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import PageLoader from "../components/loaders/PageLoader";

const MainLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <div className="flex flex-col min-h-screen" dir="rtl">
      <Header />

      <main className="flex-grow container mx-auto p-4">
        <Suspense fallback={<PageLoader />}>
          {isPageLoading ? <PageLoader /> : <Outlet />}
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
