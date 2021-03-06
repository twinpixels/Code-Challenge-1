const Vector = require('./Vector');
module.exports = class Grid{
	constructor(sx,sy){
		this.origin = new Vector(0,0);
		this.size = new Vector(sx,sy);
	}

	isInsideMap(x,y){
		const XInside = isInRange(x, this.origin.x, this.size.x);
		const YInside = isInRange(y, this.origin.y, this.size.y);
		if(XInside && YInside){
			return true;
		}
		return false;
	}
}

const isInRange = (input, min, max) => {
	if (input >= min && input <= max)
		return true;
	return false;
}
