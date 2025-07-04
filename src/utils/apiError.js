class apiError extends Error{
    constructor(
        statusCode, // HTTP status code
        message = 'Something went wrong',
        error = [],
        stack = "",
    ){
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;
        this.errors = errors;

        if (stack) {
            this.stack = stack; // Use the provided stack trace if available
        } else {
            Error.captureStackTrace(this, this.constructor); // Capture the stack trace
        } // Capture the stack trace for debugging

    }
}

export {apiError};