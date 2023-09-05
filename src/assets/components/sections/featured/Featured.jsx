import React from 'react';
import Products from './Product';
import productsData from '../../../resources/products.json'
import './Featured.css'
const Featured = () => {

    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        if (productsData.products && productsData.products.length > 0) {
            const allProducts = productsData.products.map((c, index) => (
                <Products
                    key={index}
                    imgPath={c.imgPath}
                    name={c.name}
                    price={c.price}
                    discount={c.discount}
                    discSize={c.discountSize}
                />
            ));
            setProducts(allProducts);
        }
    }, []);
    return (
        <>
            <section className='featured'>
                <h4 className='ftd-title'>Featured Products</h4>
                <h2 className='ftd-subtitle'>Our Products</h2>
                <p className='ftd-p'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                <div className='ftd-products'>
                    {products}
                </div>
            </section>
        </>
    )
}

export default Featured