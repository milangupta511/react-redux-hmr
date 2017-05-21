import React,{Component} from 'react';
import {connect} from 'react-redux';
import {changeCurrentIndex, changeSlideStatus} from '../actions';

class SliderButtons extends Component{
  handleChangeIndex = (magnitude) => {
  	const remainder = (this.currentIndex+magnitude)%this.props.imageCount;
  	const index = remainder<0?this.props.imageCount+remainder: remainder;
  	if(!this.props.isSlideChanging){
      this.slideImageAt(index)
  	}
  }
  slideImageAt = (index) => {
      this.props.changeCurrentIndex(index);
      this.props.changeSlideStatus(true);
      setTimeout(()=>{this.props.changeSlideStatus(false)},this.transitionDelay*0.5);
  }
  renderStatusBlocks =(count,currentIndex) => {
  	let statusBlocks = [];
  	const {width} = this.statusBlocksStyle;
  	for(let i=0;i<count;i++){
  		statusBlocks.push(<div key={i} onClick={()=> this.slideImageAt(i)} style={{width:width+"px", height:width+"px", margin: width+"px"}} className={currentIndex===i?'status-blocks active':'status-blocks'} ></div>)
  	}
  	return statusBlocks
  }
  render(){
  	this.currentIndex = this.props.currentIndex;
  	this.autoplay = this.props.autoplay || false;
    this.transitionDelay = this.props.transitionDelay || 2000;
    this.direction = this.props.direction || "right";
    this.startIndex = this.props.startIndex || 0;
  	const buttonContainerStyle={
  		width:this.props.width+"px",
  		height: this.props.height+"px"
  	}
  	this.statusBlocksStyle = {
  		width:10
  	}
  	const statusContainerStyle={
  		transform: "translate(-"+3*this.statusBlocksStyle.width*this.props.imageCount/2 +"px)"
  	}
    return(
      <div className="pos-abs" style={buttonContainerStyle}>
      <div className="left-slider-container">
        <button className="pos-abs left-slider" onClick={()=> this.handleChangeIndex(-1)}>«</button>
      </div>
      <div className="right-slider-container">
        <button className="pos-abs right-slider" onClick={()=> this.handleChangeIndex(1)}>»</button>
      </div>
        <div style={statusContainerStyle} className="pos-abs status-blocks-container">{this.renderStatusBlocks(this.props.imageCount, this.currentIndex)}</div>
      </div>
    );
  }
  componentDidMount(){
  	if(this.autoplay){
      let magnitude = this.direction === "left"? -1: 1;
  		setInterval(()=> {this.handleChangeIndex(magnitude)}, this.transitionDelay);
  	}
    this.props.changeCurrentIndex(this.startIndex);
  }
}
const mapStateToProps = ({currentIndex,isSlideChanging}) =>{
	return ({currentIndex, isSlideChanging})
}
export default connect(mapStateToProps,{changeCurrentIndex, changeSlideStatus})(SliderButtons);
