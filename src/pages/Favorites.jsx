import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Favorites = () => {

    const { store, dispatch } = useGlobalReducer()

    return (
        <div className="container">
            <nav className="tab-switch mt-3">
                <div className="nav nav-underline justify-content-center" id="nav-tab" role="tablist">
                    <button className="nav-link active text-white" id="nav-characters-tab" data-bs-toggle="tab" data-bs-target="#nav-characters"
                        type="button" role="tab" aria-controls="nav-characters" aria-selected="true">Characters</button>
                    <button className="nav-link text-white" id="nav-vehicles-tab" data-bs-toggle="tab" data-bs-target="#nav-vehicles"
                        type="button" role="tab" aria-controls="nav-vehicles" aria-selected="false">Vehicles</button>
                    <button className="nav-link text-white" id="nav-planets-tab" data-bs-toggle="tab" data-bs-target="#nav-planets"
                        type="button" role="tab" aria-controls="nav-planets" aria-selected="false">Planets</button>
                </div>
            </nav>

            <div className="tab-content" id="nav-tabContent">

                <div className="tab-pane fade show active mb-4" id="nav-characters" role="tabpanel" aria-labelledby="nav-characters-tab" tabindex="0">
                    <div className="container">
                        {
                            store.favorites.characters.length !== 0 ? (
                                <div className="row d-flex justify-content-center">
                                    {
                                        store.favorites.characters.map((character) => {
                                            return (
                                                <div className="col-sm-12 col-md-6 col-lg-4 col-xxl-3 mt-4 p-0 d-flex justify-content-center" key={character.uid}>
                                                    <div className="card text-white bg-black bg-opacity-10 border-white" style={{ width: "18rem" }}>
                                                        <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${character.uid}.jpg`} className="card-img-top" />
                                                        <div className="card-body border-top border-light">
                                                            <h5 className="card-title">{character.name}</h5>
                                                            <div className="d-flex justify-content-between">
                                                                <Link to={`/people/${character.uid}`}>
                                                                    <button className="btn btn-outline-light">Details</button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            ) : (<p className="text-white text-center mt-5">No favourite characters have been added</p>)
                        }
                    </div>
                </div>

                <div className="tab-pane fade mb-4" id="nav-vehicles" role="tabpanel" aria-labelledby="nav-vehicles-tab" tabindex="0">
                    <div className="container">
                        {
                            store.favorites.vehicles.length !== 0 ? (
                                <div className="row d-flex justify-content-center">
                                    {
                                        store.favorites.vehicles.map((vehicle) => {
                                            return (
                                                <div className="col-sm-12 col-md-6 col-lg-4 col-xxl-3 mt-4 p-0 d-flex justify-content-center" key={vehicle.uid}>
                                                    <div className="card text-white bg-black bg-opacity-10 border-white" style={{ width: "18rem" }}>
                                                        <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/vehicles/${vehicle.uid}.jpg`} className="card-img-top" />
                                                        <div className="card-body border-top border-light">
                                                            <h5 className="card-title">{vehicle.name}</h5>
                                                            <div className="d-flex justify-content-between">
                                                                <Link to={`/vehicles/${vehicle.uid}`}>
                                                                    <button className="btn btn-outline-light">Details</button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            ) : (<p className="text-white text-center mt-5">No favourite vehicles have been added</p>)
                        }
                    </div>
                </div>

                <div className="tab-pane fade mb-4" id="nav-planets" role="tabpanel" aria-labelledby="nav-planets-tab" tabindex="0">
                    <div className="container">
                        {
                            store.favorites.planets.length !== 0 ? (
                                <div className="row d-flex justify-content-center">
                                    {
                                        store.favorites.planets.map((planet) => {
                                            return (
                                                <div className="col-sm-12 col-md-6 col-lg-4 col-xxl-3 mt-4 p-0 d-flex justify-content-center" key={planet.uid}>
                                                    <div className="card text-white bg-black bg-opacity-10 border-white" style={{ width: "18rem" }}>
                                                        <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${planet.uid}.jpg`} className="card-img-top" onError={(e) => {
                                                            e.target.src = "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357"; // Imagen backup Tatooine
                                                        }} />
                                                        <div className="card-body border-top border-light">
                                                            <h5 className="card-title">{planet.name}</h5>
                                                            <div className="d-flex justify-content-between">
                                                                <Link to={`/planets/${planet.uid}`}>
                                                                    <button className="btn btn-outline-light">Details</button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            ) : (<p className="text-white text-center mt-5">No favourite planets have been added</p>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}