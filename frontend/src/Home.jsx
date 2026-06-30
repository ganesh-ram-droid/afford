import React, { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));

    if (userData) {
      setUser(userData);
    }
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <h1>Welcome</h1>

      <img
        src={user.picture}
        alt="Profile"
        width="150"
        style={{ borderRadius: "50%" }}
      />

      <h2>{user.name}</h2>

      <p>{user.email}</p>
    </div>
  );
};

export default Home;