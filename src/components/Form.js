import React, { useEffect, useState, createRef } from "react";
import { Form, Button } from "react-bootstrap";
import fetcher, { datalist } from "../utils/fetcher";

export default function FormPane() {
  const apikey = process.env.REACT_APP_API_KEY;
  const [countryList, setCountryList] = useState([]);
  const [year, setYear] = useState("2019");
  const country = createRef();

  const getHolidayDetails = e => {
    e.preventDefault();
    console.log("Query %s, %s", country.current.value, year);
    fetcher({ apikey, country: country.current.value, year })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log("Key", apikey + "-0890e3");
    datalist({ apikey })
      .then(response => {
        console.log(response);
        setCountryList(response.countries);
      })
      .catch(err => {
        console.log(err);
      });
  }, [apikey]);

  return (
    <Form
      className="mb-5 mt-n3 p-2 p-lg-5 bg-white mt-lg-n5 rounded col-10 col-lg-6 mx-auto"
      onSubmit={getHolidayDetails}
    >
      <Form.Group controlId="country">
        <Form.Label className="font-weight-bold">Select a country</Form.Label>
        <Form.Control as="select" ref={country}>
          {countryList &&
            countryList.map(country => (
              <option key={country.code.toString()} value={country.code}>
                {country.name}
              </option>
            ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="year">
        <Form.Label className="font-weight-bold">Year</Form.Label>
        <Form.Control
          as="select"
          placeholder="Year (e.g 2020)"
          value={year}
          onChange={e => setYear(e.target.value)}
        >
          <option>{year}</option>
        </Form.Control>
      </Form.Group>
      <Button variant="danger" type="submit" className="btn-block" size="lg">
        Get Holidays Details
      </Button>
    </Form>
  );
}
