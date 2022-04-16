import { Card, Button } from 'react-bootstrap'
import { Note } from '../models/Note.model'

interface NotesProps {
  note: Note
  handleDelete: (id: string) => void
}

const Notes: React.FC<NotesProps> = ({ note, handleDelete }) => {
  return (
    <div className='mb-3'>
      <Card style={{ width: '18rem', backgroundColor: note.color }}>
        <Card.Body>
          <Card.Title>{note.title} </Card.Title>
          <Card.Text>{note.text} </Card.Text>
          <Card.Subtitle className='text-muted'>{note.date} </Card.Subtitle>
          <Button
            className='m-3'
            variant='danger'
            onClick={() => handleDelete(note.id)}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Notes
