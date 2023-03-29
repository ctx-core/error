export interface error_o_T extends Error {
	data?:any
	http__message?:string
	http__status?:number
	url?:string
}
