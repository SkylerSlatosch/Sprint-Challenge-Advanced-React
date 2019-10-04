import React, { useEffect } from "react";
import { useLocalStorage } from "../hooks/LocalStorage";
export const DarkMode = (storageKey, initialValue) => {
    const [darkValue, setDarkValue] = useLocalStorage(storageKey, initialValue);
    const body = document.querySelector("body");
    useEffect(() => {
        darkValue ?
            body.classList.add("dark-mode") :
            body.classList.remove("dark-mode")
    }, [darkValue, body.classList])
    return [darkValue, setDarkValue]
}