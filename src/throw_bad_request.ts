import { assign } from '@ctx-core/object'
import { throw_error } from './throw_error'
import type { error_Ctx } from './error_Ctx'
/**
 * Throws an bad_request error (HTTP 400)
 * @example
 * throw_bad_request(ctx) // Bad Request
 */
export function throw_bad_request(...error_ctx_a1:error_Ctx[]):void {
	const base = {
		type: 'bad_request',
		http_status: 400,
		error_message: 'Bad Request',
		http_error_message: 'Bad Request',
	} as error_Ctx
	throw_error(assign(base, ...error_ctx_a1))
}
export {
	throw_bad_request as throw__bad_request
}
