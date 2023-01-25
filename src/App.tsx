import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Note from './Note';
import ShowNote from './ShowNote';
import EditNote from './EditNote';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<Note />} />

        <Route path="/:id">
          <Route index element={<ShowNote />} />
          <Route path="edit" element={<EditNote />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
