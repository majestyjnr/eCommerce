import { WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM } from '../constants/wishListConstants';

function wishListReducer(state = {wishListItems:[]}, action){
    switch(action.type){
        case WISHLIST_ADD_ITEM:
            const item = action.payload
            const product = state.wishListItems.find(x => x._id === item._id)
            if(product){
                return { wishListItems:  state.wishListItems.map(x => x._id === product._id ? item : x) }
            }
            return { wishListItems: [...state.wishListItems, item] }
        case WISHLIST_REMOVE_ITEM:
            return { wishListItems: state.wishListItems.filter(x => x._id !== action.payload)}
        
        default:
            return state
    }   
}

export {
    wishListReducer
}