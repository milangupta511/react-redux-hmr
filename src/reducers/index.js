import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import setImagesReducer from './setImagesReducer';
import setCurrentIndexReducer from './setCurrentIndexReducer';
import setSlideChangeStatus from './setSlideChangeStatus';
const rootReducer = combineReducers({
  routing: routerReducer,
  imageArr: setImagesReducer,
  currentIndex: setCurrentIndexReducer,
  isSlideChanging: setSlideChangeStatus
})

export default rootReducer;
