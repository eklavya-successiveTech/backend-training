# TypeScript

TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript.

## Key Features of TypeScript

1. **Static typing**
2. **Enhanced tooling**
3. **Superset of JavaScript**
4. **Transpilation of JavaScript**
5. **Improved code maintainability and scalability**

# Types in TypeScript

TypeScript extends JavaScript by adding a static type system, allowing developers to define the shapes of data and enforce type safety during development. This helps catch errors early and improves code maintainability.

## Type Categories

### 1. Core Types
- `number`
- `boolean`
- `string`
- `null`
- `undefined`
- `symbol`

### 2. Object Types
- Interfaces
- Type aliases
- Classes
- Arrays
- Tuples

### 3. Special Types
- `any`
- `unknown`
- `void`
- `enum`

# Variables in TypeScript

Variables are named containers used to store data values. TypeScript enhances variables with optional type annotations, providing static type checking.

## Variable Naming Conventions

1. Can contain alphabets, numeric digits, and the underscore (_) and dollar sign ($)
2. Cannot begin with a digit
3. Cannot contain spaces or special characters other than _ and $
4. Cannot be a reserved keyword (e.g., var, let, const, if, for)

# Classes in TypeScript

Classes are the blueprint for creating objects, encapsulating both data (properties) and behavior (methods) into a single, organized unit.

## Key Aspects of Classes

1. **Type Annotations**: They can have type annotations to ensure type safety
2. **Methods**: These define the actions or functions that an object can perform
3. **Access Modifiers**:
   - `public`: Accessible from anywhere
   - `private`: Accessible only within the class where they are declared
   - `protected`: Accessible within the class and its subclasses

## Additional Class Features

- **Inheritance**: Classes can extend other classes using the `extends` keyword, allowing them to inherit properties and methods from a parent class
- **Abstraction**: They can contain abstract methods (methods without implementation) that must be implemented by concrete subclasses

# Interfaces in TypeScript

Interfaces serve as powerful contracts that define the shape and structure of objects within your code. They are a fundamental tool for ensuring type safety and building robust applications by specifying what properties and methods an object should have, along with their respective types.

## Key Characteristics

- Ensure consistency and help prevent errors during development
- Solely focus on the contract and structure of objects
- Do not contain any implementation logic, initialization values, or actual function code