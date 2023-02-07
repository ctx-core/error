import { assign, clone } from '@ctx-core/object'
import { error__throw } from '../error__throw/index.js'
import { HttpError } from '../http_error__throw/index.js'
/** @type {typeof import('./index.d.ts').bad_request_error_} */
export const bad_request_error_ = (error_o = {})=>new BadRequestError(error_o)
/**
 * Throws a bad_request error (HTTP 400)
 * @type {import('./index.d.ts').bad_request__throw}
 * @example
 * bad_request__throw(ctx) // Bad Request
 */
export const bad_request__throw = (...error_ctx_a)=>{
	error__throw(bad_request_error_(clone(...error_ctx_a)))
}
/** @type {import('./index.d.ts').BadRequestError} */
export class BadRequestError extends HttpError {
	constructor(error_o) {
		super()
		this.type = 'bad_request'
		this.http_status = 400
		this.error = this.type
		this.http_error = this.type
		this.error_message = 'Bad Request'
		this.http_error_message = this.error_message
		assign(this, error_o)
	}
}
export {
	bad_request__throw as throw_bad_request,
	bad_request__throw as throw__bad_request,
}
