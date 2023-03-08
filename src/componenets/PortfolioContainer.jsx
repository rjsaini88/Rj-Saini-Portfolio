import React, { useState } from "react";
import NavTabs from "./NavTabs";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Blog from "./pages/Blog";
// import Contact from "./pages/Contact.jsx";

export default function PortfolioContainer() {
    return (
        <NavTabs/>
    )
//   const [currentPage, setCurrentPage] = useState("Home");

//   const renderPage = () => {
//     if (currentPage === "Home") {
//       return <Home />;
//     }

//     return <>Page not found</>;

    // Might cause error because it tries to render some html
    // but it is returning undefined
//   };

//   const handlePageChange = (page) => setCurrentPage(page);
}
