import contact from "../models/contact.model.js";
export const addContact = async (request, response) => {
  // data receiving from front en react contact.jsx
  const contactObject = request.body;
  console.log(contactObject);
  // {userName:"scott",userEmail:"scott", userQuery:"how are you"}

  //  object destructing
  const { userName, userEmail, userQuery } = contactObject;
  try {
    console.log(userName, contactObject);
    const contactDoc = new contact({ userName, userEmail, userQuery });
    await contactDoc.save(); // it will store data into contact model

    //    response.send("Contact Added successful")
    response.status(201).json({ message: "Thanks for contacting us" });
  } catch (error) {
    console.log(error.message);
  }
};
