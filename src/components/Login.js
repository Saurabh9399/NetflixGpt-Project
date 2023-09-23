import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  const [errMessage, setErrMessage] = useState();
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSigInSignUpToggle = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = () => {
    console.log("name", name);
    console.log("email", email);
    console.log("password", password);

    const message = checkValidData(email.current.value, password.current.value);
    setErrMessage(message);

    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/64205497?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrMessage(error.message);
            });

          // navigate("/browse");
          console.log(user);
        })
        .catch((error) => {
          const errCode = error.code;
          const errMessage = error.message;

          setErrMessage(errCode + "-" + errMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // navigate("/browse");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute bg-black bg-opacity-75 py-20 px-7 my-36 mx-auto right-0 left-0 rounded-lg"
      >
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Enter name"
            className="p-1 my-2 w-full focus:outline-none rounded"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-1 my-2 w-full focus:outline-none rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-1 my-2 w-full focus:outline-none rounded"
        />
        <p className="text-red-500">{errMessage}</p>
        <button
          className="p-1 w-full my-2 bg-red-700 color-white bg-brown rounded-lg"
          onClick={() => handleSubmit()}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-indigo-50 mt-4">
          {isSignIn ? " New to Netflix ?" : "Already have account !"}{" "}
          <span
            className="text-blue-500 hover:underline"
            onClick={() => handleSigInSignUpToggle()}
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </span>{" "}
          now
        </p>
      </form>
    </div>
  );
};

export default Login;
