use('NodePractise');

db.orders.aggregate([
    {
        $unwind: {
          path: "$items",
        }
    },
    {
        $group: {
          _id: "$items.productName",
          quantity: {$sum: "$items.quantity"}

        }
    },
    {
        $match: {
          quantity: {$gt:10}
        }
    }
])