import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";


export default function Header() {
  return (
    <Navbar expand="md" variant="dark" className="d-none d-md-block">
      <Container>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav" className="justify-content-end">
          <a
            href="https://twitter.com/chigbogu_orji"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            title="Twitter"
          >
            <Button variant="outline-light">Twitter</Button>
          </a>
          <a
            href="https://github.com/chigboguorji"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            title="Github"
          >
            <Button variant="outline-light">Github</Button>
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
