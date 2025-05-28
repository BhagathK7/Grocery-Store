import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './index.css';
import './assets/styles.css';
import { CartProvider } from './context/CartContext.js';
import { ThemeProvider } from './context/ThemeContext.js';
import { AuthProvider } from './context/AuthContext.js';
import HomePage from './pages/HomePage.js';
import LoginPage from './pages/LoginPage.js';
import SignupPage from './pages/SignupPage.js';
import CartPage from './pages/CartPage.js';
import ProductsPage from './pages/ProductsPage.js';
import NotFoundPage from './pages/NotFoundPage.js';
import OrderSummaryPage from './pages/OrderSummaryPage.js';
import UserProfile from './pages/dashboard/UserProfile.js';
import OrdersPage from './pages/dashboard/OrdersPage.js';
import SettingsPage from './pages/dashboard/SettingsPage.js';
import ProfileLayout from './pages/dashboard/ProfileLayout.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Contact from './pages/Contact.js';
const MainLayout = ({ children }) => {
  const location = useLocation();
  const hideLayout = ['/login', '/signup', '/dashboard'].some(path =>
    location.pathname.startsWith(path)
  );
  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
};

function App() {
  const userId = localStorage.getItem('userId');
  return (
    <ThemeProvider>
      <Router>
      <AuthProvider>
        <CartProvider>
          <MainLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/cart" element={<CartPage userId={userId} />} />
              <Route path="/order-summary" element={<OrderSummaryPage />} />
              <Route path="/dashboard" element={<ProfileLayout />}/>
              <Route path="profile" element={<UserProfile />} />
              <Route path="orders" element={<OrdersPage />} />
              <Route path="settings" element={<SettingsPage />} />
              <Route path="/contact" element={<Contact />} />

              
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </MainLayout>
        </CartProvider>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
