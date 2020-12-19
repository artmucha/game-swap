import { useReducer, useContext, createContext } from 'react';

const WishlistStateContext = createContext();
const WishlistDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      return [...state, action.payload]
    case 'REMOVE_FROM_WISHLIST':
    	const newWishlist = [...state];
      newWishlist.splice(action.index, 1);
      return newWishlist
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
};

export const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, [])
  return (
    <WishlistDispatchContext.Provider value={dispatch}>
      <WishlistStateContext.Provider value={state}>
        {children}
      </WishlistStateContext.Provider>
    </WishlistDispatchContext.Provider>
  )
};

export const useWishlist = () => useContext(WishlistStateContext);
export const useDispatchWishlist = () => useContext(WishlistDispatchContext);