import { useReducer, useContext, createContext } from 'react';

const WishlistStateContext = createContext();
const WishlistDispatchContext = createContext();

export const fetchWishlist = async (userUID, dispatch) => {
	try {
		const res = await fetch(`/api/users/${userUID}/wishlist`);
    const { data } = await res.json();
		return dispatch({
			type: 'FETCH_WISHLIST',
			games: data
		});
	} catch(error) {
		console.log(error);
	}
};

export const toggleWishlist = async(userUID, gameID, dispatch) => {
	try {
		const res = await fetch(`/api/users/${userUID}/wishlist`, {
			method: 'POST',
			body: JSON.stringify({id: gameID}),
			headers: { 'Content-Type': 'application/json' }
		});
		return dispatch({ 
			type: 'TOGGLE_WISHLIST', 
			gameID: gameID
		});
	} catch(error) {
		console.log(error);
	}
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_WISHLIST':
      return action.games;
    case 'TOGGLE_WISHLIST':
      if(state.includes(action.gameID)) {
        const newWishlist = [...state];
        newWishlist.splice(action.index, 1);
        return newWishlist;
      } else {
        return [...state, action.gameID];
      }
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
};

export const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
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