import ButtonLongWidth from "../../Components/Buttons/ButtonLongWidth/ButtonLongWidth.jsx";
import Logo from "../../Utils/Logo/Logo.jsx";
import React, { useState, useEffect } from "react";

const FirstPage = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000); // 1000 milliseconds = 1 seconds

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
            justifyContent: "flex-end",
            alignItems: "center",
            flexDirection: "column",
            height: "100vh",
            width: "100vw",
            backgroundImage: `url("https://i.pinimg.com/originals/2b/33/21/2b33214fa0b8e8197f11ce2c43136dba.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-[#0c010179] flex flex-col h-[100vh] w-[100vw] justify-end">
            <div className="flex flex-col items-center gap-5 ">
              <div style={{ borderRadius: "50%", backgroundColor: "#ffff" }}>
                <Logo height={"91px"} width={"91px"} />
              </div>
              <div className="text-[#ffff] font-bold text-5xl flex flex-col items-center">
                <span className="border-solid border-3 border-black">
                  Welcome
                </span>
                <span className="border-solid border-3 border-black">
                  to our store
                </span>
              </div>
              <div className="text-[21px] leading-[94%] text-center text-[#ffff] font-bold">
                Ger your groceries in as fast as one hour
              </div>
              <div>
                <ButtonLongWidth
                  bgColor={"bg-[#53b175]"}
                  width={"w-[300px]"}
                  text={"Get Started"}
                  textColor={"text-white"}
                />
              </div>
              <div className="h-6"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FirstPage;
