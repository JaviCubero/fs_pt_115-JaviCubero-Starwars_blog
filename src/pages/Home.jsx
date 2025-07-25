import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="container">

			<nav className="tab-switch">
				<div className="nav nav-tabs" id="nav-tab" role="tablist">
					<button className="nav-link active" id="nav-characters-tab" data-bs-toggle="tab" data-bs-target="#nav-characters"
						type="button" role="tab" aria-controls="nav-characters" aria-selected="true">Characters</button>
					<button className="nav-link" id="nav-vehicles-tab" data-bs-toggle="tab" data-bs-target="#nav-vehicles"
						type="button" role="tab" aria-controls="nav-vehicles" aria-selected="false">Vehicles</button>
					<button className="nav-link" id="nav-planets-tab" data-bs-toggle="tab" data-bs-target="#nav-planets"
						type="button" role="tab" aria-controls="nav-planets" aria-selected="false">Planets</button>
				</div>
			</nav>

			<div className="tab-content" id="nav-tabContent">

				<div className="tab-pane fade show active mb-4" id="nav-characters" role="tabpanel" aria-labelledby="nav-characters-tab" tabindex="0">
					<div className="container">
						<div className="row">
							{
								store.characters.map((character) => {
									return (
										<div className="col-sm-6 col-md-4 col-lg-3 px-0" key={character.uid}>
											<div className="card" style={{ width: "18rem" }}>
												<img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${character.uid}.jpg`} className="card-img-top" />
												<div className="card-body">
													<h5 className="card-title">{character.name}</h5>
													<Link to={`/people/${character.uid}`}>
														<button className="btn btn-primary">Details</button>
													</Link>
												</div>
											</div>
										</div>
									)
								})
							}
						</div>
					</div>
				</div>

				<div className="tab-pane fade show active mb-4" id="nav-vehicles" role="tabpanel" aria-labelledby="nav-vehicles-tab" tabindex="0">
					<div className="container">
						<div className="row">
							{
								store.vehicles.map((vehicle) => {
									return (
										<div className="col-sm-6 col-md-4 col-lg-3 px-0" key={vehicle.uid}>
											<div className="card" style={{ width: "18rem" }}>
												<img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/vehicles/${vehicle.uid}.jpg`} className="card-img-top" />
												<div className="card-body">
													<h5 className="card-title">{vehicle.name}</h5>
													<Link to={`/vehicles/${vehicle.uid}`}>
														<button className="btn btn-primary">Details</button>
													</Link>
												</div>
											</div>
										</div>
									)
								})
							}
						</div>
					</div>
				</div>

				<div className="tab-pane fade show active mb-4" id="nav-planets" role="tabpanel" aria-labelledby="nav-planets-tab" tabindex="0">
					<div className="container">
						<div className="row">
							{
								store.planets.map((planet) => {
									return (
										<div className="col-sm-6 col-md-4 col-lg-3 px-0" key={planet.uid}>
											<div className="card" style={{ width: "18rem" }}>
												<img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${planet.uid}.jpg`} className="card-img-top" onError={(e) => {
													console.error(`No se pudo cargar la imagen de ${planet.name}, se usará una de backup.`);
													e.target.src = "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357"; // Imagen de backup
												}} />
												<div className="card-body">
													<h5 className="card-title">{planet.name}</h5>
													<Link to={`/planets/${planet.uid}`}>
														<button className="btn btn-primary">Details</button>
													</Link>
												</div>
											</div>
										</div>
									)
								})
							}
						</div>
					</div>
				</div>

			</div>
		</div>
	);
}; 