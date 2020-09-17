import type { error_ctx_type } from './error_ctx_type'
/**
 * Prints the given `error_ctx` to stderr
 */
export function print_error(error_ctx: error_ctx_type) {
	const { http_error_message = 'Error' } = error_ctx
	const body = JSON.stringify({ error_message: http_error_message })
	console.error(`
print__error|catch
${ error_ctx }
${ body }
${ error_ctx.error_message }
${ error_ctx.stack }`.trim())
}
export const print__error = print_error
