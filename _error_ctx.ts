import { clone } from '@ctx-core/object'
import type { error_ctx_type } from './error_ctx_type'
/**
 * Assigns & coerces to ctx.ctx__error
 */
export function _error_ctx(error_ctx_or_error_message:error_ctx_type|string) {
	const upstream_error = (
		typeof error_ctx_or_error_message === 'string'
		? { error_message: (error_ctx_or_error_message as string) }
		: error_ctx_or_error_message || {}
	) as error_ctx_type
	return clone(upstream_error, { upstream_error }) as error_ctx_type
}
export const _ctx__error = _error_ctx
