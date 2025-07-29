import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getDetails} from "../services/servicesAPI.js";
import { useParams } from "react-router-dom";

export const Details = () => {
    const { store, dispatch } = useGlobalReducer()

    const { type, id } = useParams()

    useEffect(() => {
        getDetails(store, dispatch, type, id)
    }, [])

    function homeworldFinder() {
        for (let i = 0; i < store.planets.length; i++) {
            if (store.details?.properties?.homeworld == store["planets"][i]["url"]) {
                return store["planets"][i]["name"]
            } else {
                return "Unknown"
            }
        }
    }

    return (
        <div className="container text-white">
            <div class="container">
                <div class="row mt-5 mb-5">
                    <div class="col text-center">
                        {type === "people" ? (
                            <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${id}.jpg`} style={{ width: "100%", height: "auto", maxHeight: "500px", maxWidth: "350px" }} />
                        ) : type === "vehicles" ? (
                            <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/vehicles/${id}.jpg`} style={{ width: "100%", height: "auto" }} />
                        ) : type === "planets" ? (
                            <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${id}.jpg`} style={{ width: "100%", height: "auto", maxHeight: "500px", maxWidth: "500px" }}
                                onError={(e) => {
                                    e.target.src = "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357"; // Imagen backup Tatooine
                                }}
                            />
                        ) : (
                            <p>Unknown type</p>
                        )}
                    </div>
                    <div class="col mt-2">
                        <h1>{store.details?.properties?.name.toUpperCase()}</h1>
                        <hr></hr>
                        <h4>Description</h4>
                        <p>{store.details?.description}</p>
                    </div>
                </div>
                {type === "people" ? (
                    <div className="row">
                        <div class="col px-4 py-2 my-2">
                            <h4>Gender</h4>
                            <p>{store.details?.properties?.gender}</p>
                        </div>
                        <div class="col border-start border-light border-opacity-25 px-4 py-2 my-2">
                            <h4>Skin color</h4>
                            <p>{store.details?.properties?.skin_color}</p>
                        </div>
                        <div class="col border-start border-light border-opacity-25 px-4 py-2 my-2">
                            <h4>Hair color</h4>
                            <p>{store.details?.properties?.hair_color}</p>
                        </div>
                        <div class="col border-start border-light border-opacity-25 px-4 py-2 my-2">
                            <h4>Eye color</h4>
                            <p>{store.details?.properties?.eye_color}</p>
                        </div>
                        <div class="col border-start border-light border-opacity-25 px-4 py-2 my-2">
                            <h4>Height</h4>
                            <p>{store.details?.properties?.height}</p>
                        </div>
                        <div class="col border-start border-light border-opacity-25 px-4 py-2 my-2">
                            <h4>Mass</h4>
                            <p>{store.details?.properties?.mass}</p>
                        </div>
                        <div class="col border-start border-light border-opacity-25 px-4 py-2 my-2">
                            <h4>Birth year</h4>
                            <p>{store.details?.properties?.birth_year}</p>
                        </div>
                        <div class="col border-start border-light border-opacity-25 px-4 py-2 my-2">
                            <h4>Homeworld</h4>
                            <p>{homeworldFinder()}</p>
                        </div>
                    </div>
                ) : type === "vehicles" ? (
                    <div className="row">
                        <div class="col px-4 py-2 my-2">
                            <h5>Consumables</h5>
                            <p>{store.details?.properties?.consumables}</p>
                        </div>
                        <div class="col border-start border-light border-opacity-25 px-4 py-2 my-2">
                            <h5>Cargo capacity</h5>
                            <p>{store.details?.properties?.cargo_capacity}</p>
                        </div>
                        <div class="col border-start border-light border-opacity-25 px-4 py-2 my-2">
                            <h5>Passengers</h5>
                            <p>{store.details?.properties?.passengers}</p>
                        </div>
                        <div class="col border-start border-light border-opacity-25 px-4 py-2 my-2">
                            <h5>Max atmosphering speed</h5>
                            <p>{store.details?.properties?.max_atmosphering_speed}</p>
                        </div>
                        <div class="col border-start border-light border-opacity-25 px-4 py-2 my-2">
                            <h5>Crew</h5>
                            <p>{store.details?.properties?.crew}</p>
                        </div>
                        <div class="col border-start border-light border-opacity-25 px-4 py-2 my-2">
                            <h5>Length</h5>
                            <p>{store.details?.properties?.length}</p>
                        </div>
                        <div class="col border-start border-light border-opacity-25 px-4 py-2 my-2">
                            <h5>Model</h5>
                            <p>{store.details?.properties?.model}</p>
                        </div>
                        <div class="col border-start border-light border-opacity-25 px-4 py-2 my-2">
                            <h5>Cost in credits</h5>
                            <p>{store.details?.properties?.cost_in_credits}</p>
                        </div>
                        <div class="col border-start border-light border-opacity-25 px-4 py-2 my-2">
                            <h5>Manufacturer</h5>
                            <p>{store.details?.properties?.manufacturer}</p>
                        </div>
                        <div class="col border-start border-light border-opacity-25 px-4 py-2 my-2">
                            <h5>Vehicle class</h5>
                            <p>{store.details?.properties?.vehicle_class}</p>
                        </div>
                    </div>
                ) : type === "planets" ? (
                    <div className="row">
                        <div class="col px-4 py-2 my-2">
                            <h5>Climate</h5>
                            <p>{store.details?.properties?.climate}</p>
                        </div>
                        <div class="col border-start border-light border-opacity-25 px-4 py-2 my-2">
                            <h5>Surface water</h5>
                            <p>{store.details?.properties?.surface_water}</p>
                        </div>
                        <div class="col border-start border-light border-opacity-25 px-4 py-2 my-2">
                            <h5>Diameter</h5>
                            <p>{store.details?.properties?.diameter}</p>
                        </div>
                        <div class="col border-start border-light border-opacity-25 px-4 py-2 my-2">
                            <h5>Rotation period</h5>
                            <p>{store.details?.properties?.rotation_period}</p>
                        </div>
                        <div class="col border-start border-light border-opacity-25 px-4 py-2 my-2">
                            <h5>Terrain</h5>
                            <p>{store.details?.properties?.terrain}</p>
                        </div>
                        <div class="col border-start border-light border-opacity-25 px-4 py-2 my-2">
                            <h5>Gravity</h5>
                            <p>{store.details?.properties?.gravity}</p>
                        </div>
                        <div class="col border-start border-light border-opacity-25 px-4 py-2 my-2">
                            <h5>Orbital period</h5>
                            <p>{store.details?.properties?.orbital_period}</p>
                        </div>
                        <div class="col border-start border-light border-opacity-25 px-4 py-2 my-2">
                            <h5>Population</h5>
                            <p>{store.details?.properties?.population}</p>
                        </div>
                    </div>
                ) : (
                    <p>Unknown type</p>
                )}
            </div>
        </div>
    )
}