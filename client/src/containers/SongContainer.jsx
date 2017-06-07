import React from 'react';
import SongSelector from '../components/SongSelector';
import SongDetail from '../components/SongDetail';

class SongContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      songs: [] ,
      selectedSong: null
    };
    this.setSelectedSong = this.setSelectedSong.bind(this);
  }

  render() {
    return (
      <div>
        <h2>Song Container</h2>
        <SongSelector songs={this.state.songs} onSelectSong={this.setSelectedSong}/>
        <SongDetail chartPosition={(this.state.songs.indexOf(this.state.selectedSong)) + 1} song={this.state.selectedSong}/>
      </div>
    );
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener('load', () => {
      if (request.status !== 200) return;

      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({
        songs: data.feed.entry,
        selectedSong: data.feed.entry[0]
      });
    });
    request.send();
  }

  setSelectedSong(song) {
    this.setState({selectedSong: song});
  }

}

export default SongContainer;