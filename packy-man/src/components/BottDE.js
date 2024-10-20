import "../index.css";
import StroopWafels from "./StroopWafels";

const BottDE = () => {
	return (
		<>
			 
				<div id="a1" name="BottDE" className="block orig rot270">
					<div className="line line1 rder"></div>
					<div className="line line2 rder"></div>
					<div className="line line1 top2"></div>
					<div className="line line2 top2 "></div>
					<div className="line line1 top2 dropBottom"></div>
					<div className="line line1 top2 dropBottom rot180 "></div>
					<StroopWafels block={"BottDE"} />
				</div>
				
			 
		</>
	);
};

export default BottDE;
