import {CURRENT_INDEX} from '../actions';

export default (state=0,action)=>{
	switch(action.type){
		case CURRENT_INDEX:
			return action.payload
	}
	return state
}