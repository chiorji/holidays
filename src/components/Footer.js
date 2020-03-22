import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <Container>
      <Row>
        <Col className="p-3">
          <small>
            With Love by &nbsp;
            <a
              href="https://chigboguorji.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chigbogu Orji
            </a>
          </small>
        </Col>
      </Row>
    </Container>
  );
}
