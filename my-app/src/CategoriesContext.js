import React,{useState,useEffect,createContext} from "react";

export const CategoriesContext = createContext();

export const CategoriesProvider  = (props) =>{
    const [categories,setCategories] = useState([]);
    useEffect(() =>{
      const fetchCategories = async () => {
          try {
              const response = await fetch('http://localhost:8080/categories');
              const data = await response.json();
              setCategories(data);
          } catch (error) {
              console.log("error", error);
          }
      }
      fetchCategories();
    },[]);
    return(
        <CategoriesContext.Provider value = {[categories,setCategories]}>
                {props.children}
        </CategoriesContext.Provider>
    );
}