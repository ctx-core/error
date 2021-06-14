import { assign, clone } from '@ctx-core/object';
import { throw_error } from './throw_error';
/**
 * Throws a invalid_state error (HTTP 500)
 * @example
 * throw_invalid_state({key: 'ctx.foobar'}) // ctx.foobar is in an invalid state
 */
export function throw_invalid_state(...error_ctx_a) {
    const error_ctx = clone(...error_ctx_a);
    const reason = error_ctx.reason || 'No reason given.';
    throw_error(assign({
        type: 'invalid_state',
        http_status: 500,
        error_message: `${error_ctx.key} is in an invalid state. ${reason}`,
        http_error_message: 'Error',
    }, error_ctx));
}
export { throw_invalid_state as throw__invalid_state };
//# sourceMappingURL=src/throw_invalid_state.js.map