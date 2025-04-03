import React from "react";

function ContactDetails({ contactArray }) {
    return (
        <>
            <h1>Contact listing</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Question</th>
                    </tr>
                </thead>
                <tbody>
                    {contactArray && contactArray.length > 0 ? (
                        contactArray.map((item) => (
                            <tr key={item.id}>
                                <td>{item.userName}</td>
                                <td>{item.userEmail}</td>
                                <td>{item.userQuery}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No contacts available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}

export default ContactDetails;
