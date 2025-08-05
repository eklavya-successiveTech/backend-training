# MongoDB Introduction

MongoDB is a NoSQL document-oriented database that stores data in flexible, JSON-like documents called BSON (Binary JSON). It is designed for scalability, high performance, and ease of development.

## Key Features of MongoDB

1. **Document-based storage**
2. **Schema flexibility**
3. **Horizontal scalability**
4. **High performance**
5. **Rich query language**
6. **Built-in replication and sharding**

# ORM (Object Relational Mapping)

ORM is a programming technique that allows developers to work with databases using object-oriented programming concepts instead of writing raw SQL queries. It creates a bridge between object-oriented code and relational databases.

## Benefits of ORM

- **Abstraction**: Hides complex database operations
- **Productivity**: Faster development with less boilerplate code
- **Maintainability**: Easier to maintain and modify code
- **Database independence**: Can switch between different databases

# Mongoose

Mongoose is an Object Document Mapping (ODM) library for MongoDB and Node.js. It provides a schema-based solution to model application data and includes built-in type casting, validation, query building, and business logic hooks.

## Key Features of Mongoose

1. **Schema definition**
2. **Model creation**
3. **Data validation**
4. **Middleware support**
5. **Query building**
6. **Connection management**

## Core Concepts

- **Schema**: Defines the structure of documents
- **Model**: Compiled version of schema, represents a collection
- **Document**: Instance of a model, represents a single record

# RDBMS vs NoSQL Databases

## RDBMS (Relational Database Management System)

### Characteristics
- **Structured data**: Fixed schema with tables, rows, and columns
- **ACID properties**: Atomicity, Consistency, Isolation, Durability
- **SQL queries**: Uses Structured Query Language
- **Vertical scaling**: Scale up by adding more power to existing machine

### Examples
- MySQL, PostgreSQL, Oracle, SQL Server

## NoSQL Databases

### Characteristics
- **Flexible schema**: Dynamic or schema-less structure
- **BASE properties**: Basically Available, Soft state, Eventual consistency
- **Various query languages**: Different for each database type
- **Horizontal scaling**: Scale out by adding more servers

### Types of NoSQL Databases
1. **Document-based**: MongoDB, CouchDB
2. **Key-value**: Redis, DynamoDB
3. **Column-family**: Cassandra, HBase
4. **Graph**: Neo4j, Amazon Neptune

## When to Use Which?

### Use RDBMS When:
- Complex relationships between data
- ACID compliance is critical
- Structured data with fixed schema
- Complex queries and transactions

### Use NoSQL When:
- Rapid development and prototyping
- Handling large volumes of unstructured data
- Need for horizontal scaling
- Flexible schema requirements