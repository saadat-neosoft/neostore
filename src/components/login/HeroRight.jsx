import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const HeroRight = () => {
  const [loginToggle, setLoginToggle] = useState(true);

  function loginToggler() {
    setLoginToggle(!loginToggle);
  }

  return (
    <div className="hero__right">
      {loginToggle ? (
        <LoginForm loginToggler={loginToggler} />
      ) : (
        <SignupForm loginToggler={loginToggler} />
      )}
    </div>
  );
};

export default HeroRight;
