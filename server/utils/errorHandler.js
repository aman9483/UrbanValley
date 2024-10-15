function errorHandler(err, req, res, next) {
    // Log the error details for internal tracking
    console.error(err.stack);
  
    // Set the response status code
    res.status(err.status || 500);
  
    // Send a JSON response with the error message
    res.json({
      success: false,
      message: err.message,
      // Include the stack trace in development mode
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    });
  }
  