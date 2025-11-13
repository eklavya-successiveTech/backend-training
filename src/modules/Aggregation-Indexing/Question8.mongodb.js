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
        }
    },
    {
        $project: {
          _id: 0,
          productName: "$_id",
        }
    }
])