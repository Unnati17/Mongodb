db.students.aggregate([
    {
        $group:{
            _id:{
                class:"$class"
            },
            allSubjects:{
                $push:"$subjects"
            }
        }
    }
]).pretty()

db.students.aggregate([
    {
        $group: {
            _id: {
                class: "$class"
            },
            allSubjects: {
                $push: "$marks.theory"
            }
        }
    }

]).pretty()

db.students.aggregate([
    {
        $unwind:"$subjects"
    },
    {
        $group: {
            _id: {
                class: "$class"
            },
            allSubjects: {
                $push: "$subjects"
            }
        }
    }

]).pretty()

//for unique values
db.students.aggregate([
    {
        $unwind: "$subjects"
    },
    {
        $group: {
            _id: {
                class: "$class"
            },
            allSubjects: {
                $addToSet: "$subjects"
            }
        }
    }
]).pretty()

db.students.aggregate([
    {
        $project: {
            _id:0,
            examScore: {
                $slice: ["$marks",2]
            }
        }
    }
]).pretty()

db.students.aggregate([
    {
        $project: {
            _id: 0,
            name:1,
            subject:{
                $slice:["$subjects",1]
            },
            examScore: {
                $slice: ["$marks", 1]
            }
        }
    }
]).pretty()

db.students.aggregate([
    {
        $project: {
            _id: 0,
            name: 1,
            subject: {
                $slice: ["$subjects", 2, 1]
            },
            examScore: {
                $slice: ["$marks", 2, 1]
            }
        }
    }
]).pretty()

db.students.aggregate([
    {
        $project: {
            _id: 0,
            name: 1,
            subject: {
                $slice: ["$subjects", -2]
            },
            examScore: {
                $slice: ["$marks", -2]
            }
        }
    }
]).pretty()

//Array length
db.students.aggregate([
    {
        $project: {
            _id: 0,
            name: 1,
            len:{
                $size:"$subjects"
            }
        }
    }
]).pretty()

//Filter
db.students.aggregate([
    {
        $project: {
            _id: 0,
            examScore:{
                $filter:{
                    input:"$marks",
                    as:"x",
                    cond:{
                        $gt:["$$x.theory",50]
                    }
                }
            }
        }
    }
]).pretty()

db.students.aggregate([
    {
        $unwind: "$marks"
    },
    {
        $project:
        {
            _id:1,name:1,rollno:1,score: "$marks.theory"
        }
    },
    {
        $sort: {
            score:-1
        }
    },
    {
        $group:{
            _id: "$_id",name:{$first:"$name"},maxScore:{$max:"$score"}
        }
    },
    {
        $sort:
        {
            maxScore:-1
        }
    }
]).pretty()

db.persons.aggregate([
    {
        $sort:{"dob.age":-1}
    }
]).pretty()


