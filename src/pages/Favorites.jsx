import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Favorites = () => {
    const {store, dispatch} = useGlobalReducer()

    return (
        <div className="container">
            <p>Lista de favoritos</p>
        </div>
    )
}