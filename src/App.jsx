import CartList from "./CartList";
import CartContextProvider from "./contexts/CartContextProvider";

function App() {
  return (
    <CartContextProvider>
      <div className="container">
        React ContextAPI
        <CartList />
      </div>
      ;
    </CartContextProvider>
  );
}

export default App;
