export interface error_o_T {
	data?:any
	http__message?:string
	http__status?:number
	url?:string
}
export type argument__error_o_T = error_o_T&Partial<Error>
export interface error_o_error_T extends Error, error_o_T {}
