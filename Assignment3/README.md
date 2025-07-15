# Middleware Documentation

## What is Middleware?

Middleware is software that acts as a bridge between different applications, systems, or components, enabling them to communicate and share data. In web development, middleware functions are pieces of code that execute during the request-response cycle, sitting between the incoming request and the outgoing response.

## Key Characteristics

- **Intermediary Layer**: Acts as a go-between for different software components
- **Request Processing**: Intercepts and processes requests before they reach the final handler
- **Chainable**: Multiple middleware functions can be chained together
- **Reusable**: Can be applied across different routes or applications
- **Modular**: Promotes separation of concerns and code organization

## Common Use Cases

### Authentication and Authorization
- Verify user credentials
- Check user permissions
- Validate JWT tokens
- Session management

### Logging and Monitoring
- Request/response logging
- Performance monitoring
- Error tracking
- Analytics collection

### Security
- CORS handling
- Rate limiting
- Input validation
- XSS protection
- CSRF protection

### Data Processing
- Request body parsing
- Data transformation
- Compression
- Caching

## Framework-Specific Implementations

### Express.js (Node.js)

#### Basic Middleware Structure
```javascript
const middleware = (req, res, next) => {
  // Middleware logic here
  console.log('Request received:', req.method, req.url);
  next(); // Pass control to next middleware
};

app.use(middleware);
```

#### Common Express Middleware Examples

**Authentication Middleware:**
```javascript
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  
  if (!token) {
    return res.status(401).json({ error: 'Access denied' });
  }
  
  // Verify token logic here
  next();
};
```

**Logging Middleware:**
```javascript
const logger = (req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
};
```

**Error Handling Middleware:**
```javascript
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
};
```

### Django (Python)

#### Custom Middleware Class
```python
class CustomMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Code executed before the view
        response = self.get_response(request)
        # Code executed after the view
        return response

    def process_exception(self, request, exception):
        # Handle exceptions
        pass
```

#### Function-Based Middleware
```python
def simple_middleware(get_response):
    def middleware(request):
        # Pre-processing
        response = get_response(request)
        # Post-processing
        return response
    return middleware
```

### ASP.NET Core (C#)

#### Middleware Class
```csharp
public class CustomMiddleware
{
    private readonly RequestDelegate _next;

    public CustomMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        // Pre-processing logic
        await _next(context);
        // Post-processing logic
    }
}
```

#### Inline Middleware
```csharp
app.Use(async (context, next) =>
{
    // Pre-processing
    await next();
    // Post-processing
});
```

### Laravel (PHP)

#### Middleware Class
```php
<?php

namespace App\Http\Middleware;

use Closure;

class CustomMiddleware
{
    public function handle($request, Closure $next)
    {
        // Pre-processing logic
        
        $response = $next($request);
        
        // Post-processing logic
        
        return $response;
    }
}
```

## Best Practices

### Order Matters
- Authentication before authorization
- Logging early in the pipeline
- Error handling as the last middleware
- Security middleware near the beginning

### Performance Considerations
- Keep middleware lightweight
- Avoid blocking operations
- Use async/await where appropriate
- Cache frequently accessed data

### Error Handling
- Always handle errors gracefully
- Provide meaningful error messages
- Log errors for debugging
- Don't expose sensitive information

### Testing
- Write unit tests for middleware
- Test error scenarios
- Mock dependencies
- Test middleware order

## Advanced Patterns

### Conditional Middleware
```javascript
const conditionalMiddleware = (condition) => {
  return (req, res, next) => {
    if (condition(req)) {
      // Apply middleware logic
      console.log('Condition met');
    }
    next();
  };
};
```

### Middleware Factory
```javascript
const createRateLimiter = (maxRequests, windowMs) => {
  return (req, res, next) => {
    // Rate limiting logic using maxRequests and windowMs
    next();
  };
};

app.use('/api', createRateLimiter(100, 60000));
```

### Middleware Composition
```javascript
const compose = (...middlewares) => {
  return (req, res, next) => {
    let index = 0;
    
    const dispatch = () => {
      if (index >= middlewares.length) {
        return next();
      }
      
      const middleware = middlewares[index++];
      middleware(req, res, dispatch);
    };
    
    dispatch();
  };
};
```

## Common Middleware Libraries

### Express.js Ecosystem
- **cors**: Cross-Origin Resource Sharing
- **helmet**: Security headers
- **morgan**: HTTP request logger
- **body-parser**: Request body parsing
- **express-rate-limit**: Rate limiting
- **passport**: Authentication
- **multer**: File upload handling

### Installation Examples
```bash
npm install cors helmet morgan express-rate-limit
```

```javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

const app = express();

// Security middleware
app.use(helmet());

// CORS middleware
app.use(cors());

// Logging middleware
app.use(morgan('combined'));

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);
```

## Debugging Middleware

### Logging Strategies
```javascript
const debugMiddleware = (name) => {
  return (req, res, next) => {
    console.log(`[${name}] Processing request: ${req.method} ${req.url}`);
    next();
  };
};
```

### Timing Middleware
```javascript
const timingMiddleware = (req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`Request took ${duration}ms`);
  });
  
  next();
};
```

## Security Considerations

### Input Validation
- Validate all incoming data
- Sanitize user inputs
- Use parameterized queries
- Implement proper data types

### Authentication and Authorization
- Use secure session management
- Implement proper token validation
- Apply principle of least privilege
- Regular security audits

### Rate Limiting
- Implement per-user limits
- Use distributed rate limiting for scaling
- Configure appropriate time windows
- Handle rate limit exceeded gracefully

## Performance Optimization

### Caching Strategies
```javascript
const cache = new Map();

const cachingMiddleware = (req, res, next) => {
  const key = req.originalUrl;
  
  if (cache.has(key)) {
    return res.json(cache.get(key));
  }
  
  // Override res.json to cache the response
  const originalJson = res.json;
  res.json = function(data) {
    cache.set(key, data);
    return originalJson.call(this, data);
  };
  
  next();
};
```

### Compression
```javascript
const compression = require('compression');
app.use(compression());
```

## Error Handling Patterns

### Centralized Error Handling
```javascript
const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

// Usage
app.get('/api/users', asyncHandler(async (req, res) => {
  const users = await getUsersFromDatabase();
  res.json(users);
}));
```

### Custom Error Classes
```javascript
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

const errorHandler = (err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: err.message
    });
  }
  
  // Handle other errors
  res.status(500).json({
    error: 'Internal Server Error'
  });
};
```

## Testing Middleware

### Unit Testing Example
```javascript
const request = require('supertest');
const express = require('express');

describe('Authentication Middleware', () => {
  let app;
  
  beforeEach(() => {
    app = express();
    app.use(authenticateToken);
    app.get('/protected', (req, res) => {
      res.json({ message: 'Protected resource' });
    });
  });
  
  it('should reject requests without token', async () => {
    const response = await request(app)
      .get('/protected')
      .expect(401);
      
    expect(response.body.error).toBe('Access denied');
  });
  
  it('should allow requests with valid token', async () => {
    const response = await request(app)
      .get('/protected')
      .set('Authorization', 'Bearer valid-token')
      .expect(200);
      
    expect(response.body.message).toBe('Protected resource');
  });
});
```

