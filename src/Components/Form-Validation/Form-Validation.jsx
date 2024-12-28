import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
const  FormValidation = ()=>{

  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setConfirmPassword] = useState("");
  const [firstNameErr, setFirstNameErr] = useState(false);
  const [secodNameErr, setSeconNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [comfirmpasswordErr, setComfirmPasswordErr] = useState(false);


  const registerForm = (e) => {
    e.preventDefault();
  
    let hasError = false;
  
    if (firstName === "") {
      setFirstNameErr(true);
      hasError = true;
    }
    if (secondName === "") {
      setSeconNameErr(true);
      hasError = true;
    }
    if (email === "") {
      setEmailErr(true);
      hasError = true;
    }
    if (password === "") {
      setPasswordErr(true);
      hasError = true;
    }
    if (comfirmPassword === "") {
      setComfirmPasswordErr(true);
      hasError = true;
    }
  
    if (!hasError) {
      // Show success alert using SweetAlert2
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful',
        text: 'You have registered successfully!',
        showConfirmButton: false,
        timer: 3000 // Auto close after 1.5 seconds
      });

      // Clear the form fields
      setFirstName("");
      setSecondName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };
  

  useEffect(() => {
    if (firstName !== "") {
      setFirstNameErr(false);
    }
    if (secondName !== "") {
      setSeconNameErr(false);
    }
    if (email !== "") {
      setEmailErr(false);
    }
    if (password !== "") {
      setPasswordErr(false);
    }
    if (comfirmPassword !== "") {
      setComfirmPasswordErr(false);
    }
  }, [firstName, secondName, email, password, comfirmPassword]);
 
  return(
    <>
  <div className="d-flex justify-content-center my-5">
  <div className="shadow p-5 w-25 rounded-2 mb-5">
    <h1 className="mb-4">Register</h1>
    
    <form onSubmit={registerForm}>
      <div className="mb-3">
        <label className="form-label">First Name</label>
        <input 
          value={firstName} 
          type="text" 
          className="form-control" 
          onChange={(e) => setFirstName(e.target.value)} 
          placeholder="First Name" 
        />
        {firstNameErr && <p className="text-danger">First Name is required</p>}
      </div>

      <div className="mb-3">
        <label className="form-label">Second Name</label>
        <input 
          value={secondName} 
          type="text" 
          className="form-control" 
          onChange={(e) => setSecondName(e.target.value)} 
          placeholder="Second Name" 
        />
        {secodNameErr && <p className="text-danger">Second name is required</p>}
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input 
          value={email} 
          type="email" 
          className="form-control" 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Enter Email" 
        />
        {emailErr && <p className="text-danger">Email is required</p>}
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input 
          value={password} 
          type="password" 
          className="form-control" 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Enter Password" 
        />
        {passwordErr && <p className="text-danger">Password is required</p>}
      </div>

      <div className="mb-4">
        <label className="form-label">Confirm Password</label>
        <input 
          value={comfirmPassword} 
          type="password" 
          className="form-control" 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          placeholder="Confirm Password" 
        />
        {comfirmpasswordErr && <p className="text-danger">Confirm Password is required</p>}
      </div>

      <button type="submit" className="btn btn-success w-100">Register</button>
    </form>
  </div>
</div>


    </>
  )
}

export default FormValidation;
