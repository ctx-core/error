export interface base_error_ctx_type {
	type?:string
	key?:string
	http_error_message?:string
	http_status?:number
	error_message?:string
	stack?:string
	upstream_error?:error_ctx_type
	data?:object
}
type keys_base_error_ctx_type = keyof base_error_ctx_type
export type error_ctx_type = base_error_ctx_type
	&{
	// [key in keyof keys_base_error_ctx_type]:base_error_ctx_type[keyof base_error_ctx_type]
	[key in keyof keys_base_error_ctx_type]:string|number|error_ctx_type
}
