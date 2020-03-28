import {SEARCH_LAPTOP , ON_CLICK_CARD} from './constant';

export const searchLaptops = text => ({
    type : SEARCH_LAPTOP , 
    payload : text
})


export const onItemClick = text => ({
    type : ON_CLICK_CARD ,
    payload : text
})