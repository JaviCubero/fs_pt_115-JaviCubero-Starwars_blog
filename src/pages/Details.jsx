import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getDetails } from "../services/servicesAPI.js";
import { useParams } from "react-router-dom";

export const Details = () => {
    const {store, dispatch} = useGlobalReducer()

    const { type, id } = useParams()

    useEffect (() => {
        getDetails(store, dispatch, type, id)
    }, [])
    

    return (
        <div className="container">
            <p>{store.details.name}</p>
        </div>
    )
}