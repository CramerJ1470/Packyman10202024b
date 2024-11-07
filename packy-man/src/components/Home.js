import React from "react";

import RegisterOrStart from "./RegisterOrStart";
import PageTitle from "./PageTitle";
import PacOpen from "./PacOpen";

function Home(isAuth) {
	return (
		<>
			<div>
				<div className="landing"></div>
			</div>

			<RegisterOrStart isAuth={isAuth}/>
			<PageTitle />
			<PacOpen />
		</>
	);
}

export default Home;
