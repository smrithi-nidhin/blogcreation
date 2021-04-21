const initialState = {
    data : [],
}

const descri = (state = initialState, action) => {
switch(action.type){
    case "ADD":
        return {
            ...state,
            data: [
                ...state.data,
                {
                    message: action.message,
                    id: action.id,
                },
            ],
        };
  
        default:
            return state;
}
};

export default descri;