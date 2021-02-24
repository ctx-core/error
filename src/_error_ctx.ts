import { clone } from '@ctx-core/object'
import type { error_ctx_T } from './error_ctx_T'
/**
 * Assigns & coerces to ctx.ctx__error
 */
export function _error_ctx(error_ctx_or_error_message:error_ctx_T|string):error_ctx_T {
	const upstream_error = (
		typeof error_ctx_or_error_message === 'string'
		? { error_message: (error_ctx_or_error_message as string) }
		: error_ctx_or_error_message || {}
	) as error_ctx_T
	return clone(upstream_error, { upstream_error }) as error_ctx_T
}
export {
	_error_ctx as _ctx__error
}
