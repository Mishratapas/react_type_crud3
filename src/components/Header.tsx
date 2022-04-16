import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <div>
      <Navbar fixed='top' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand>React Typescript Note</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
