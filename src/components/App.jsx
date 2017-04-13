// var App = () => (
  // <div>
  //   <Nav />
  //   <div className="col-md-7">
  //     <VideoPlayer video = {exampleVideoData[0]}/>
  //   </div>
  //   <div className="col-md-5">
  //     <VideoList videos = {exampleVideoData} />
  //   </div>
  // </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: exampleVideoData[0]
    }
  }

  _clickVideo(videoObject){
    // this.setState({
    //   clickedVideo: 
    // })
    var clickVideo = function(videoObject){
      this.setState({
        video: videoObject
      })
    }
    return this.clickVideo.bind(this, videoObject);
    //var clickVideo = fn({}){this.setState({video: {clicked video object}})}
    // return this.clickVideo.bind(this, {})
  }

  render () {
  	return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video = {this.state.video} />
        </div>
        <div className="col-md-5">
          <VideoList videos = {exampleVideoData} state= {this.state} />
        </div>
      </div>

  	)
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;




