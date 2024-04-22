import Logo from "../../Utils/Logo/Logo.jsx";
import React, { useState, useEffect } from "react";

const FirstPage = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isVisible ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
            backgroundColor: "#fff1ca",
          }}
        >
          <Logo height={"200px"} width={"200px"} />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
            backgroundImage: `url("https://i.pinimg.com/originals/2b/33/21/2b33214fa0b8e8197f11ce2c43136dba.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{ borderRadius: "50%", backgroundColor: "#fff1ca" }}
          >
            <Logo height={"91px"} width={"91px"} />
          </div>
        </div>
      )}
    </>
  );
};

export default FirstPage;
