import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// shared
import ScrollToTop from "shared/components/ScrollToTop";

// Loaders
import GloabalLoader from  "containers/common/loaders/GlobalLoader";

// Layout
import LayoutWrapper from "containers/common/layout";

// Route Components
const Home = lazy(() => import("containers/public-pages/home"));
const Register = lazy(()=> import('containers/public-pages/register'));
const Checkout = lazy(()=> import('containers/public-pages/checkout'))
const NotFound = lazy(() => import("containers/public-pages/misc/404"));

function AppRoutes() {

  return (
    <BrowserRouter>
      <Suspense fallback={<GloabalLoader />}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LayoutWrapper />} >
             <Route path="/register" element={<Register />} />
             <Route path="/register/checkout" element={<Checkout />} />
             <Route index element={<Home />} />
             <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoutes;
