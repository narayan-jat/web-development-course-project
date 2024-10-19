import { ID } from "appwrite";
import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../appwrite";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider(props) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  async function login(email, password) {
    try{
      const loggedIn = await account.createEmailPasswordSession(email, password);
      alert("login success")
      navigate("/ideas")
    }catch (error){
      alert(error)
    }
    setUser(loggedIn);
  }

  async function logout() {
    await account.deleteSession("current");
    navigate("/")
    setUser(null);
  }

  async function register(email, password) {
    try{
      await account.create(ID.unique(), email, password);
      await login(email, password);
      navigate("/ideas")
    } catch(error){
      alert(error)
    }
  }

  async function init() {
    try {
      const loggedIn = await account.get();
      setUser(loggedIn);
    } catch (err) {
      setUser(null);
      // alert(err)
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <UserContext.Provider value={{ current: user, login, logout, register }}>
      {props.children}
    </UserContext.Provider>
  );
}
