import {legacy_createStore} from "redux"
import {reducer} from './reducer'
const initial={
    theme:false
}
export const store=legacy_createStore(reducer,initial)