export const initialState ={
    isLoggedin: JSON.parse(localStorage.getItem("Login")) || false
}


export const stateReducer=(state, action)=>{
    switch(action.type){

        case "LOGIN":
            return{
                isLoggedin: action.payload,
            }

        case "LOGOUT":
            return{
                isLoggedin:action.payload,
            }
        default:{
            return state;
        }
    }
}