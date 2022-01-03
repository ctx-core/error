/**
 * Logs the given error_ctx to stderr
 * @type {import('./console_error.d.ts').console_error}
 */
export const console_error = error_ctx=>{
	const out_error_message = error_ctx.error_message || error_ctx && error_ctx.toString() || 'throw_error: Unknown Error'
	const stack = error_ctx && error_ctx.stack
	console.error(`
console_error
${stack}
${out_error_message}
${JSON.stringify(error_ctx)}
	`.trim())
}
export { console_error as console__error }
