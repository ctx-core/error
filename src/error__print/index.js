/**
 * Prints the given `error_o` to stderr
 * @type {typeof import('./index.d.ts').error__print}
 */
export const error__print = error_o=>{
	const { http_error_message = 'Error' } = error_o
	const body = JSON.stringify({
		error_message: http_error_message
	})
	console.error(`
print__error|catch
${error_o}
${body}
${error_o.error_message}
${error_o.stack}`.trim())
}
export {
	error__print as print_error,
	error__print as print__error,
}
