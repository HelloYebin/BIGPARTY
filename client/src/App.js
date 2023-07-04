import Header from "./components/header";
import Footer from "./components/componentFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import RouteApply from "./routes/apply/routeApply";
import RouteSummary from "./routes/intro/routeSummary";
import RouteHistory from "./routes/intro/routeHistory";
import RouteInvite from "./routes/intro/routeInvite";
import RouteSchedule from "./routes/information/routeSchedule";
import RouteLocation from "./routes/information/routeLocation";
import RouteBooth from "./routes/information/routeBooth";
import RouteNotice from "./routes/news/routeNotice";
import RoutePress from "./routes/news/routePress";
import RoutePressDetail from "./routes/news/routePressDetail";
import ScrollTop from "./components/scrollTop";
import styles from "./App.module.css";
import AdminRouteNotice from "./routes/news/adminRouteNotice";
import WriteForm from "./writeForm";
import RouteReservation from "./routes/apply/routeReservation";
import RoutePaymentResult from "./routes/apply/routePaymentResult";
import RouteConfirm from "./routes/apply/routeConfirm";

function App() {
  return (
    <div className={styles.appContainer}>
      <BrowserRouter>
        <ScrollTop />
        <div className={styles.appContents}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/intro/summary" element={<RouteSummary />} />
            <Route path="/intro/history" element={<RouteHistory />} />
            <Route path="/intro/invite" element={<RouteInvite />} />
            <Route path="/info/schedule" element={<RouteSchedule />} />
            <Route path="/info/location" element={<RouteLocation />} />
            <Route path="/info/booth" element={<RouteBooth />} />
            <Route path="/news/notice" element={<RouteNotice />} />
            <Route path="/news/notice/admin" element={<AdminRouteNotice />} />
            <Route path="/news/press" element={<RoutePress />} />
            <Route path="/news/press/:id" element={<RoutePressDetail />} />
            <Route path="/apply" element={<RouteApply />} />
            <Route path="/apply/regular" element={<RouteReservation />} />
            <Route path="/apply/result" element={<RoutePaymentResult />} />
            <Route path="/apply/confirm" element={<RouteConfirm />} />
            <Route path="/write" element={<WriteForm />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
