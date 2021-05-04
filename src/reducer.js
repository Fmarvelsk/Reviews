
export const initialState = {
    reviews : [],
    business : [],
    loading : true,
    byId : []
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
             case 'getById' : 
             return {
                 ...state,
                 byId : action.business
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