import ProductDetails from './pages/ProductDetails'
import Header from './components/Header'
import React from 'react';
function App() {
  const [cartCount, setCartCount] = React.useState(0)

  const addToCart = () => {
    setCartCount(cartCount + 1)
  }
  return (
    <>
      <Header cartValue={cartCount} />
      <ProductDetails addToCart={addToCart} />
    </>
  );
}

export default App;
