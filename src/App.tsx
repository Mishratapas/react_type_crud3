import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import Header from './components/Header'
import NotesList from './components/NotesList'
import { Note } from './models/Note.model'
import './App.css'
import CreateNote from './components/CreateNote'

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: Math.random().toString(),
      title: 'New Learning',
      text: 'learnig typescript with React',
      color: '#dfdfdf',
      date: new Date().toString(),
    },
  ])
  return (
    <>
      <Header />
      <Container className='mt-5'>
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNote notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
