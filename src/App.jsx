import { CartProvider } from './context/ContextCart';
import ItemList from './components/ItemList';
import './App.css';

const items = [
  { id: 1, name: 'Produto 1', price: 100 },
  { id: 2, name: 'Produto 2', price: 200 },
  { id: 3, name: 'Produto 3', price: 300 },
  { id: 4, name: 'Produto 4', price: 400 },
  { id: 5, name: 'Produto 5', price: 500 },
];

function App() {
  return (
    <CartProvider>
      <ItemList items={items} />
    </CartProvider>
  );
}

export default App;
