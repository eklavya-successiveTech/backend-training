use('NodePractise');

db.orders.aggregate([
  {
    $match: {
      orderDate: {
        $gte: new Date(new Date().setMonth(new Date().getMonth() - 6))
      }
    }
  },
  {
    $group: {
      _id: {
        year: { $year: "$orderDate" },
        month: { $month: "$orderDate" },
      },
      monthlyRevenue: { $sum: "$totalAmount" }
    }
  },
  {
    $sort: {
      "_id.year": -1,
      "_id.month": -1
    }
  }
])
