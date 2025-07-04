const asyncHandler = (requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}

export {asyncHandler}


/*
const asyncHandler = (function) => {()=>{}}
const asyncHandler = (function) => ()=>{}
const asyncHandler = (function) => async ()=>{}
*/

/*
This utility function wraps an asynchronous route handler to catch errors and pass them to the next middleware.
It ensures that any errors thrown in the async function are handled gracefully, preventing the server from
*/

/*
const asyncHandler = (fn)=> async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: error.message || 'Internal Server Error',
        });
    }
}
*/