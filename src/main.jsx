import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Product from './sections/Product.jsx'
import Footer from './sections/Footer.jsx'
import Nav from './components/Nav.jsx'
import Cart from './sections/Cart.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>  
    <Router>
    <Nav />
      <Routes>
        <Route path='/' element={<App />} />
    <Route path='/product/:url' element={<Product />} />
    <Route path='/cart' element={<Cart />} />
      </Routes>
      <Toaster />
    <Footer />
    </Router>
    </Provider>
  </StrictMode>,
)
