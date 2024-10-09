
import { RESET_LAYOUT } from './actions';

const initialState = {
    layout: {
        // your initial layout state
    },
};

const layoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET_LAYOUT:
            return {
                ...state,
                layout: {
                    // reset to your default layout state
                },
            };
        default:
            return state;
    }
};

export default layoutReducer;
