use("NodePractise");

db.orders.aggregate([
    {
        $group:{
            _id:"$customerName",
            totalOrders: {$sum:1}
        }
    },
    {
        $match: {
          totalOrders: {$gt:2}
        }
    },
    {
        $project: {
          _id: 0,
          customerName: "$_id",
          totalOrders:1
        }
    }
])