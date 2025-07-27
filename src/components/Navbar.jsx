import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar bg-black">
			<div className="container">
				<Link to="/">
					<img style={{maxWidth: "120px", height: "auto"}} src="https://infonegocios.info/content/images/2023/10/24/415577/conversions/star-wars-impactmkt-medium-size.jpg"></img>
				</Link>
				<div className="ml-auto">
					<Link to="/favorites">
						<button className="btn btn-outline-light">Favorites</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};