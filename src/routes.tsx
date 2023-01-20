import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom"

import CheckoutPage from "./pages/checkout/checkout"
import ConfirmationPage from "./pages/confirmation/confirmation"
import ProductsPage from "./pages/products/Products"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProductsPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path='/confirm' element={<ConfirmationPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router