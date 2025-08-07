use('NodePractise');

db.orders.aggregate([
    {
        $group:{
            _id: "$customerName",
            averageTotal: {$avg: "$totalAmount"}
        }
    }
])