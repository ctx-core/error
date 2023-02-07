export interface error_o_T {
	data?:object;
	error_message?:string;
	http_error_message?:string;
	http_status?:number;
	key?:string;
	stack?:string;
	type?:string;
	upstream_error?:error_o_T;
	url?:string
}
export type error_ctx_I = error_o_T
