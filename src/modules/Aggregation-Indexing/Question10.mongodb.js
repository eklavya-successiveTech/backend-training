use('NodePractise')

db.orders.aggregate([
    {
        $unwind: {
          path: "$items",
        }
    },
    {
        $group: {
          _id: "$items.productName",
          totalQuantity: {$sum: "$items.quantity"},
          totalRevenue: {$sum: { $multiply: [ "$items.price", "$items.quantity" ] }}
        }
    }
])