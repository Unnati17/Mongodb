var mapFunc=function(){
    emit(this.details.c_id,this.details.qty);
};

var reduceFunc=function(key,value){
    return Array.sum(value);
};

db.orders.mapReduce(
    mapFunc,
    reduceFunc,
    {out:"output_mr"});

db.orders.aggregate([

]
)


var mapFunc = function () {
    for (var i = 0; i < this.ans.length; i++) {
        var key = this.ans[i].q_id;
        var value = {
            count: 1, likes: this.ans[i].likes
        };
        emit(key, value);
    }
}

var reduceFunc = function (key, value) {
    reducedVal = {
        count: 0,
        likes: 0
    };
    for (var i = 0; i < value.length; i++) {
        reducedVal.count += value[i].count;
        reducedVal.likes += value[i].likes;
    }
    return reducedVal;
}

var finalizeFunc = function (key, reducedVal) {
    reducedVal.avg = reducedVal.likes / reducedVal.count;
    return reducedVal;
}

db.answers.mapReduce(
    mapFunc,
    reduceFunc,
    {
        out: "output",
        finalize: finalizeFunc
    }
)

db.answers.aggregate([
    {$unwind:"$ans"},
    { $group: { _id: "$ans.q_id", count: { $sum: 1}, likes: { $sum: "$ans.likes" } }},
    {$project:{
        _id:1,
        count:1,
        likes:1,
        avg: { $divide: ["$likes", "$count"] }
    }
    },
    { $out: "output_mr" }
])
