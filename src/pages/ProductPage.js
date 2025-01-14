import Header from "../components/ShopPage/Header/Header"
import Slider from "../components/ShopPage/Slider/Slider"
import Feature from "../components/ShopPage/Feature/Feature"
import DealsOfTheMonth from "../components/ShopPage/DealsOfTheMonth/DealsOfTheMonth"
import Subscribe from "../components/ShopPage/Subscribe/Subscribe"
import Footer from "../components/ShopPage/Footer/Footer"
import ProductDetail from "../components/ShopPage/ListProducts/ProductDetail"
import { useParams } from 'react-router-dom';

function ProductPage() {

    const { id: productId } = useParams(); 

    return (
        <>
            <Header />
            <ProductDetail productId={productId} /> 
            <Slider />
            <Feature />
            <DealsOfTheMonth />
            <Subscribe />
            <hr></hr>
            <Footer />
        </>
    )
}

export default ProductPage

