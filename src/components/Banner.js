import React, { Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
const Header = React.lazy(() => import("./Header"));

const Banner = () => {
  return (
    <Container
      fluid
      className="banner bg-primary"
    >
      <Suspense fallback={"Loading..."}>
        <Header />
      </Suspense>
      <Row>
        <Col className="app-name text-light  d-flex justify-content-center align-items-center flex-column text-center">
          <h1 className="display-4 font-weight-bold">Holidays</h1>
          <p className="font-weight-bold">Get Holidays and Dates in various Countries Of The World !</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
