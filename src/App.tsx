import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductsPage from "./pages/ProductsPage";
import SupportPage from "./pages/SupportPage";
import LegalPage from "./pages/LegalPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";
import SearchPage from "./pages/SearchPage";
import DownloadPage from "./pages/DownloadPage";
import AppStorePage from "./pages/AppStorePage";
import GooglePlayPage from "./pages/GooglePlayPage";
import { ROUTES } from "./routes/paths";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={ROUTES.home} element={<HomePage />} />
          <Route path={ROUTES.about} element={<AboutPage />} />
          <Route path={ROUTES.contact} element={<ContactPage />} />
          <Route path={ROUTES.products} element={<ProductsPage />} />
          <Route path={ROUTES.support} element={<SupportPage />} />
          <Route path={ROUTES.legal} element={<LegalPage />} />
          <Route path={ROUTES.terms} element={<TermsPage />} />
          <Route path={ROUTES.privacy} element={<PrivacyPage />} />
          <Route path={ROUTES.login} element={<LoginPage />} />
          <Route path={ROUTES.join} element={<JoinPage />} />
          <Route path={ROUTES.search} element={<SearchPage />} />
          <Route path={ROUTES.download} element={<DownloadPage />} />
          <Route path={ROUTES.appStore} element={<AppStorePage />} />
          <Route path={ROUTES.googlePlay} element={<GooglePlayPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
