# Errors & Error Handling in Express.js

## What is Error Handling?

Error handling ensures that when something goes wrong in your application, the error is caught, processed, and appropriately communicated to the user without causing the app to crash.

This may involve:
- Validation errors
- Runtime errors
- Database connection issues
- Other unexpected exceptions

Express.js handles errors through middleware functions.

## Error-handling Middleware

Error-handling middleware is a function in Express that takes in **4 arguments**:
1. `error` - The error object
2. `request` - The request object
3. `response` - The response object  
4. `nextFunction` - The next function

It can be placed at any point in the request-response cycle but is often placed **after route definitions** to catch errors generated during request processing.

## Reasons for Error Handling in Express.js

- **Prevent application crashes** - Keep your app running even when errors occur
- **Provide meaningful error messages** - Help users understand what went wrong
- **Improve debugging** - Make it easier to identify and fix issues
- **Comply with standards and regulations** - Meet industry requirements

## HTTP Status Codes

HTTP status codes are used to indicate the type of error that occurred. Error codes are numeric or alphanumeric codes that indicate an error has occurred and, when possible, the reason for the error. These help users and developers understand and address issues effectively.

### Status Code Categories

#### 2xx (Successful)
Indicate that the request was successfully received, understood, and accepted.

#### 3xx (Redirection)
Require further action to complete the request.

#### 4xx (Client Error)
Indicate that the client sent a request that the server could not process.

#### 5xx (Server Error)
Indicate that the server encountered an error while processing the request.

### Common Error Status Codes

| Code | Name | Description |
|------|------|-------------|
| **400** | Bad Request | The request is malformed or invalid |
| **401** | Unauthorized | Authentication is required |
| **403** | Forbidden | Access is denied |
| **404** | Not Found | The requested resource doesn't exist |
| **500** | Internal Server Error | Generic server error |
| **502** | Bad Gateway | Invalid response from upstream server |
| **503** | Service Unavailable | Server is temporarily unavailable |