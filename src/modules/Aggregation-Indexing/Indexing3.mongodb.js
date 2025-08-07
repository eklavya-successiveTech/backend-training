use('NodePractise');

db.orders.find({
  status: "Delivered",
  orderDate: { $gte: ISODate("2025-01-01") }
}).explain("executionStats")

db.orders.createIndex({ status: 1, orderDate: -1 })

db.orders.find({
  status: "Delivered",
  orderDate: { $gte: ISODate("2025-01-01") }
}).explain("executionStats")
