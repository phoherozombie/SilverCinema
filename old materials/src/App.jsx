import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";

import "./styles/styles.css";
import "./styles/queries.css";

import { ProtectedRoute } from "./components/ProtectedRoute";

import { SignupModal } from "./modals/SignupModal";
import { LoginModal } from "./modals/LoginModal";

import { MobileNav } from "./components/MobileNav";
import { PageLoader } from "./components/PageLoader";
import { ScrollToTop } from "./components/ScrollToTop";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "./reducers/authSlice";

import HomePage from "./pages/Home/HomePage";

const PurchasePage = lazy(() => import("./pages/Purchase/PurchasePage"));
const ShowtimesPage = lazy(() => import("./pages/Showtimes/ShowtimesPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetails/MovieDetailsPage")
);
const AboutUsPage = lazy(() => import("./pages/AboutUs/AboutUsPage"));
const CustomerInfoPage = lazy(() =>
  import("./pages/CustomerInfo/CustomerInfoPage")
);
const AdminPage = lazy(() => import("./pages/Admin/AdminPage"));

const blurredStyle = {
  filter: "blur(5px)",
  pointerEvents: "none",
  userSelect: "none",
};

function App() {
  const { isAuthenticated, signedPerson, signModalState, loginModalState } =
    useSelector((store) => store.authentication);
  const { menuState } = useSelector((store) => store.mobileNav);
  const currentPage = useLocation();
  const dispatch = useDispatch();

  // Load persisted data on app start
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    if (token && user) {
      dispatch(login(user));
    }
  }, [dispatch]);

  return (
    <>
      <div
        style={
          signModalState || loginModalState || menuState ? blurredStyle : {}
        }
      >
        <ToastContainer />

        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes key={currentPage.pathname} location={currentPage}>
            <Route path="/" element={<HomePage />} />
            <Route path="/showtimes" element={<ShowtimesPage />} />
            <Route path="/purchase" element={<PurchasePage />} />
            <Route path="/customer" element={<CustomerInfoPage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/movieDetails/:id" element={<MovieDetailsPage />} />
            <Route path="/purchase" element={<PurchasePage />} />
            <Route path="/customer" element={<CustomerInfoPage />} />
            <Route
              path="/movieDetails"
              element={<Navigate replace to="/movieDetails/1" />}
            />

            <Route
              element={
                <ProtectedRoute
                  condition={
                    isAuthenticated && signedPerson.type_account === "admin"
                  }
                />
              }
            >
              <Route path="/admin" element={<AdminPage />} />
            </Route>
          </Routes>
        </Suspense>
      </div>

      {signModalState && <SignupModal />}
      {loginModalState && <LoginModal />}
      <MobileNav />
      <SpeedInsights />
    </>
  );
}

export default App;