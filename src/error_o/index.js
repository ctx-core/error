import { assign } from '@ctx-core/object'
import { console__error } from '../console__error/index.js'
/** @typedef {import('../_types').error_o_T}error_o_T */
/**
 * error_o_T factory function
 * @param {string}[message]
 * @param {error_o_T}[error_o]
 * @returns {Error&error_o_T}
 */
export function error_o_(message, error_o) {
	const error = new Error(message)
	return assign(error, error_o)
}
/**
 * Throws an error_o
 * @param {string}[message]
 * @param {error_o_T}[error_o]
 * @throws Decorate & throw error given by the arguments.
 */
export function error_o__throw(message, error_o) {
	throw error_o_(message, error_o)
}
export {
	error_o__throw as error__throw,
}
