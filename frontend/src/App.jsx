import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const handleSuccess = async (response) => {
    try {
      console.log(response);
      
      const res = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          credential: response.credential,
        }),
      });

      const data = await res.json();
      console.log(data);
      

      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() => console.log("Login Failed")}
    />
  );
}

export default App;