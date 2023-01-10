/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/main.jsx",
    "./index.html",
    "./src/App.jsx",
    "./src/pages/Home.jsx",
    "./src/pages/NewsListings.jsx",
    "./src/pages/WalletListings.jsx",
    "./src/pages/SecurityListings.jsx",
    "./src/pages/BlockchainListings.jsx",
    "./src/pages/BlogPage.jsx",
    "./src/components/AccordionNav.jsx",
    "./src/components/HomeBody.jsx",
    "./src/components/NewsListingsBody.jsx",
    "./src/components/WalletListingsBody.jsx",
    "./src/components/BlogPageBody.jsx",
    "./src/components/Nav.jsx",
    "./src/partials/BlogNav.jsx",
    "./src/partials/NewsList.jsx",
    "./src/partials/WalletList.jsx",
    "./src/partials/SecurityList.jsx",
    "./src/partials/MiningList.jsx",
    "./src/partials/BlockchainList.jsx",
    "./src/partials/Categories.jsx",
  ],
  theme: {
    extend: {
      backgroundColor: {
        bgBody: "#01071d",
        bg: "#010b2c",
      },
    },
  },
  plugins: [],
};
