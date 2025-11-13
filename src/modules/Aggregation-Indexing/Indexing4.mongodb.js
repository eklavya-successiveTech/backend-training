use("NodePractise")
db.orders.find(
  { $text: { $search: "Laptop" } }
).explain("executionStats")
