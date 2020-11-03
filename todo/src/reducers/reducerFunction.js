export const initialState = {
    list: [
        {
            item: '',
            completed: false,
            id: ''
        }
    ],
    status: 'undone'
};

export const reducer = (state, action) => {
    console.log(action.type)
    console.log(action.payload)
    console.log(state)
    const newDate = new Date()
    console.log(newDate)
    switch(action.type){
        case 'ADD_TODO':
            return {
                ...state,
                list:[...state.list, {
                                        item:action.payload,
                                        completed: false,
                                        id: newDate.toString()
                                    }]
            }
        case 'TOGGLE_OFF':
            return{
                ...state,
                status: 'done'
            }    
        default:
            return state;
    }
}

