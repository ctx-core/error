import { clone } from '@ctx-core/object'
/**
 * Assigns & coerces to ctx.ctx__error
 * @type {import('./error_ctx_.d.ts').error_ctx_}
 */
export const error_ctx_ = error_ctx_or_error_message=>{
	const upstream_error = typeof error_ctx_or_error_message === 'string' ? {
		error_message: error_ctx_or_error_message
	} : error_ctx_or_error_message || {}
	return clone(upstream_error, {
		upstream_error
	})
}
export { error_ctx_ as _error_ctx, error_ctx_ as _ctx__error, }