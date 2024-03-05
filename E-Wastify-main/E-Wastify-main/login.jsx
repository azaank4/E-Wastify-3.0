import React from 'react';

const Login = () => {
  const handleLogin = () => {
    // Handle login logic here
  };

  const handleRegister = () => {
    // Handle register logic here
  };

  return (
    <div className="content_container">
      <div className="form_container">
        <div className="form_header_container">
          <h2 className="form_header">Login + Firebase Database</h2>
        </div>

        <div className="form_content_container">
          <div className="form_content_inner_container">
            <input type="text" id="full_name" placeholder="Full name" />
            <input type="email" id="email" placeholder="Email" />
            <input type="password" id="password" placeholder="New Password" />

            <input type="text" id="favourite_song" placeholder="The Best Song Ever" />
            <input type="text" id="milk_before_cereal" placeholder="Milk Before Cereal? ( Yes | No )" />

            <div className="button_container">
              <button onClick={handleLogin}>Login</button>
              <button onClick={handleRegister}>Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;