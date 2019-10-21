// /* global window */
// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {setHeaderOpacity} from '../actions/app-actions';

// class Home extends Component {

//   componentDidMount() {
//     window.onscroll = this._onScroll.bind(this);
//     this._onScroll();
//   }

//   componentWillUnmount() {
//     window.onscroll = null;
//   }

//   _onScroll() {
//     const y = window.pageYOffset;
//     const opacity = Math.max(0, Math.min(1, (y - 168) / 20));
//     this.props.setHeaderOpacity(opacity);
//   }

//   render() {
//     return (
//       <div className="home-wrapper">

//         <section id="banner" style={{backgroundImage: 'url(images/hero.jpg)'}}>
//           <div className="container soft-left">
//             <h1>react-map-gl</h1>
//             <p>React components for Mapbox GL JS</p>
//             <a href="#/documentation/getting-started" className="btn">Get started</a>
//           </div>
//         </section>

//         <section id="features">
//           <div className="image" />
//           <div className="container soft-left texts">
//             <div>
//               <h2>
//                 react-map-gl makes using Mapbox GL JS in React applications easy.
//               </h2>
//               <hr className="short" />

//               <h3>
//                 <img src="images/icon-react.svg" />
//                 React Integration
//               </h3>
//               <p>
//               Integration on browser and Node.js, exposing the full power of mapbox-gl.
//               </p>

//               <h3>
//                 <img src="images/icon-layers.svg" />
//                 Component Library
//               </h3>
//               <p>
//               react-map-gl comes with additional React components that
//               synchronize with the map camera system. Use one of the supported
//               overlays to visualize data, or build your own.
//               </p>

//               <h3>
//                 <img src="images/icon-high-precision.svg" />
//                 Part of Uber Visualization's Framework Suite
//               </h3>
//               <p>
//               Use together with e.g. <a
//                 href="https://uber.github.io/deck.gl/"
//                 target="_blank"
//                 rel="noopener noreferrer">
//                 deck.gl</a> to render performant and compelling 2D and 3D
//                 WebGL visualizations on top of your Mapbox GL JS based maps.
//               </p>

//             </div>
//           </div>

//         </section>

//         <hr />

//         <section id="footer">
//           <div className="container soft-left">
//             <h4>Made by</h4>
//             <i className="icon icon-uber-logo" />
//           </div>
//         </section>

//       </div>
//     );
//   }
// }

// export default connect(null, {setHeaderOpacity})(Home);

/* global window */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setHeaderOpacity} from '../actions/app-actions'
import { VideoScroll } from 'react-video-scroll'

const setStyles = (wrapperEl, videoEl, playbackRate) => {
  // console.log(videoEl)
  wrapperEl.style.marginTop = `0px`
  wrapperEl.style.marginBottom = `0px`
  // wrapperEl.style.marginTop = `calc(180% - ${Math.floor(videoEl.duration) *
  //   playbackRate +
  //   'px'})`
  // wrapperEl.style.marginBottom = `calc(180% - ${Math.floor(videoEl.duration) *
  //   playbackRate +
  //   'px'})`
}  



function Player() {
  return (
    <VideoScroll
      onLoad={props => {

        // console.log('props: ', props)
        return setStyles(props.wrapperEl, props.videoEl, props.playbackRate)
        }
      }
      playbackRate={11}
      // style={{ position: 'sticky' }}
    >
      <video
        tabIndex="0"
        autobuffer="autobuffer"
        preload="preload"
        style={{ 
          width: '100%', 
          // objectFit: 'cover', 
          position: 'fixed',
          right: '0',
          top: '0',
          opacity: '1',
          transform: 'translate(0, -60%)'
        }}
        playsInline
      >
        <source type="video/mp4" src="./tankerv.mp4" />
      </video>
    </VideoScroll>
  )
} 

class Home extends Component {

  componentDidMount() {
    window.onscroll = this._onScroll.bind(this)
    this._onScroll()
  }

  componentWillUnmount() {
    window.onscroll = null
  }

  _onScroll() {
    const y = window.pageYOffset
    const opacity = Math.max(0, Math.min(1, (y - 168) / 20))
    this.props.setHeaderOpacity(opacity)
  }

  render() {
    return (
      <div className="home-wrapper">
          <Player style={{
            // position: 'fixed',
            // right: '0',
            // bottom: '0'
          }}>
          </Player>
  {
    
  }
      <section id="banner" style={{backgroundColor: 'transparent'}}>
          <div className="container soft-left" >
            <h1 style={{
              color: 'rgba(255, 132, 55, 1)',
            }}>Violent FEMS</h1>
            <p style={{color: '#ffffff'}}>Brutal Andro Splash Page</p>
            <a href="#/documentation/getting-started" className="btn" 
            style={{backgroundColor: 'rgba(208,130,27,1)', color: '#ffffff'}}>Swipe This!</a>
          </div>
          </section>
         {
        // <section id="banner" /*style={{backgroundImage: 'url(images/hero.jpg)'}}*/>
        // </section>
          }

        <section id="features" >
          <div className="image" />
          <div className="container soft-left texts">
            <div>
              <h2>
                FEMS Makes ERCs Easy! 
              </h2>
              <hr className="short" />

              <h3>
                <img src="images/icon-react.svg" />
                Full-on Matt Jolley Integration
              </h3>
 
            </div>
          </div>

        </section>

        <hr />

        <section id="footer">
          <div className="container soft-left">
            <h4>Made by  (eventually)</h4>
          </div>
        </section>
        
      </div>
    )
  }
}

export default connect(null, {setHeaderOpacity})(Home)
