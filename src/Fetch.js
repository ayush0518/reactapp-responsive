import React, { useEffect, useState } from "react";

function Fetch() {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    const response = await fetch("https://api.github.com/users");
    setUser(await response.json());
    //console.log(data);
  };

  useEffect(() => {
    getUser();
  });
  return (
    <>
      <h1> Welcome to GITHUB</h1>
      <div className="container">
        {user.map((dataCheck) => {
          return (
            <div>
              <span>{dataCheck.title}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Fetch;
