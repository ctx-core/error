import { assign } from '@ctx-core/object'
/**
 * Assigns & coerces to ctx.ctx__error
 * @type {typeof import('./index.d.ts').error_o_}
 */
export const error_o_ = error_ctx_or_error_message=>{
	const upstream_error =
		typeof error_ctx_or_error_message === 'string'
		? {
				error_message: error_ctx_or_error_message
			}
		: error_ctx_or_error_message || {}
	const error = new Error(error_ctx_or_error_message.error_message)
	return assign(error, upstream_error, /** @type {Error} */{ upstream_error })
}
export {
	error_o_ as error_ctx_,
	error_o_ as _error_ctx,
	error_o_ as _ctx__error,
}
