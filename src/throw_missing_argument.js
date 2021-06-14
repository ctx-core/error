import { assign, clone } from '@ctx-core/object';
import { throw_error } from './throw_error';
/**
 * Throws a missing_argument error (HTTP 500)
 * @example
 * throw_missing_argument({key: 'ctx.foobar', type: 'baz__agent'}) // ctx.foobar is not defined - baz__agent
 */
export function throw_missing_argument(...error_ctx_a) {
    const error_ctx = clone(...error_ctx_a);
    throw_error(assign({
        type: 'missing_argument',
        http_status: 500,
        error_message: `${error_ctx.key} is not defined - ${error_ctx.type || 'Unknown Type'}`,
        http_error_message: 'Error',
    }, error_ctx));
}
export { throw_missing_argument as throw__missing_argument };
//# sourceMappingURL=src/throw_missing_argument.js.map