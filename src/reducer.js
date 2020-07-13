const defaultState = {
    username: '',
    orders: []
}
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'USERNAME':
            return {
                ...state,
                username: action.payload
            }
        case 'ORDERS':
            return {
                ...state,
                orders: action.payload
            }

        default:
            return state
    }

}