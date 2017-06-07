import React from 'react';

class SongSelector extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const options = this.props.songs.map((song, index) => {
      return <option value={index} key={index}>{song["im:name"].label}</option>
    });

    return (
      <select id="songs" onChange={this.handleChange} value={this.state.selectedIndex}>
        {options}
      </select>
    );
  }

  handleChange(event) {
    const index = event.target.value;
    this.setState({selectedIndex: index});

    const song = this.props.songs[index];
    this.props.onSelectSong(song);
  }

}

export default SongSelector;