import { useRef, useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { Note } from '../models/Note.model'

interface CNProps {
  notes: Note[]
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNote: React.FC<CNProps> = ({ notes, setNotes }) => {
  const [error, setError] = useState<string>('')
  const titleRef = useRef<HTMLInputElement | null>(null)
  const textRef = useRef<HTMLTextAreaElement | null>(null)
  const colorRef = useRef<HTMLInputElement | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (titleRef.current?.value === '' || textRef.current?.value === '') {
      return setError('All fields are mandatory')
    }
    setError('')
    setNotes([
      ...notes,
      {
        id: Math.random().toString(),
        title: (titleRef.current as HTMLInputElement).value,
        text: (textRef.current as HTMLTextAreaElement).value,
        color: (colorRef.current as HTMLInputElement).value,
        date: new Date().toString(),
      },
    ])
  }
  return (
    <>
      <h1>Create Note</h1>
      {error && <Alert variant='danger'>{error} </Alert>}
      <Form className='m-4' onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className='m-3' controlId='formBasicTitle'>
          <Form.Label>Title</Form.Label>
          <Form.Control type='text' placeholder='Enter Title' ref={titleRef} />
        </Form.Group>
        <Form.Group className='m-3' controlId='formBasicText'>
          <Form.Label>Text</Form.Label>
          <Form.Control
            placeholder='Enter Text'
            as='textarea'
            rows={3}
            ref={textRef}
          />
        </Form.Group>
        <Form.Group className='m-3'>
          <Form.Label htmlFor='colorInput'>Notes Color</Form.Label>
          <Form.Control
            type='color'
            id='colorInput'
            defaultValue='#dfdfdf'
            title='Choos your color'
            placeholder='Enter Color'
            ref={colorRef}
          />
        </Form.Group>
        <Button type='submit' variant='primary'>
          Submit
        </Button>
      </Form>
    </>
  )
}

export default CreateNote
