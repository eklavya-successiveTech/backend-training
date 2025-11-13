use('NodePractise');

db.orders.aggregate([
    {
        $group:{
            _id: "$customerName",
            totalSpent: {$sum: "$totalAmount"}
        }

    },
    {
        $sort: { totalSpent: -1}
    },
    {
        $limit: 3
    },
    {
        $project:{
            _id:0,
            customerName: "$_id",
            totalSpent: "$totalSpent"
        }
    }
])