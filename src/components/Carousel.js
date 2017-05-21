import React,{Component} from 'react';
import {connect} from 'react-redux';

class Carousel extends Component {

  renderImages(imageArr) {
    const style={
      width: this.props.width+"px",
      height: this.props.height+"px"
    }
    return imageArr.map((image,index) => {
      return (<div style={style} className="carousel-image" key={index}><img src={image} /></div>)
    })
  }
  render(){
    const {imageArr, width, height, currentIndex} = this.props;
    const imageCount = imageArr.length;
    const style={
      width:imageCount*width+"px",
      left: -currentIndex*width+"px"
    }
    return(
      <div className="pos-rel-transition" style={style}>
      {this.renderImages(imageArr)}
      </div>
    );
  }

}
function mapStateToProps(state){
  return {imageArr:state.imageArr, currentIndex: state.currentIndex}
}
export default connect(mapStateToProps,null)(Carousel);
