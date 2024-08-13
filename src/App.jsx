import CartList from "./CartList";
import CartContextProvider from "./contexts/CartContextProvider";

function App() {
  return (
    <CartContextProvider>
      <div className="container">
        <h1
          style={{
            textAlign: "center",
            fontSize: "3rem",
            color: "green",
            marginBottom: "2rem",
          }}>
          React Context API
        </h1>
        <CartList />
      </div>
      ;
    </CartContextProvider>
  );
}

export default App;
