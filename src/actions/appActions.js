import * as actions from "./actionTypes"

export function setWinHeight(height) {
    return {
        type: actions.SET_WIN_HEIGHT,
        payload: height
    }
}

export function setWinWidth(width) {
    return {
        type: actions.SET_WIN_WIDTH,
        payload: width
    }
}

export function setMenuOpen() {
    return {
        type: actions.SET_MENU_OPEN,
        payload: true
    }
}

export function setMenuClosed() {
    return {
        type: actions.SET_MENU_OPEN,
        payload: false
    }
}