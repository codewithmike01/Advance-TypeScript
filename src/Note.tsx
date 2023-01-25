import React from 'react';
import { Col, Form, FormGroup, Row, Stack } from 'react-bootstrap';
import CreatableReactSelect from 'react-select/creatable';

const Note = () => {
  return (
    <Form>
      <h1>New Note</h1>
      <Stack gap={4}>
        <Row>
          <Col>
            <FormGroup controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control required />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup controlId="tag">
              <Form.Label>Tag</Form.Label>
              <CreatableReactSelect />
            </FormGroup>
          </Col>
        </Row>
      </Stack>
    </Form>
  );
};

export default Note;
