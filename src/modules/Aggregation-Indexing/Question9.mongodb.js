use("NodePractise")

db.orders.aggregate([
    {
        $match: {
           status: "Delivered"
        }
    },
    {
        $group: {
          _id: null,
          revenue: {$sum:"$totalAmount"}
        }
    },
    {
        $project: {
          _id:0,
          totalRevenue: "$revenue"
        }
    }
])