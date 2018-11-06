'use strict';
module.exports = (to, from) => {
	for (const prop of Reflect.ownKeys(from)) {
		try{
			Object.defineProperty(to, prop, Object.getOwnPropertyDescriptor(from, prop));
		}
		catch(error) {
			console.log("mimic-fn could not define property.", error)
		}
	}

	return to;
};
