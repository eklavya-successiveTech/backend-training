# Backend Training Project

This project demonstrates basic Node.js concepts including module creation, command-line input handling, and file operations.

## Prerequisites

- Ubuntu/Debian-based Linux system
- Internet connection for package downloads

## Setup Instructions

### 1. Install Node.js LTS Version

Follow these steps to install the stable LTS version of Node.js:

#### Update Package Lists
```bash
sudo apt update
```

#### Install Required Dependencies
```bash
sudo apt install curl
```

#### Add NodeSource Repository
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
```

#### Install Node.js and npm
```bash
sudo apt install nodejs
```

#### Verify Installation
```bash
node -v
npm -v
```

You should see version numbers displayed for both Node.js and npm.

### 2. Project Setup

#### Install Global Dependencies
```bash
npm install -g nodemon
```

#### Install Project Dependencies
```bash
npm init -y
npm install lodash
```

## Usage

### Running the Application

1. **Using Node.js directly:**
   ```bash
   node index.js <operation> <number1> <number2>
   ```

2. **Using nodemon for development:**
   ```bash
   nodemon index.js <operation> <number1> <number2>
   ```

### Available Operations

- `add` - Addition
- `sub` - Subtraction  
- `mult` - Multiplication
- `div` - Division

### Examples

```bash
node index.js add 10 5
node index.js sub 20 8
node index.js mult 6 7
node index.js div 15 3
```

## Features

- **Modular Architecture**: Mathematical operations are organized in separate modules
- **Command-line Interface**: Accept operations and numbers as command-line arguments
- **CSV Output**: Results are automatically saved to a CSV file
- **Error Handling**: Proper validation for division by zero and invalid inputs
- **Lodash Integration**: Utilizes lodash library for mathematical operations

## Files Description

- **index.js**: Main application file that handles command-line input and coordinates operations
- **lib/math.js**: Contains all mathematical operation functions
- **different-architecture.md**: Explains various software architecture patterns
- **client-server.md**: Detailed explanation of client-server architecture
- **results.csv**: Generated file containing calculation results

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request
