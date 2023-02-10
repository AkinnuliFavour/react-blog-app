import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./shared layout/SharedLayout";
import Home from "./pages/Home";
import MiningListings from "./pages/MiningListings";
import NewsListings from "./pages/NewsListings";
import WalletListings from "./pages/WalletListings";
import SecurityListings from "./pages/SecurityListings";
import BlockchainListings from "./pages/BlockchainListings";
import AddListing from "./pages/AddListing";
import BlogPage from "./pages/BlogPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";

function App() {
  const [openAccordion, setOpenAccordion] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <SharedLayout
              openAccordion={openAccordion}
              setOpenAccordion={setOpenAccordion}
            />
          }
        >
          <Route index element={<Home openAccordion={openAccordion} />} />
          <Route
            path="/news-listings"
            element={<NewsListings openAccordion={openAccordion} />}
          />
          <Route
            path="/wallet-listings"
            element={<WalletListings openAccordion={openAccordion} />}
          />
          <Route
            path="/mining-listings"
            element={<MiningListings openAccordion={openAccordion} />}
          />
          <Route
            path="/security-listings"
            element={<SecurityListings openAccordion={openAccordion} />}
          />
          <Route
            path="/blockchain-listings"
            element={<BlockchainListings openAccordion={openAccordion} />}
          />
          <Route
            path="/add-listing"
            element={<AddListing openAccordion={openAccordion} />}
          />
          <Route
            path="/blog-page"
            element={<BlogPage openAccordion={openAccordion} />}
          />
        </Route>
        <Route path="/register-page" element={<RegisterPage />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              openAccordion={openAccordion}
              setOpenAccordion={setOpenAccordion}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
