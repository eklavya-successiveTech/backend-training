use('NodePractise')
db.orders.createIndex({ customerName: 1 })
db.orders.find({ customerName: "John Doe" }).explain("executionStats")
