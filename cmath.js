/**
 * Returns a value normalized to a range.
 * @param {number} value The value you want to normalize to 0 - 1.
 * @param {number} minimum The minimum value of the normal range.
 * @param {number} maximum The maximum value of the normal range.
 */
function Normalize(value, minimum, maximum){
	return (value - minimum) / (maximum - minimum);
}
/**
 * Returns a value clamped to a range.
 * @param {number} value The value you want to clamped to range.
 * @param {number} minimum The minimum value of the range.
 * @param {number} maximum The maximum value of the range.
 */
function Clamp(value, minimum, maximum){
	return Math.min(maximum, Math.max(minimum, value));
}
/**
 * Returns value clamped to range and rounded down.
 * @param {number} value The value you want to clamped to range.
 * @param {number} minimum  The minimum value of the range.
 * @param {number} maximum The maximum value of the range.
 */
function ClampFloor(value, minimum, maximum){
	return Math.floor(Math.min(maximum, Math.max(minimum, value)));
}
/**
 * Returns a unique id based on time, not very secure.
 * @param {string} prefix - Prefix to add to the start of id.
 * @param {string} interfix - Interfix that separates time pard from entropy part
 * @param {boolean} moreEntropy  - Add more randomness? (Longer result).
 */
function Uid(prefix = "", interfix, moreEntropy = false){
	var a = (Date.now()/1000).toString(16).split(".").join("").padStart(14,"0");
	var b = "";
	if(moreEntropy){
		b += interfix + Math.round(Math.random()*4294967295).toString(16).padStart(8, "0");				 
	}
	return "WOOP" + prefix + a + b;
}
/**
 * Returns true if point is within a box.
 * @param {number} x0 X cordiniate of the point in question.
 * @param {number} y0 Y cordiniate of the point in question.
 * @param {number} x1 X cordinate of first box corner.
 * @param {number} y1 Y cordinate of first box corner.
 * @param {number} x2 X cordinate of second box corner.
 * @param {number} y2 Y cordinate of second box corner.
 */
function InBounds (x0,y0,x1,y1,x2,y2){
	if (x0 > x1 && y0 < x2 && y0 > y1 && y0 < y2){		
		return true;
	}
	else{
		return false;
	}
}
/**
 * Returns the point at which two lines intersect.
 * @param {number} x1 X for line 1 start.
 * @param {number} y1 Y for line 1 start.
 * @param {number} x2 X for line 2 end.
 * @param {number} y2 Y for line 2 end.
 * @param {number} x3 X for line 2 start.
 * @param {number} y3 Y for line 2 start.
 * @param {number} x4 X for line 2 end.
 * @param {number} y4 Y for line 2 end.
 */
function Intersection (x1,y1,x2,y2,x3,y3,x4,y4) {
		
	if ((x1 === x2 && y1 === y2) || (x3 === x4 && y3 === y4)) {
			return false
	}
	let denominator = ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
	if (denominator === 0){
		return false
	}
	let ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator
	let ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator

	// is the intersection along the segments
	if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
		return false
	}

	// Return a object with the x and y coordinates of the intersection
	let x = x1 + ua * (x2 - x1)
	let y = y1 + ua * (y2 - y1)

	return {x: x, y: y};
}
/**
 * Interpolates between one value and another by step 0 - 1.
 * @param {number} start Value at start;
 * @param {*} end Value at end;
 * @param {*} amt Step, 0 - 1.
 */
function Lerp (start, end, amt){
	return (1-amt) * start + amt * end;
}
/**
 * Returns distance between two points
 * @param {number} x1 X coodinate of point 1
 * @param {number} y1 Y coodinate of point 1
 * @param {number} x2 X coodinate of point 2
 * @param {number} y2 Y coodinate of point 2
 */
function Distance(x1,y1,x2,y2){
	return Math.sqrt( Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2) );
}
/**
 * Returns angle between two points relative to.. um.. something.
 * @param {number} x1 X coodinate of point 1
 * @param {number} y1 Y coodinate of point 1
 * @param {number} x2 X coodinate of point 2 
 * @param {number} y2 Y coodinate of point 2
 */
function Angle (x1,y1,x2,y2){
	return Math.atan2(y2 - y1, x2 - x1);
}
try{
module.exports = { 
	Normalize,
	Clamp,
	ClampFloor,
	Uid,
	InBounds,
	Intersection,
	Lerp,
	Distance,
	Angle
}
} catch (e) {
	console.log("Don't even worry about it.")
}



