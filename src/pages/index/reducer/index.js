import {
    LOAD_INFO
} from '../../../constants/actions/actionType.js'

const initIndex = {
    user: { },
    selectedIndex: 0
}

export default (state = initIndex, action = {}) => {
    switch (action.type) {
        case LOAD_INFO:
            return { ...state, ...action.payload }
        default:
            return state
    }
}
