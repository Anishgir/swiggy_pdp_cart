import React,{useState,useEffect,createContext} from "react";

export const MenuItemsContext = createContext();

export const MenuItemsProvider = (props) => {
    const [menuItems,setMenuItems] = useState([]);
    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await fetch('http://localhost:8080/menu-items');
                const data = await response.json();
                if(data.length)
                setMenuItems(data);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchMenuItems();
    },[]);
    return(
        <MenuItemsContext.Provider value = {[menuItems]}>
            {props.children}
        </MenuItemsContext.Provider>
    );
}