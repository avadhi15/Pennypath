import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import { signupWithEmail, signupWithGoogle } from '../../firebase'; // Ensure these functions are defined and imported correctly

const Signinout = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <form>
        <Input
          type="email"
          label={"Email"}
          state={email}
          setState={setEmail}
          placeholder={"Example@123"}
        />
        <Input
          type="password"
          label={"Password"}
          state={password}
          setState={setPassword}
          placeholder={"Example@123"}
        />
        <Input
          type="password"
          label={"Confirm Password"}
          state={confirmPassword}
          setState={setconfirmPassword}
          placeholder={"Example@123"}
        />
        <Button
          disabled={loading}
          text={loading ? "Loading..." : "Signup using Email and Password"}
          onClick={signupWithEmail}
        />
        <p style={{ textAlign: "center", margin: 0 }}>or</p>
        <Button
          text={loading ? "Loading..." : "Signup using Google"}
          blue={true}
          onClick={signupWithGoogle} // Add onClick handler for Google signup
        />
      </form>
    </div>
  );
};

export default Signinout;