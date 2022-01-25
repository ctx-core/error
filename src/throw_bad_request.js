import { assign, clone } from '@ctx-core/object'
import { HttpError } from './throw_http_error.js'
import { throw_error } from './throw_error.js'
/** @type {import('./throw_bad_request.d.ts').bad_request_error_} */
export const bad_request_error_ = (error_ctx = {})=>new BadRequestError(error_ctx)
/**
 * Throws an bad_request error (HTTP 400)
 * @type {import('./throw_bad_request.d.ts').throw_bad_request}
 * @example
 * throw_bad_request(ctx) // Bad Request
 */
export const throw_bad_request = (...error_ctx_a)=>{
	throw_error(bad_request_error_(clone(...error_ctx_a)))
}
/** @type {import('./throw_bad_request.d.ts').BadRequestError} */
export class BadRequestError extends HttpError {
	constructor(error_ctx) {
		super()
		this.type = 'bad_request'
		this.http_status = 400
		this.error_message = 'Bad Request'
		this.http_error_message = 'Bad Request'
		assign(this, error_ctx)
	}
}
export { throw_bad_request as throw__bad_request }
