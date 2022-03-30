import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Products from './pages/Products'

export default function DirectRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </BrowserRouter>
    )
}