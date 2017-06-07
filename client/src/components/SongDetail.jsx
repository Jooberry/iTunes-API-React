import React from 'react';

const SongDetail = (props) => {
    // console.log("index: ", this.props.song.indexOf())
    if (!props.song) return null;
    return (
      <div className="song-details">
        <h3>Artist: {props.song["im:artist"].label}</h3>
        <p>Title: {props.song["im:name"].label}</p>
        <p>Chart position: {props.chartPosition}</p>
        <img src={props.song["im:image"][2].label}/>
        <audio controls="controls">
          Your browser does not support the <code>audio</code> element.
          <source src={props.song.link[1].attributes.href} type="audio/wav"/>
        </audio>
      </div>
    );

}

export default SongDetail;