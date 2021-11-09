import React, { useState } from "react";
import "../App.css";

const Forms2 = (props) => {
  const { inputs, setImputs } = props;
  const onChange = (e) => {
    setImputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleFirstname = (e) => {
    setImputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: e.target.value,
    });
    if (e.target.value.length < 1 && e.target.name === 'firstName') {
      setErrors({...errors, [e.target.name]:"firstName is required!"});
    } else if (e.target.value.length < 2 && e.target.name === 'firstName') {
      setErrors({...errors, [e.target.name]:"firstName must be 2 characters or longer!"});
    } else {
      setErrors('');
    }
  };
  const handleLastname = (e) => {
    setImputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: e.target.value,
    });
    if (e.target.value.length < 1 && e.target.name === 'lastName') {
      setErrors({...errors, [e.target.name]:"lastName is required!"});
    } else if (e.target.value.length < 2 && e.target.name === 'lastName') {
      setErrors({...errors, [e.target.name]:"lastName must be 2 characters or longer!"});
    } else {
      setErrors('');
    }
  };
  const handleEmail = (e) => {
    setImputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: e.target.value,
    });
    if (e.target.value.length < 1 && e.target.name === 'email') {
      setErrors({...errors, [e.target.name]:"email is required!"});
    } else if (e.target.value.length < 2 && e.target.name === 'email') {
      setErrors({...errors, [e.target.name]:"email must be 2 characters or longer!"});
    } else {
      setErrors('');
    }
  };
    const handlePassword = (e) => {
      setImputs({
        ...inputs,
        [e.target.name]: e.target.value,
      });
      setErrors({
        ...errors,
        [e.target.name]: e.target.value,
      });
      if (e.target.value.length < 8 && e.target.name === 'password') {
        setErrors({...errors, [e.target.name]:"password is required!"});
      } else if (e.target.value.length < 2 && e.target.name === 'password') {
        setErrors({...errors, [e.target.name]:"password must be 8 characters or longer!"});
      } else {
        setErrors('');
      }
  };
  const handleConfirmPassword = (e) => {
    setImputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: e.target.value,
    });
    if (e.target.value.length < 8 && e.target.name === 'confirmPassword') {
      setErrors({...errors, [e.target.name]:"password is required!"});
    } else if (e.target.name === 'confirmPassword' && e.target.value !== inputs.password) {
      setErrors({...errors, [e.target.name]:"password must be 8 characters and must match!"});
    } else {
      setErrors('');
    }
};
  return (
    <>
      <form>
        <div className="label">
          <label>First Name </label>
          <input type="text" name='firstName' value={inputs.firstName} onChange={handleFirstname} />
          {errors.firstName ? <p style={{ color: "red" }}>{errors.firstName}</p> : ""}
        </div>
        <div className="label">
          <label>Last Name </label>
          <input type="text" name='lastName' value={inputs.lastName} onChange={handleLastname} />
          {errors.lastName ? <p style={{ color: "red" }}>{errors.lastName}</p> : ""}
        </div>
        <div className="label">
          <label>Email </label>
          <input type="email" name='email' value={inputs.email} onChange={handleEmail} />
          {errors.email ? <p style={{ color: "red" }}>{errors.email}</p> : ""}
        </div>
        <div className="label">
          <label>Password </label>
          <input
            type="password"
            name='password'
            value={inputs.password}
            onChange={handlePassword}
          />
          {errors.password ? <p style={{ color: "red" }}>{errors.password}</p> : ""}
        </div>
        <div className="label">
          <label>Confirm Password </label>
          <input
            type="password"
            name='confirmPassword'
            value={inputs.confirmPassword}
            onChange={handleConfirmPassword}
          />
          {errors.confirmPassword ? <p style={{ color: "red" }}>{errors.confirmPassword}</p> : ""}
        </div>
      </form>
    
    </>
  );
}

export default Forms2;