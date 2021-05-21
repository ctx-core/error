import { clone } from '@ctx-core/object'
import type { error_Ctx } from './error_Ctx'
/**
 * Assigns & coerces to ctx.ctx__error
 */
export function _error_ctx(error_ctx_or_error_message:error_Ctx|string):error_Ctx {
	const upstream_error = (
		typeof error_ctx_or_error_message === 'string'
		? { error_message: (error_ctx_or_error_message as string) }
		: error_ctx_or_error_message || {}
	) as error_Ctx
	return clone(upstream_error, { upstream_error }) as error_Ctx
}
export {
	_error_ctx as _ctx__error
}
