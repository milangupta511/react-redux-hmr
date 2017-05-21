import {CHANGE_SLIDE_STATUS} from '../actions';
export default (state = false, action)=> {
	switch(action.type) {
		case CHANGE_SLIDE_STATUS:
			return action.payload
	}
	return state
}