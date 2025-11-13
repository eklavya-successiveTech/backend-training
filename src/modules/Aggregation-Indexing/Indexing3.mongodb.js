use('NodePractise');

db.orders.find(
  { status: "Delivered", orderDate: { $gte: ISODate("2024-01-01") } }
).explain("executionStats")
