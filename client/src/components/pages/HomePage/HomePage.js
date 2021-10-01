import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <Container style={{ minHeight: "100vh" }}>
      <h1>Bienvenid@  App</h1>
      <h3> Application</h3>

      <Link to="/workouts">
        <Button>Ver</Button>
      </Link>
    </Container>
  )
}