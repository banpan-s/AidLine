import contact from "../models/contact.model.js";
import Admin from "../models/admin.model.js";

//--------------contact listin code----------------
export const allContacts = async (request, response) => {
  try {
    //select * from contact it will return all the rows
    const contactDocs = await contact.find(); //return all object

    response.json({ contactQuery: contactDocs });
    console.log(contactDocs);
  } catch (err) {
    console.log(err.message);
  }
};

// Admin login function
export const adminLogin = async (req, res) => {
  try {
    const { adminemail, adminpass } = req.body;
    if (!adminemail || !adminpass) {
      return res.status(400).json({ message: "Email and password are required" });
    }
    const adminUser = await Admin.findOne({ email: adminemail });
    if (!adminUser) {
      return res.json({ status: "Fail", message: "Email does not exist" });
    }
    if (adminUser.password !== adminpass) {
      return res.json({ status: "Fail", message: "Invalid Password" });
    }
    res.json({ status: "Success", message: "Login successful", token: adminUser.email });
  } catch (error) {
    console.error("Error during admin login:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
