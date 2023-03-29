/** @typedef {import('../_types').error_o_T}error_o_T */
/**
 * Logs the given error_o to stderr
 * @param {error_o_T}error_o
 */
export function console__error(error_o) {
	const message =
		error_o.message
		|| error_o && error_o.toString()
		|| 'console__error|Unknown Error'
	const stack = error_o && error_o.stack
	console.error(`
console__error
${stack}
${message}
${JSON.stringify(error_o)}
	`.trim())
}
