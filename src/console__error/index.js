/**
 * Logs the given error_o to stderr
 * @type {typeof import('./index.d.ts').console__error}
 */
export const console__error = error_o=>{
	const out_error_message =
		error_o.error_message
		|| error_o && error_o.toString()
		|| 'error__throw: Unknown Error'
	const stack = error_o && error_o.stack
	console.error(`
console__error
${stack}
${out_error_message}
${JSON.stringify(error_o)}
	`.trim())
}
export { console__error as console_error }
