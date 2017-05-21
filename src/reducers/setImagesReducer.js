import {SET_IMAGES} from '../actions'

export default (state=[],action)=>{
	switch(action.type){
		case SET_IMAGES:
			return action.payload
	}
	return state
}