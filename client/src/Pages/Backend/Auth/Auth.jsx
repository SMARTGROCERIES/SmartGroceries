import React, { useState } from "react";
import SignIn from "../../../Components/Backend/SignIn/SignIn";
import SignUp from "../../../Components/Backend/SignUp/SignUp";
import { Typography } from "@material-tailwind/react";
import LogoSmartGroceries from "../../../Utils/Logo/Logo";

export const Auth = () => {
  const [showSignIn, setShowSignIn] = useState(true);

  const handleSignInClick = () => {
    setShowSignIn(true);
  };

  const handleSignUpClick = () => {
    setShowSignIn(false);
  };

  return (
    <>
      <div className="md:flex justify-center items-center gap-16 pt-11">
        <div className=" flex flex-col items-center">
          <span className="hidden md:block">
            <LogoSmartGroceries />
          </span>
          <span className=" md:hidden">
            <LogoSmartGroceries width={"111px"} height={"111px"} />
          </span>
          <div className="text-[4vh] ">Admin Pannel</div>
        </div>
        <div className="flex justify-center flex-col items-center">
          {showSignIn ? <SignIn /> : <SignUp />}
          {showSignIn ? (
            <Typography color="gray" className="mt-4 text-center font-normal">
              Don't have an account?{" "}
              <a
                href="#"
                className="font-medium text-gray-900"
                onClick={handleSignUpClick}
              >
                Sign Up
              </a>
            </Typography>
          ) : (
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <a
                href="#"
                className="font-medium text-gray-900"
                onClick={handleSignInClick}
              >
                Sign In
              </a>
            </Typography>
          )}
        </div>
      </div>
    </>
  );
};
