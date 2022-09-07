import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'

const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  loading:false,
  total:0,
  amount:0,
  cart:cartItems
}
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const fetchData = async () =>{
    dispatch({type:'LOADING'})
    const res = await fetch(url);
    const cart = await res.json();
    dispatch({type: 'DISPLAY_ITEM', payload: cart})
  }

  useEffect(() => {
    fetchData()
  },[])
  const clearCart = () => {
    dispatch({type: 'CLEAR_CART'})
  }
  const removeItem = (id) => {
    dispatch({type: 'REMOVE_ITEM', payload : id})
  }
  const increaseItem = (id) => {
    dispatch({type: 'INCREASE_ITEM', payload : id})
  }
  const decreaseItem = (id) => {
    dispatch({type: 'DECREASE_ITEM', payload : id})
  }

  useEffect(() => {
   dispatch({type: 'GET_TOTALS'})
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseItem,
        decreaseItem
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }