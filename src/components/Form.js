import react from "react";

const Form = (props) => {
  const { inputs, setImputs } = props;
  const onChange = (e) => {
    setImputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <form>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input onChange={onChange} type="text" id="firstName" name="firstName"/>
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input onChange={onChange} type="text" id="lastName" name="lastName"/>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input onChange={onChange} type="email" id="email" name="email"/>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input onChange={onChange} type="password" id="password"  name="password"/>
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          onChange={onChange} type="password" id="confirmPassword" name="confirmPassword"/>
      </div>


    </form>
  );
};

export default Form;
