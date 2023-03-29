import type { error_o_T } from '../_types'
/**
 * Assigns & coerces to ctx.ctx__error
 */
export declare function error_o_(
	message?:string,
	error_o?:error_o_T
):error_o_T
/**
 * Throws an error
 * @throws Decorate & throw error given by the arguments.
 */
export declare function error_o__throw(
	message?:string,
	error_o?:error_o_T
):void
export {
	error_o__throw as error__throw,
}
