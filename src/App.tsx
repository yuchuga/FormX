import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AccountProvider } from './auth/AccountProvider'

//Components
import Login from './components/Login'
import Signup from './components/Signup'

//Pages
import Home from './pages/Home'
import Product from './pages/Product'
import Checkout from './pages/Checkout'
import Confirmation from './pages/Confirmation'
import Count from './pages/Count'
import ProductDetails from './pages/ProductDetails'
import Navbar from './components/Navbar'
import AppThemeProvider from './themes/AppThemeProvider'

function App() {

  return (
    <AccountProvider>
      <AppThemeProvider>
        <Router>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/account/login" element={<Login />} />
              <Route path="/account/register" element={<Signup />} />
              <Route path="/account/:id" element={<Home />} />
              <Route path="/collections/all" element={<Product />} />
              <Route path="products/x1" element={<ProductDetails />} />
              <Route path="products/n1" element={<ProductDetails />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/checkout/success" element={<Confirmation />} />
              <Route path="/count" element={<Count />}/>
            </Routes>
        </Router>
      </AppThemeProvider>  
    </AccountProvider>
  );
}

export default App