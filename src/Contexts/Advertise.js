export const initialState = { cart: [] };
export function reducer(state, action) {

    switch (action.type) {
        case 'cart':
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };

        default:
            throw new Error();
    }
}