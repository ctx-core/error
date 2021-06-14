import { assign } from '@ctx-core/object';
import { throw_error } from './throw_error';
/**
 * Throws a bad_gateway error (HTTP 502)
 * @example
 * throw__bad_gateway(ctx) // Bad Gateway
 */
export function throw_bad_gateway(...error_ctx_a) {
    throw_error(assign({
        type: 'bad_gateway',
        http_status: 502,
        error_message: 'Bad Gateway',
        http_error_message: 'Bad Gateway',
    }, ...error_ctx_a));
}
export { throw_bad_gateway as throw__bad_gateway };
//# sourceMappingURL=src/throw_bad_gateway.js.map