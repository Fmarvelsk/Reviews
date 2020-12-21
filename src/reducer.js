import { Row } from "react-bootstrap"

export const initialState = {
    user : [],
    reviews : [],
    business : [],
    loading : true,
}

const reducer = (state, action) => {
 switch(action.type){
     case 'Add user' :
         return {
             ...state,
             user : action.user
         }
         case 'Update reviews':
             return{
                 ...state,
                 reviews : action.reviews,
                 loading : false

             }
             case 'Business':
                 return{
                     ...state,
                     business : action.business
                 }
         default :
         return state;

 }
}

export default reducer