import { useEffect, useState, createContext } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { v4 as uuidv4 } from 'uuid'
import { listProducts } from '../graphql/queries'
import { processOrder } from '../graphql/mutations'

const ProductContext = createContext();

const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts()
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await API.graphql(graphqlOperation(listProducts))
      const products = data.listProducts.items
      console.log('fetchProducts', products)
      setProducts(products)
    } catch (e) {
      console.error(e)
    }
  };

  const checkout = async (orderDetails) => {
    const payload = { id: uuidv4(), ...orderDetails }
    try {
      await API.graphql(graphqlOperation(processOrder, { input: payload }))
      console.log('Order is successful!')
    } catch (e) {
      console.error(e)
    }
  };

  return (
    <ProductContext.Provider value={{ products, loading, checkout }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };