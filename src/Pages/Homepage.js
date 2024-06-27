import Navbar from "../features/Navbar/navbar";
import ProductList from "../features/product-list/components/ProductList";

function HomePage() {
    return (<Navbar>
        <ProductList>
        </ProductList>
    </Navbar>);
}

export default HomePage;