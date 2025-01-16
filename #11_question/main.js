/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
	let one = 0;
	let two = 0;

	return function (...args) {
		if (args.length > 0) {
      
			let [a, b] = args;
			return fn(a, b);
		}
	};
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
	callCount += 1;
	return a + b;
});

console.log(memoizedFn(2, 3)); // 5

console.log(callCount);
