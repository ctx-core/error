import type { error_ctx_I } from './error_ctx_I.js'
/**
 * Prints the given `error_ctx` to stderr
 */
export function print_error(error_ctx:error_ctx_I):void {
	const { http_error_message = 'Error' } = error_ctx
	const body = JSON.stringify({ error_message: http_error_message })
	console.error(`
print__error|catch
${error_ctx}
${body}
${error_ctx.error_message}
${error_ctx.stack}`.trim())
}
export {
	print_error as print__error
}
