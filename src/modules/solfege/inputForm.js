import React, { Component } from 'react';

export default class InputForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      artist: '',
      lyrics: '',
      error: ''
    }
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFieldChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    const { title, artist, lyrics } = this.state;

    if(!artist.trim() || !title.trim() || !lyrics.trim()) {
      this.setState({
        error: 'You have to fill in all fields!'
      })
      return;
    }

    this.props.onLyricsSubmit(title, artist, lyrics);

    this.setState({
      artist: '',
      title: '',
      lyrics: '',
      error: ''
    })
  }

  render() {
    return (
      <div style={{
          width: 300,
          marginTop: 40,
        }}>
      <form onSubmit={this.handleSubmit}>
        {this.state.error}
        <div>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleFieldChange}
            placeholder="Title of Song"
            style={{width: '100%'}}
          />
        </div>
        <div>
          <input
            type="text"
            name="artist"
            value={this.state.artist}
            onChange={this.handleFieldChange}
            placeholder="Artist Name"
            style={{width: '100%'}}
          />
        </div>
        <div>
          <textarea
            type="textArea"
            name="lyrics"
            value={this.state.lyrics}
            onChange={this.handleFieldChange}
            placeholder="Type Lyrics Here!"
            style={{
              width: '100%',
              height: 80,
              resize: 'none'
            }}
          />
        </div>
        <div style={{margin: 5}}>
          <input type="submit" value="Submit Lyrics" />
        </div>

      </form>
      </div>
    )
  }
}