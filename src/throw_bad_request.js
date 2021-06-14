import { assign } from '@ctx-core/object';
import { throw_error } from './throw_error';
/**
 * Throws an bad_request error (HTTP 400)
 * @example
 * throw_bad_request(ctx) // Bad Request
 */
export function throw_bad_request(...error_ctx_a) {
    const base = {
        type: 'bad_request',
        http_status: 400,
        error_message: 'Bad Request',
        http_error_message: 'Bad Request',
    };
    throw_error(assign(base, ...error_ctx_a));
}
export { throw_bad_request as throw__bad_request };
//# sourceMappingURL=src/throw_bad_request.js.map