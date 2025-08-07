use("NodePractise")

db.orders.createIndex({"items.productName": "text"})

db.orders.find({ $text: { $search: "Refined Rubber Car" } })

