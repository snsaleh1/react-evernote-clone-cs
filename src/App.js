import React from 'react';
import './App.css';

const firebase = require('firebase');

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null
    };
  }

  render() {
    return(
      <div>
        <h1>Hello MFs</h1>
      </div>
    )
  }

  componentDidMount = () => {
    firebase
      .firestore()
      .collection('notes')
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map(_doc => {
          const data = _doc.data();
          data['id'] = _doc.id;
          return data;
          //now we have an array of all of the notes
        });
        console.log(notes);
        this.setState({ notes: notes });
      });
  }
}

export default App;
