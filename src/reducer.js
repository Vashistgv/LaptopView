import {SEARCH_LAPTOP , ON_CLICK_CARD} from './constant';

const intialStateSearch = {
    searchField : ''
}

export const searchLaptops = (state = intialStateSearch , action = {} ) => {
    switch( action.type){
        case SEARCH_LAPTOP : 
        return Object.assign({} , state , {searchField : action.payload})
        default :
        return state 
    }
}

const intialStateClick = {
    id : ''
}


export const onItemClick = (state = intialStateClick , action = {} ) => {
    
    switch( action.type){
        case ON_CLICK_CARD : 
        return Object.assign({} , state , {id : action.payload})
        default :
        return state 
    }
}



