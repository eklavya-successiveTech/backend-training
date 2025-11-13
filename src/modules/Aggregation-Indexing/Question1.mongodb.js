use('NodePractise');

db.orders.aggregate([
    {
        $group:{
            _id: null,
            totalRevenue: {$sum: "$totalAmount"}
        }
    }
])