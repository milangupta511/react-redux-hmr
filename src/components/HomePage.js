import React from 'react';
import Carousel from './Carousel';
import SliderButtons from './SliderButtons';
import {connect} from 'react-redux';

import {setImages} from '../actions';
import img1 from '../assets/1-mot.jpg';
import img2 from '../assets/2-mot.png';
import img3 from '../assets/3-mot.png';
import img4 from '../assets/4-mot.jpg';
import img5 from '../assets/5-mot.jpg';
import img6 from '../assets/6-mot.jpg';
import img7 from '../assets/7-mot.jpg';

class HomePage extends React.Component {

  render(){
  	const setting={
  		width:500,
  		height:300,
  		autoplay: true
  	}
    let imageArr=[img1, img2,img3,img4,img5,img6,img7];
    this.props.setImages(imageArr);
    return(
		<div>
	      <div className="carousel-window clearfix">
	        <Carousel {...setting}/>
		  	<SliderButtons {...setting} imageCount = {imageArr.length}/>

	      </div>
	  	</div>
    );
  }
}
export default connect(null, {setImages})(HomePage);
