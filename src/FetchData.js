import { useContext, useEffect } from 'react';
import MyContext from './context/MyContext';
import { parseData } from './helpers/parseDataFromSheet';
import products from './data/products.json';

const FetchData = () => {
  const context = useContext(MyContext);
  const { setProducts } = context;

  useEffect(() => {
    setProducts(products.products);
  }, []);

  return null;
};

export default FetchData;
