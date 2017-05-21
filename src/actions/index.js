export const SET_IMAGES='SET_IMAGES';
export const CURRENT_INDEX='CURRENT_INDEX';
export const CHANGE_SLIDE_STATUS='CHANGE_SLIDE_STATUS';

export const setImages = (imageArr) =>{
	return ({
		type: SET_IMAGES,
		payload: imageArr
	})
}
export const changeCurrentIndex = (index) => {
	return ({
		type: CURRENT_INDEX,
		payload:index
	})
}
export const changeSlideStatus = (bool) => {
	return({
		type: CHANGE_SLIDE_STATUS,
		payload: bool
	})
}