/** @typedef {import('../_types').error_o_T}error_o_T */
/**
 * Prints the given `error_o` to stderr
 * @param {error_o_T}error_o
 * @type {typeof import('./index.d.ts').error__print}
 */
export function error__print(error_o) {
	const {
		http__message = 'Error',
		message = 'Error'
	} = error_o
	console.error(`
error__print|catch
${error_o}
http__message: ${http__message}
message: ${message}
${error_o.stack}`.trim())
}
