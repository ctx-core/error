export interface error_ctx_I {
	data?:object;
	error_message?:string;
	http_error_message?:string;
	http_status?:number;
	key?:string;
	stack?:string;
	type?:string;
	upstream_error?:error_ctx_I;
	url?:string
}
