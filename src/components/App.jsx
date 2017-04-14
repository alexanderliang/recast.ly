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
      video: exampleVideoData[0],
      response: false
    };
  }

  _clickVideo(videoObject){
      this.setState({
        video: videoObject
      })
  }
  

  componentDidMount(){
    var _retrieveVideos = function(videos){
      this.setState({response: videos}); 
    };
    searchYouTube(null, _retrieveVideos.bind(this));
  }

  render () {

    
    console.log('render', this.data);
    // console.log('hi', window.youTubeData);
    // var scope = this;
    // setTimeout(function(){
    //   console.log(scope.data);
    // }, 500)
    if (this.state.response){
      return (
        <div>
          <Nav />
          <div className="col-md-7">
            <VideoPlayer video = {this.state.response[0]} />
          </div>
          <div className="col-md-5">
            <VideoList videos = {this.state.response} setVideo= {this._clickVideo.bind(this)} />
          </div>
        </div>

    	)
    } else {
      return(<div>Waiting</div>)
    }
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;




