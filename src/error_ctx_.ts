import { clone } from '@ctx-core/object'
import type { error_ctx_I } from './error_ctx_I'
/**
 * Assigns & coerces to ctx.ctx__error
 */
export function error_ctx_(error_ctx_or_error_message:error_ctx_I|string):error_ctx_I {
	const upstream_error = (
		typeof error_ctx_or_error_message === 'string'
		? { error_message: (error_ctx_or_error_message as string) }
		: error_ctx_or_error_message || {}
	) as error_ctx_I
	return clone(upstream_error, { upstream_error }) as error_ctx_I
}
export {
	error_ctx_ as _error_ctx,
	error_ctx_ as _ctx__error,
}
