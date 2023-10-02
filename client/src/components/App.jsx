import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import note from '../note'

function App() {
  return (
    <div>
      <Header/>
      <Footer/>
      {note.map(notes => 
      <Note key={notes.id} title={notes.title} content ={notes.content}/>
      )
      
      }
    </div>
  )
}

export default App
