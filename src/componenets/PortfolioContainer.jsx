import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact.jsx';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState ('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
    }
}

const handlePageChange = (page) => setCurrentPage(page);

};
