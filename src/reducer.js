import {SEARCH_LAPTOP} from './constant'


const intialState = {
    searchField : ''
}

export const searchLaptops = (state = intialState , action = {} ) => {
    switch( action.type){
        case SEARCH_LAPTOP : 
        return Object.assign({} , state , {searchField : action.payload})
        default :
        return state 
    }
}
