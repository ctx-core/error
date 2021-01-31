import type { error_ctx_type } from './error_ctx_type';
/**
 * Throws an error
 * @throws Decorate & throw error given by the arguments.
 */
export declare function throw_error(error_ctx_or_error_message: error_ctx_type | string): void;
export declare const throw__error: typeof throw_error;
