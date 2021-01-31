export interface error_ctx_type {
	type?:string
	key?:string
	http_error_message?:string
	http_status?:number
	error_message?:string
	stack?:string
	upstream_error?:error_ctx_type
	data?:object
}
