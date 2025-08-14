use('NodePractise');

db.orders.find({ customerName: "Refined Bronze Bike" }).explain("executionStats")
