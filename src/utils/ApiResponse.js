class ApiResponse{
    constructor(statusCode,data , message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400

        /*status code
        informational responses (100-199) 
        successful responses( 200-299)
        redirection response(300-399) 
        above this error   */
    }
}