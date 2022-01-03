import { assign, clone } from '@ctx-core/object'
import { throw_error } from './throw_error.js'
/** @type {import('./throw_bad_gateway.d.ts').bad_gateway_error_} */
export const bad_gateway_error_ = (error_ctx = {})=>new BadGatewayError(error_ctx)
/**
 * Throws a bad_gateway error (HTTP 502)
 * @type {import('./throw_bad_gateway.d.ts').throw_bad_gateway}
 * @example
 * throw__bad_gateway(ctx) // Bad Gateway
 */
export const throw_bad_gateway = (...error_ctx_a)=>{
	throw_error(bad_gateway_error_(clone(...error_ctx_a)))
}
/** @type {import('./throw_bad_gateway.d.ts').BadGatewayError} */
export class BadGatewayError extends Error {
	constructor(error_ctx = {}) {
		super()
		this.type = 'bad_gateway'
		this.http_status = 502
		this.error_message = 'Bad Gateway'
		this.http_error_message = 'Bad Gateway'
		assign(this, error_ctx)
	}
}
export { throw_bad_gateway as throw__bad_gateway }
