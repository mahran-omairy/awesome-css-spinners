import React from "react";
import './styles.css';


// ---- bars loader
export const BarsLoader = props => {
	const { color  , duration } = props;
	const innerDiv= [];
	
	for (let i =0 ; i<3; i++){
		innerDiv.push(
			<div key= {i}
				style={{
					backgroundColor: color || "black" , 
					animationDuration: duration || "1.2s" 
				}}
			>
			</div>
		)
	}
	return (
		 <div className="bars-loader">
			{innerDiv}
		 </div>
	)
}

// ---- ripple loader
export const RippleLoader = props => {
	const { color , duration  } = props;
	const innerDiv= [];
	for (let i =0 ; i<2; i++){
		innerDiv.push(
			<div key= {i}
				style={{
					borderColor: color || "black" , 
					animationDuration: duration || "1.2s" 
				}}
			>
			</div>
		)
	}
	return (
		 <div className = "ripple-loader">
			{innerDiv}
		 </div>
		 
	)
}

// ---- dual ring loader
export const DualRingLoader = props => {
	const { color , duration  } = props;
	const  loaderColor = color ? color + " transparent" : "black transparent";
	return (
		 <div className = "dual-ring-loader">
				<div style ={{
					borderColor: loaderColor,
					animationDuration: duration || "1.2s"
				}}>
				</div>
			</div>
		 
	)
}

// ---- ring loader
export const RingLoader = props => {
	const { color , duration  } = props;
	const innerDiv= [];
	const loaderColor = color ? color + " transparent transparent transparent" : "black transparent transparent transparent";
	for (let i =0 ; i<4; i++){
		innerDiv.push(
			<div key= {i}
				style={{
					borderColor: loaderColor,
					animationDuration: duration || "1.2s" 
				}}
			>
			</div>
		)
	}
	return (
		 <div className = "ring-loader">
				{innerDiv}
			</div>
		 
	)
}

// ---- roller loader
export const RollerLoader = props => {
	const { color , duration } = props;
	const innerDiv= [];
	
	for (let i =0 ; i<8; i++){
		innerDiv.push(
			<div key= {i}
				style={{
					background: color || "black",
					animationDuration: duration || "1.2s" 
				}}
			>
			</div>
		)
	}
	return (
		 <div className = "roller-loader">
				{innerDiv}
			</div>
		 
	)
}




// ---- spinner loader
export const SpinnerLoader = props => {
	const { color , duration } = props;
	const innerDiv= [];
	
	for (let i =0 ; i<12; i++){
		innerDiv.push(
			<div key= {i}
				style={{
					background: color || "black",
					animationDuration: duration || "1.2s" 
				}}
			>
			</div>
		)
	}
	return (
		 <div className = "spinner-loader">
				{innerDiv}
			</div>
		 
	)
}

