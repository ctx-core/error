import { assign, clone } from '@ctx-core/object';
import { throw_error } from './throw_error';
/**
 * Throws a invalid_argument error (HTTP 500)
 * @example
 * throw_invalid_argument({key: 'ctx.foobar'}) // ctx.foobar is invalid
 */
export function throw_invalid_argument(...error_ctx_a) {
    const error_ctx = clone(...error_ctx_a);
    throw_error(assign({
        type: 'invalid_argument',
        http_status: 500,
        error_message: `${error_ctx.key} is invalid`,
        http_error_message: 'Error',
    }, error_ctx));
}
export { throw_invalid_argument as throw__invalid_argument };
//# sourceMappingURL=src/throw_invalid_argument.js.map