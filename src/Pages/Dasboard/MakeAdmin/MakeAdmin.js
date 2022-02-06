import React from 'react';
import { Button, TextField, Alert } from "@mui/material";
import { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false)
  const [admins, setAdmins] = useState([]);

    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    }
    const handleSubmitAdmin = (e) => {
        const usersEmail = { email };
        fetch("https://lit-forest-28611.herokuapp.com/users/admin", {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(usersEmail),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              setSuccess(true);
            }
          });
        e.preventDefault()
    }
    return (
      <div>
        <form onSubmit={handleSubmitAdmin}>
          <TextField
          
            sx={{ width: "50%" }}
            label="Email"
            type="email"
            onBlur={handleOnBlur}
            variant="standard"
          />
          <Button type="submit" variant="contained">
            Make Admin
          </Button>
        </form>
        {success && <Alert severity="success">Made Admin successfully!</Alert>}
      </div>
    );
};

export default MakeAdmin;