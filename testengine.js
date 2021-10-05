db.students.insertMany([
    {
        s_id: 101,
        s_name: 'John',
        s_details: {
            s_branch: 'CSE',
            s_year: 2019,
            s_sem: 5
        }
    },
    {
        s_id: 102,
        s_name: 'Sam',
        s_details: {
            s_branch: 'CSE',
            s_year: 2020,
            s_sem: 3
        }
    },
    {
        s_id: 103,
        s_name: 'Max',
        s_details: {
            s_branch: 'ECE',
            s_year: 2019,
            s_sem: 5
        }
    },
    {
        s_id: 104,
        s_name: 'Heli',
        s_details: {
            s_branch: 'ME',
            s_year: 2019,
            s_sem: 5
        }
    },
    {
        s_id: 105,
        s_name: 'Diana',
        s_details: {
            s_branch: 'IT',
            s_year: 2020,
            s_sem: 3
        }
    }
])

db.teachers.insertMany([
    {
        t_id: 201,
        t_name: 'Viral',
        t_branch: 'CSE'
    },
    {
        t_id: 202,
        t_name: 'Amit',
        t_branch: 'ECE'
    },
    {
        t_id: 203,
        t_name: 'Anuj',
        t_branch: 'ME'
    },
    {
        t_id: 204,
        t_name: 'Savita',
        t_branch: 'CSE'
    },
    {
        t_id: 205,
        t_name: 'Parul',
        t_branch: 'IT'
    }
])

db.tests.insertMany([
    {
        test_id: 't_101',
        s_details: {
            t_id: 201,
            test_subject: "MongoDB",
            test_marks: 50,
            duration: 60,
            year: 3,
            sem: 5
        }
    },
    {
        test_id: 't_102',
        s_details: {
            t_id: 202,
            test_subject: "BEEE",
            test_marks: 50,
            duration: 60,
            year: 2,
            sem: 3
        }
    },
    {
        test_id: 't_103',
        s_details: {
            t_id: 203,
            test_subject: "BMC",
            test_marks: 50,
            duration: 60,
            year: 2,
            sem: 3
        }
    },
    {
        test_id: 't_104',
        s_details: {
            t_id: 205,
            test_subject: "CN",
            test_marks: 50,
            duration: 60,
            year: 2,
            sem: 3
        }
    }
])

db.questions.insertMany([
    {
        q_id: '1',
        test_id: 't_101',
        ques: [{
            q1: "Which of the following is correct explanation of MongoDB processes?",
            opt_1: " mongodump.exe can be used to import database backup dump",
            opt_2: "mongod.exe is the shell process and mongo.exe is the actual database process",
            opt_3: "mongo.exe is the shell process and mongod.exe is the actual database process",
            opt_4: "mongos.exe is the MongoDB server process needed to run database",
            ans: "opt_2"
        },
        {
            q2: "Which of the following methods can be used on a cursor object?",
            opt_1: "cursor.next()",
            opt_2: "cursor.hasNext()",
            opt_3: "cursor.forEach()",
            opt_4: "All of the above",
            ans: "opt_4"
        },
        {
            q3: "The following aggregation option is used to specify the specific fields that needs to be passed to the next stage of the aggregation pipeline:",
            opt_1: " $match",
            opt_2: "$project",
            opt_3: "$group",
            opt_4: "$aggregate",
            ans: "opt_2"
        },
        ]
    },
    {
        q_id: '2',
        test_id: 't_102',
        ques: [{
            q1: "An instrument which detects electric current is known as",
            opt_1: "Voltmeter",
            opt_2: "Rheostat",
            opt_3: "Wattmetre",
            opt_4: "Galvanometer",
            ans: "opt_4"
        },
        {
            q2: " Electric pressure is also called",
            opt_1: "Resistance",
            opt_2: "Power",
            opt_3: "Voltage",
            opt_4: "Energy",
            ans: "opt_3"
        },
        {
            q3: "For a coil having a magnetic circuit of constant reluctance, if the flux increases, what happens to the current?",
            opt_1: " Increases",
            opt_2: "Decreases",
            opt_3: "Remains constant",
            opt_4: "Becomes zero",
            ans: "opt_1"
        },
        ]
    }
])

db.answers.insertMany([
    {
        t_id: 't_101',
        s_id: 101,
        sol: [
        'opt_1' ,
        'opt_3',
'opt_2' 
        ]
    },
    {
        t_id: 't_101',
        s_id: 102,
        sol: [
            { q1: 'opt_3' },
            { q2: 'opt_4' },
            { q3: 'opt_1' }
        ]
    },
    {
        t_id: 't_102',
        s_id: 103,
        sol: [
            { q1: 'opt_4' },
            { q2: 'opt_3' },
            { q3: 'opt_1' }
        ]
    },
    {
        t_id: 't_102',
        s_id: 104,
        sol: [
            { q1: 'opt_4' },
            { q2: 'opt_2' },
            { q3: 'opt_1' }
        ]
    },
    {
        t_id: 't_102',
        s_id: 102,
        sol: [
            { q1: 'opt_1' },
            { q2: 'opt_2' },
            { q3: 'opt_1' }
        ]
    }
])

db.marks.insertMany([
    {
        t_id: 't_101',
        s_id: 101,
        marks: 1
    },
    {
        t_id: 't_101',
        s_id: 102,
        marks: 2
    },
    {
        t_id: 't_102',
        s_id: 103,
        marks: 3
    },
    {
        t_id: 't_102',
        s_id: 104,
        marks: 2
    },
    {
        t_id: 't_102',
        s_id: 102,
        marks: 1
    }
])

db.answers.aggregate([{
    $lookup:
        { from: "students", localField: "s_id", foreignField: "s_id", as: "output" }
},
{
    $lookup:
        { from: "questions", localField: "t_id", foreignField: "test_id", as: "ansoutput" }
},
    {
        $unwind: "$sol"
    },
    
{
    $project:{
        sol: 1,
        xyz:"$ansoutput.ques.ans",
        x: { $slice: ["$xyz",0, 1] },
        y: { $arrayElemAt: ["$x", 0] },
        custom: {
            $cond: { if: { $eq: ["$sol", "$x"] }, then: "ok", else: "notok" }
        }  
        
    }
}]).pretty()

"custom": {
    $cond: { if: { $eq: ["$ans", { ansoutput: "$ques.ans" }] }, then: "ok",else: "notok" }
},

db.answers.aggregate([{
    $lookup:
        { from: "students", localField: "s_id", foreignField: "s_id", as: "output" }
},
{
    $lookup:
        { from: "questions", localField: "t_id", foreignField: "test_id", as: "ansoutput" }
},
{
    $unwind: "$ansoutput"
},

{
    $project: {
        "custom": {
            $cond: { if: { $eq: ["$ans", "$ansoutput.ques.ans"] }, then: "ok", else: "notok" }
        },
        ansoutput: 1,
        
    }
}]).pretty()