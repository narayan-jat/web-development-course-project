import { createContext, useContext, useEffect, useState } from "react";
import { databases } from "../appwrite";
import { ID, Query } from "appwrite";

export const IDEAS_DATABASE_ID = "670d12200038edcd3094"; // Replace with your database ID
export const IDEAS_COLLECTION_ID = "670d123e0003c0d2cad7"; // Replace with your collection ID

const IdeasContext = createContext();

export function useIdeas() {
  return useContext(IdeasContext);
}

export function IdeasProvider(props) {
  const [ideas, setIdeas] = useState([]);

  async function add(idea) {
try{
  const response = await databases.createDocument(
    IDEAS_DATABASE_ID,
    IDEAS_COLLECTION_ID,
    ID.unique(),
    idea
  );
  setIdeas((ideas) => [response, ...ideas].slice(0, 10));
} catch(error){
  alert(error);
}
  }

  async function remove(id) {
    try{
      await databases.deleteDocument(IDEAS_DATABASE_ID, IDEAS_COLLECTION_ID, id);
    setIdeas((ideas) => ideas.filter((idea) => idea.$id !== id));
    await init(); // Refetch ideas to ensure we have 10 items
    } catch(err){
      alert(err)
    }
  }

  async function init() {
    const response = await databases.listDocuments(
      IDEAS_DATABASE_ID,
      IDEAS_COLLECTION_ID,
      [Query.orderDesc("$createdAt"), Query.limit(10)]
    );
    setIdeas(response.documents);
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <IdeasContext.Provider value={{ current: ideas, add, remove }}>
      {props.children}
    </IdeasContext.Provider>
  );
}
