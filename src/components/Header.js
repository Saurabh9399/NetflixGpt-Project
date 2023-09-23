import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  console.log(user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out success...");
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-36"
        src={LOGO_URL}
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <img alt="user icon" src={user?.photoURL} className="w-12 h-12" />
          <button className="text-white font-bold" onClick={handleSignout}>
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
