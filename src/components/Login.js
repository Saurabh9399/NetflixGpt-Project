import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>
      <form>
        <input type="text" placeholder="Email" className="p-2 m-2" />
        <input type="password" placeholder="Password" className="p-2 m-2" />
      </form>
    </div>
  );
};

export default Login;