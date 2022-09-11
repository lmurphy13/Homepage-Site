import * as actions from "../actions/actionTypes";

const initialState = {
    winHeight: 1000,
    winWidth: 1000,
    menuOpen: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.SET_WIN_HEIGHT:
            return {...state, winHeight: action.payload};
        case actions.SET_WIN_WIDTH:
            return {...state, winWidth: action.payload};
        case actions.SET_MENU_OPEN:
            return {...state, menuOpen: action.payload};
        case actions.SET_MENU_CLOSED:
            return {...state, menuOpen: action.payload};
        default:
            return state;
    }
}