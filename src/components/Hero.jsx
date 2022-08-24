import { Button } from "react-bootstrap";

const Hero = () => {
	return (
		<section id="hero">
			<div className="container h-100 p-4 text-white d-flex flex-column justify-content-evenly">
				<h2 className="display-1">Protect yourself from Natural Calamities.</h2>
				<h2>
					<small>
						Stay updated with current weather trends in your area. Get
						Lightening, Thunder, Cyclone and Flood alerts.
					</small>
				</h2>
				<span className="d-flex gap-3">
					<Button variant="secondary" size="lg">
						FAQ
					</Button>
					<Button size="lg" variant="primary">
						How it works
					</Button>
				</span>
			</div>
		</section>
	);
};

export default Hero;
