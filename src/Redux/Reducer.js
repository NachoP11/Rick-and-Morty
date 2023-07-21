import { ADD_CHARACTER, DELETE_CHARACTER } from "./Types"
 
const initialState = {
    favs: [],
 };

 const rootReducer = (state = initialState , action) => {
    switch (action.type) {
        case ADD_CHARACTER:            
            return  {
                ...state,
                favs: [...state.favs, action.payload]
            }
        case DELETE_CHARACTER:
            return {
                ...state,
                favs: state.favs.filter(character => character.id != action.payload)
            }
        default: return state
    }
 };

 export default rootReducer;
