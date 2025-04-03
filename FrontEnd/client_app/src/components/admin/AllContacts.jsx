import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ContactDetails from "./ContactDetails";

function AllContacts() {
  const [contactData, setContactData] = useState([]);
  const URL = "http://localhost:3000/admin/allContacts";

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const serverResponse = await axios.get(URL);
      console.log(serverResponse);
      setContactData(serverResponse.data.contactQuery);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <h1>all AllContacts </h1>

      <ContactDetails contactArray={contactData} />
    </>
  );
}
export default AllContacts;
