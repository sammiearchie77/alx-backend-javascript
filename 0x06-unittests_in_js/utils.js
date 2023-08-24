class Utils {
    static calculateNumber(type, a, b) {
	const a = Math.round(a);
	const b = Math.round(b);
	let c = 0;
	switch (type) {
	case 'SUM':
            c = a + b;
            break;
	case 'SUBTRACT':
            c = a - b;
            break;
	case 'DIVIDE':
	    if (b === 0) {
		c = "Error";
	    } else {
		c = a / b;
	    }
	    break;
	}
	return c;
    }
}

module.exports = Utils;
