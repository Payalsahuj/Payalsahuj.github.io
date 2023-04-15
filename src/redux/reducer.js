import {THEME} from './actiontype'
export const reducer=(state,action)=>{
    switch(action.type){
        case THEME:{
            return {...state,theme:!state.theme}
        }
        default:{
            return state
        } 
    }
}