use('NodePractise');

db.orders.aggregate([
    {
        $group:{
            _id:"$status",
            totalOrders: { $count: {}}
        }
    }
])