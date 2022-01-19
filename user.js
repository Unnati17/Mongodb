db.userReview.insertMany([
    {
        email:"ram15@gmail.com",
        details:[
            {
                m_id: 101,
                review:"That movie was good",
                watch_count:3,
                rating:8.8
            }
        ]
    },
    {
        email: "mohann20@gmail.com",
        details: [
            {
                m_id: 102,
                review: "That movie was really awesome",
                watch_count: 2,
                rating: 8.8
            }
        ]
    },
    {
        email: "rohit17@gmail.com",
        details: [
            {
                m_id: 103,
                review: "That movie was fantastic",
                watch_count: 4,
                rating: 7.9
            }
        ]
    },
    {
        email: "devi44@gmail.com",
        details: [
            {
                m_id: 101,
                review: "That movie was good",
                watch_count: 3,
                rating: 8.8
            },
            {
                m_id: 102,
                review: "good",
                watch_count: 2,
                rating: 7.6

            }
        ]
    },
    {
        email: "pooja56@gmail.com",
        details: [
            {
                m_id: 106,
                review: "awesome",
                watch_count: 4,
                rating: 8.9
            },
            {
                m_id: 102,
                review: "good",
                watch_count: 2,
                rating: 7.6

            }
        ]
    },
    {
        email: "shyam88@gmail.com",
        details: [
            {
                m_id: 104,
                review: "Must watch",
                watch_count: 4,
                rating: 7.9
            }
        ]
    },
    {
        email: "reema20@gmail.com",
        details: [
            {
                m_id: 106,
                review: "Great best",
                watch_count: 2,
                rating: 8.9
            }
        ]
    },
])

db.userReview.insertMany([
    {
        email: "uno17@gmail.com",
        details: [
            {
                m_id: 108,
                review: "awesome movie",
                watch_count: 5,
                rating: 8.9
            }
        ]
    },
    {
        email: "shiv25@gmail.com",
        details: [
            {
                m_id: 108,
                review: "bad movie",
                watch_count: 1,
                rating: 7.4
            }
        ]
    }])

db.users.insert({ id: 101, name: "Ram", interest: ["cricket", "football", "web development"] })


db.questions.insertMany([
    { q_id: 2, 
        ques: 
        { 
            user_id: 102, 
            text: "Who is won a medal in oylmpics from Indian in badminton?", 
            interest: ["badminton", "sports"] 
        } 
    },
    {
        q_id: 3,
        ques:
        {
            user_id: 103,
            text: "Mann Bharya is sung by which singer?",
            interest: ["songs", "singers"]
        }
    },
    {
        q_id: 4,
        ques:
        {
            user_id: 104,
            text: "Sushi is dish of which country?",
            interest: ["cooking", "GK"]
        }
    },
    {
        q_id: 5,
        ques:
        {
            user_id: 105,
            text: "Body trainging or HIIT which one is better?",
            interest: ["exercise"]
        }
    }

])

db.answers.insertMany([
    { a_id: 1002, 
        ans: 
        [
            { q_id: 2, 
                u_id: 101, 
                text: "PV Sindhu", 
                comments: ["Right ans", "Proud of India"], 
                likes: 100 
            }, 
            { q_id: 2, 
                u_id: 103, 
                text: "None", 
                comments: ["Absolutely wrong", "Check ur facts before answering"], 
                likes: 0
            }
        ] 
    },
    {
        a_id: 1003,
        ans:
            [
                {
                    q_id: 3,
                    u_id: 101,
                    text: "B Praak",
                    comments: ["Thanks","Great singer"],
                    likes: 50
                },
                {
                    q_id: 3,
                    u_id: 105,
                    text: "B Praak",
                    comments: ["No good", "Loved the song"],
                    likes: 10
                }
            ]
    },
    {
        a_id: 1004,
        ans:
            [
                {
                    q_id: 4,
                    u_id: 102,
                    text: "Japan",
                    comments: ["Yes right", "I love the dish"],
                    likes: 90
                },
                {
                    q_id: 4,
                    u_id: 103,
                    text: "China",
                    comments: ["Wrong anwser", "Fan of the dish"],
                    likes: 67
                }
            ]
    },
    {
        a_id: 1005,
        ans:
            [
                {
                    q_id: 5,
                    u_id: 103,
                    text: "HIIT is the best",
                    comments: ["Ok thanks", "Didn't agree"],
                    likes: 15
                },
                {
                    q_id: 101,
                    u_id: 105,
                    text: "Body training must be done",
                    comments: ["I'll consult my trainer", "Great"],
                    likes: 30
                }
            ]
    }
])

