"use client";
import Header from "@/component/header";
// export default function Home() {
//   return <>hello</>;
// }
import { useEffect, useState } from "react";
// import { secureLocalStorage } from "react-secure-storage";

const App = () => {
  const [value, setValue] = useState();
  // useEffect(() => {
  //   secureLocalStorage.setItem("object", {
  //     message: "This is testing of local storage",
  //   });
  //   secureLocalStorage.setItem("number", 12);
  //   secureLocalStorage.setItem("string", "12");
  //   secureco.setItem("boolean", true);
  //   let value = secureLocalStorage.getItem("object");
  //   setValue(value.message);
  // }, []);

  return (
    <div>
      {/* <Header />     */}
      This is a sample code
      {/* {value} */}
    </div>
  );
};

export default App;
