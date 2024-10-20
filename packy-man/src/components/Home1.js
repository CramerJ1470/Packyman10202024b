import React from "react";

import RegisteredStart from "./RegisteredStart";
import PageTitle from "./PageTitle";
import PacOpen from "./PacOpen";
import { useNavigate } from "react-router-dom";

function Home1(isAuth) {
    const navigate = useNavigate();
    // if(!isAuth) {
    //     alert("Please Login");
    //     navigate("/");
    // } else {
	return (
		<>
			<div>
				<div className="landing"></div>
			</div>

			<RegisteredStart />
			<PageTitle />
			<PacOpen />
		</>
	);
}
// }

export default Home1;
