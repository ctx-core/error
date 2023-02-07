import { assign, clone } from '@ctx-core/object'
import { error__throw } from '../error__throw/index.js'
import { HttpError } from '../http_error__throw/index.js'
/** @type {typeof import('./index.d.ts').bad_gateway_error_} */
export const bad_gateway_error_ = (error_o = {})=>
	new BadGatewayError(error_o)
/**
 * Throws a bad_gateway error (HTTP 502)
 * @type {import('./index.d.ts').bad_gateway__throw}
 * @example
 * bad_gateway_throw(ctx) // Bad Gateway
 */
export const bad_gateway__throw = (...error_ctx_a)=>{
	error__throw(bad_gateway_error_(clone(...error_ctx_a)))
}
/** @type {import('./index.d.ts').BadGatewayError} */
export class BadGatewayError extends HttpError {
	constructor(error_o = {}) {
		super()
		this.type = 'bad_gateway'
		this.http_status = 502
		this.error = this.type
		this.http_error = this.type
		this.error_message = 'Bad Gateway'
		this.http_error_message = this.error_message
		assign(this, error_o)
	}
}
export {
	bad_gateway__throw as throw_bad_gateway,
	bad_gateway__throw as throw__bad_gateway,
}
