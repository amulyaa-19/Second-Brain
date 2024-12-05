import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { BACKEND_URL} from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signin(){

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function signin(){
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const navigate = useNavigate();
    
      const response = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
        username,
        password,
      });
      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      navigate("/dashboard");
      // redirect the user to dashboard

  }
  return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
    <div className="bg-white rounded-xl border min-w-48 p-8">
      <Input reference={usernameRef} placeholder="Username"/>
      <Input reference={passwordRef} placeholder="Password"/>
    <div className="flex justify-center pt-4">
        <Button loading={true} variant="primary" text="Signin" fullWidth={true} />
    </div>
  </div>
</div>
}