import { assign } from '@ctx-core/object';
import { throw_error } from './throw_error';
/**
 * Throws a Bad Credentials error (HTTP 401)
 * @example
 * throw__bad_credentials(ctx) // Unauthorized
 */
export function throw_bad_credentials(...error_ctx_a) {
    throw_error(assign({
        type: 'bad_credentials',
        http_status: 401,
        error_message: 'Unauthorized',
        http_error_message: 'Unauthorized',
    }, ...error_ctx_a));
}
export { throw_bad_credentials as throw__bad_credentials };
//# sourceMappingURL=src/throw_bad_credentials.js.map