export const Reducer = (state ={ loading: true, user_details: "" }, action)=>{
    switch (action.type) {
        case "Search_Request":
            return {
                ...state, loading: true,
            }
        case "Fetch_Data":
            return {
                loading: false,
                user_details: action.payload,
            }
    
        case "Fetch_Error":
            return {
                loading: false,
                user_details: action.payload,
            }
    
        default:
            return state;
    }
}