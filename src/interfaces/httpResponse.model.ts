export interface HttpResponse<T = any > extends HttpErrorResponse{
    data: T,
}

export interface HttpErrorResponse<T = any>{
    statusCode: number,
    message: string,
    error?: string,
    code?: string
}