# React Context API

React's ContextAPI helps with the problem of prop drilling by having the states
in one central place.

It is a convention to have one context for every feature in the application.

## Creating a context

For creating a context React provide us with a **createContext** hook which can
accepts initial state variable or functions. But it is normally set to null.

The **createContext** hook will return a React Component.

```js
import { createContext } from "react";

export const CartContext = createContext();
```

## Providing a context

We need to provide our app with the context created by a provider component
which is provided by the created context.

```html
<CartContext.Provider value="{statevariables or functions inside a object}"
  >...</CartContext.Provider
>
```

The provider component can be wrapped around the app where there is prop
drilling (where there is a series of props through multiple components which is
needed in some of the components.)

Generally it is wrapped around the entire application.

The provider componet has a value prop where the state variables and state
setting functions are passed.

## Consuming a context

After providing the context to the app we need to consume it in the required
component. This can be done by subscribing to the context using **useContext**
hook provided by react.

```js
import { useContext } from "react";

const cartCtx = useContext(CartContext);
```

The **useContext** hook accepts a context component and returns the current
state which is passed through the value prop of the provider component.

In the returned context object we get to access the current states and state
changing functions which can use to display it in the UI or change the state
using the state changing functions.

# React useReducer Hook

This useReducer hook is similiar to the useState hook with the difference here
the dependent states are managed in the same hook rather by providing differnt
states for each operation in useState hook.

## Using the useReducer hook

The **useReducer** hook is provided by the react package.

```js
import { useReducer } from "react";

const [state, dispatchFn] = useReducer(reducerFn, initialValue);
```

This hook accepts two arguments, a reducer function **(reducerFn)** and the
**initialState**. and returns an array, the current state **(state)** and a
dispatch function **(dispatchFn)**.

## Reducer function

One of the arguments of the **useReducer** hook is the reducer function. This is
a fuction where we handle different actions of the app.

```js
const cartReducer = (state, action) => {
  switch (action.type) {
    case "updateQuantity":
      return {
        ...state,
        cartItems: action.payload,
      };

    case "deleteItem":
      return {
        ...state,
        cartItems: action.payload,
      };

    default:
      throw new Error("Unknown action type");
  }
};
```

The reducer function is anormal function which has access to the current state
**(state)** and and a **action** variable.

The action variable contains the actions to be performed in the app which is
dispatched through the [**dispatchFn**](#reducer--funtion) returned through the
**useReducer** hook.

## Dispatch function
