import React,{Component} from 'react';
import {connect} from 'react-redux';
import {changeCurrentIndex, changeSlideStatus} from '../actions';

class SliderButtons extends Component{
  handleChangeIndex = (magnitude)=>{
  	const remainder = (this.currentIndex+magnitude)%this.props.imageCount;
  	const index = remainder<0?this.props.imageCount+remainder: remainder;
  	if(!this.props.isSlideChanging){
  		this.props.changeCurrentIndex(index);
  		this.props.changeSlideStatus(true);
  		setTimeout(()=>{this.props.changeSlideStatus(false)},1000);
  	}
  	
  }
  renderStatusBlocks =(count,currentIndex) => {
  	let statusBlocks = [];
  	const {width} = this.statusBlocksStyle;
  	for(let i=0;i<count;i++){
  		statusBlocks.push(<div key={i} style={{width:width+"px", height:width+"px", margin: width+"px"}} className={currentIndex===i?'status-blocks active':'status-blocks'} ></div>)
  	}
  	return statusBlocks
  }
  render(){
  	this.currentIndex = this.props.currentIndex;
  	this.autoplay = this.props.autoplay || false;
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
        <button className="pos-abs left-slider" onClick={()=> this.handleChangeIndex(-1)}>«</button>
        <button className="pos-abs right-slider" onClick={()=> this.handleChangeIndex(1)}>»</button>
      	<div style={statusContainerStyle} className="pos-abs status-blocks-container">{this.renderStatusBlocks(this.props.imageCount, this.currentIndex)}</div>
      </div>
    );
  }
  componentDidMount(){
  	if(this.autoplay){
  		setInterval(()=> {this.handleChangeIndex(1)}, 2000);
  	}
  }
}
const mapStateToProps = ({currentIndex,isSlideChanging}) =>{
	return ({currentIndex, isSlideChanging})
}
export default connect(mapStateToProps,{changeCurrentIndex, changeSlideStatus})(SliderButtons);
