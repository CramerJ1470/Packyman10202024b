import React from "react";
import RightSide from "./RightSide";
import RegisterOrStart from "./RegisterOrStart";
import PageTitle from "./PageTitle";
import PacOpen from "./PacOpen";

function Landing() {
	return (
		<>
			<div>
				<div className="landing"></div>
			</div>

			<RegisterOrStart />
			<PageTitle />
			<PacOpen />
		</>
	);
}

export default Landing;