db.createCollection("Newmovies",{
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["title","desc","genre","rating","reviews"],
            properties: {
                title: {
                    bsonType: "string",
                    description: "Must be a string and it is required"
                },
                desc: {
                    bsonType: "string",
                    description: "Must be a string and it is required"
                },
                genre: {
                    bsonType: "array",
                    description: "Must be an array and it is required",
                    items: {
                        bsonType: "string",
                        description: "Must be a string"
                    }
                },
                rating: {
                    bsonType: "number",
                    min: 1,
                    max: 10,
                    description: "Must be an number and it is required"

                },
                reviews: {
                    bsonType: "array",
                    description: "Must be an array and it is required",
                    items: {
                        bsonType: "object",
                        properties: {
                            user: {
                                bsonType: "objectId",
                                description: "Must be an object refers to user"
                            },
                            text: {
                                bsonType: "string",
                                description: "Must be a string and it is required"

                            }
                        }
                    }
                }
            }
        }
    }
})

db.runCommand({
    collmod: "Newmovies",
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["title", "desc", "genre", "rating", "reviews"],
            properties: {
                title: {
                    bsonType: "string",
                    description: "Must be a string and it is required"
                },
                desc: {
                    bsonType: "string",
                    description: "Must be a string and it is required"
                },
                genre: {
                    bsonType: "array",
                    description: "Must be an array and it is required",
                    items: {
                        bsonType: "string",
                        description: "Must be a string"
                    }
                },
                rating: {
                    bsonType: "number",
                    min: 1,
                    max: 10,
                    description: "Must be an number and it is required"

                },
                reviews: {
                    bsonType: "array",
                    description: "Must be an array and it is required",
                    items: {
                        bsonType: "object",
                        properties: {
                            user: {
                                bsonType: "objectId",
                                description: "Must be an object refers to user"
                            },
                            text: {
                                bsonType: "string",
                                description: "Must be a string and it is required"

                            }
                        }
                    }
                }
            }
        }
    }
})


db.createCollection("projects", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["p_id", "p_name", "date", "desc"],
            properties: {
                p_id: {
                    bsonType: "string",
                    description: "Must be a string and it is required"
                },
                p_name: {
                    bsonType: "string",
                    description: "Must be a string and it is required"
                },
                date: {
                    bsonType: "date",
                    description: "Must be a date and it is required",
                },
                desc: {
                    bsonType: "string",
                    description: "Must be an string and it is required"

                }
            }
        }
    }
})

db.createCollection("employees", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["e_id", "e_name", "dept", "salary"],
            properties: {
                e_id: {
                    bsonType: "string",
                    description: "Must be a string and it is required"
                },
                e_name: {
                    bsonType: "string",
                    description: "Must be a string and it is required"
                },
                dept: {
                    bsonType: "string",
                    description: "Must be a string and it is required",
                },
                salary: {
                    bsonType: "number",
                    description: "Must be an number and it is required"

                }
            }
        }
    }
})

db.createCollection("task", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["t_id", "p_id", "e_id", "start_date"],
            properties: {
                t_id: {
                    bsonType: "string",
                    description: "Must be a string and it is required"
                },
                p_id: {
                    bsonType: "string",
                    description: "Must be a string and it is required"
                },
                e_id: {
                    bsonType: "string",
                    description: "Must be a string and it is required",
                },
                start_date: {
                    bsonType: "date",
                    description: "Must be a date and it is required"

                }
            }
        }
    }
})

db.createCollection("assign", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["t_id", "progress"],
            properties: {
                t_id: {
                    bsonType: "string",
                    description: "Must be a string and it is required"
                },
                progress: {
                    bsonType: "array",
                    description: "Must be an array and it is required",
                    items: {
                        bsonType: "object",
                        properties: {
                            e_id: {
                                bsonType: "string",
                                description: "Must be an string refering to employee"
                            },
                            status: {
                                bsonType: "string",
                                description: "Must be a string and it is required"
                            },
                            bug_count: {
                                bsonType: "number",
                                description: "Must be a number and it is required"

                            },
                            bug_list: {
                                bsonType: "array",
                                description: "Must be a array and it is required",
                                items: {
                                    bsonType: "object",
                                    properties: {
                                        bug_name: {
                                            bsonType: "string",
                                            description: "Must be an string refering to employee"
                                        },
                                        bug_desc: {
                                            bsonType: "string",
                                            description: "Must be a string and it is required"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})