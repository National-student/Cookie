import { useState } from "react";
import "./App.css";
import Cookies from "js-cookie";
import { User } from "./components/user/User";

function App() {
  const cookieData = Cookies.get("token") || null;
  const [cookie, setCookie] = useState(JSON.parse(cookieData));

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/auth/login",
        {
          method: "Post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "john@mail.com",
            password: "changeme",
          }),
        }
      ); // API URL
      if (!response.ok) {
        throw new Error("Serverdan ma'lumot olishda xatolik yuz berdi");
      }
      const data = await response.json();
      return Cookies.set("token", JSON.stringify(data), { expires: 1 });
    } catch (error) {
      console.error("Xatolik:", error);
      throw error;
    }
  };

  console.log(cookie);

  if (cookie) {
    return <User setCookie={setCookie} />;
  } else {
    return (
      <div>
        <button onClick={fetchData}>Submit</button>
      </div>
    );
  }
}

export default App;
