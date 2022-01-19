db.movies.aggregate([
    {
        $project: {
            _id: 0,
            StarCast: {
                $concat: [
                    { $toUpper: { $substrCP: { $each: ["$decsription.star", 0, 1] } } },
                    {
                        $substrCP: [
                            "$description.star",
                            1,
                            { $subtract: [{ $strLenCP: { $each: ["$decsription.star"] }, 1 }] }
                        ]
                    }
                ]
            }
        }
    },
]).pretty()

db.userReview.aggregate([
    {
        $project: {
            _id: 0,
            Review: {
                $concat: [
                    { $toUpper: { $substrCP: ["$details.review", 0, 1] } },
                    {
                        $substrCP: [
                            "$details.review",
                            1,
                            { $subtract: [{ $strLenCP: "$details.review" }, 1] }
                        ]
                    }
                ]
            }
        }
    },
]).pretty()


[{
    "name": "Shershaah",
    "m_id": 101,
    "imdb_rating": 8.8,
    "release_date": ISODate("2020-08-12T00:00:00Z"),
    "genres": [
        "Action",
        "Biography",
        "Drama"
    ],
    "decsription": {
        "summary": "Biopic of Martry Vikram Batra",
        "star": [
            "Siddhart Malhotra",
            "Kiara Advani"
        ],
        "directors": [
            "Vishnuvardhan"
        ]
    }
},
{
    "name": "The Dark Knight",
    "m_id": 102,
    "imdb_rating": 9,
    "release_date": ISODate("2008-07-18T00:00:00Z"),
    "genres": [
        "Action",
        "Crime",
        "Drama"
    ],
    "decsription": {
        "summary": "Fight against mence known as Joker",
        "star": [
            "Christian Bale",
            "Heath Ledger",
            "Aaron Eckhart"
        ],
        "directors": [
            "Christopher Nolan"
        ]
    }
},
{

    "name": "Interstellar",
    "m_id": 103,
    "imdb_rating": 8.6,
    "release_date": ISODate("2014-11-07T00:00:00Z"),
    "genres": [
        "Adventure",
        "Sci-fi",
        "Drama"
    ],
    "decsription": {
        "summary": "Team of explorers travel through a wormhole into space",
        "star": [
            "Mathew Mc",
            "Anne Hathaway",
            "Jessica Chastain"
        ],
        "directors": [
            "Christopher Nolan"
        ]
    }
},
{

    "name": "Inception",

    "m_id": 104,
    "imdb_rating": 8.8,
    "release_date": ISODate("2010-07-16T00:00:00Z"),
    "genres": [
        "Adventure",
        "Sci-fi",
        "Action"
    ],
    "decsription": {
        "summary": "A thief who steals corporate secrets through use of dream-sharing",
        "star": [
            "Leonardo DiCaprio",
            "Joseph Gordon",
            "Elliot Page"
        ],
        "directors": [
            "Christopher Nolan"
        ]
    }
},
{

    "name": "Tenet",
    "m_id": 105,
    "imdb_rating": 7.4,
    "release_date": ISODate("2020-12-04T00:00:00Z"),
    "genres": [
        "Action",
        "Sci-fi",
        "Thriller"
    ],
    "decsription": {
        "summary": "Fighting for survival",
        "star": [
            "John David",
            "Robert Pattinson",
            "Elizabeth Debicki"
        ],
        "directors": [
            "Christopher Nolan"
        ]
    }
},
{

    "name": "I am Legend",
    "m_id": 106,
    "imdb_rating": 7.2,
    "release_date": ISODate("2007-12-05T00:00:00Z"),
    "genres": [
        "Action",
        "Adventure",
        "Drama"
    ],
    "decsription": {
        "summary": "Struggle to find cure of a deadly plague",
        "star": [
            "Will Smith",
            "Alice Braga",
            "Charlie Tahan"
        ],
        "directors": [
            "Francis Lawrence"
        ]
    }
},
{
    "name": "Conjuring:The Devil Made Me Do it",
    "m_id": 107,
    "imdb_rating": 6.3,
    "release_date": ISODate("2021-06-04T00:00:00Z"),
    "genres": [
        "Horror",
        "Mystery",
        "Thriller"
    ],
    "decsription": {
        "summary": "Horror story based on real life incidence",
        "star": [
            "Patrick Wilson",
            "Vera Farmiga",
            "Ruariri"
        ],
        "directors": [
            "Michael Chaves"
        ]
    }
},
{

    "name": "Avengers:Endgame",
    "m_id": 108,
    "imdb_rating": 8.4,
    "release_date": ISODate("2019-04-26T00:00:00Z"),
    "genres": [
        "Action",
        "Adventure",
        "Drama"
    ],
    "decsription": {
        "summary": "After innfinity war",
        "star": [
            "Robert Downey Jr",
            "Chris Evans",
            "Mark Ruffalo"
        ],
        "directors": [
            "Anthony Russo",
            "Joe Russo"
        ]
    }
},
{


    "name": "Black Widow",
    "m_id": 109,
    "imdb_rating": 6.8,
    "relase_date": ISODate("2021-06-29T00:00:00Z"),
    "genres": [
        "Action",
        "Adventure",
        "Sci-fi"
    ],
    "decsription": {
        "summary": "Fighting a battle against evil",
        "star": [
            "Scarlett Johansson",
            "David Harbour"
        ],
        "directors": [
            "Cate Shortland"
        ]
    }
},
    {

        "name": "The Maze Runner",
        "m_id": 110,
        "imdb_rating": 6.8,
        "release_date": ISODate("2014-09-11T00:00:00Z"),
        "genres": [
            "Action",
            "Mystery",
            "Sci-fi"
        ],
        "decsription": {
            "summary": "Solving a real life maze",
            "star": [
                "Dylan O'Brien",
                "Kaya Scodelario",
                "Will Poulter"
            ],
            "directors": [
                "Wes Ball"
            ]
        }
    }]

db.mov.aggregate([
    { $unwind: "$decsription.star" },
    {
        $project: {
            _id: 0,
            StarCast: {
                $concat: [
                    { $toUpper: { $substrCP: ["$decsription.star", 0, 1] } },
                    {
                        $substrCP: [
                            "$description.star",
                            1,
                            { $subtract: [{ $strLenCP: "$decsription.star" }, 1] }
                        ]
                    }
                ]
            }
        }
    }
]).pretty()

db.userReview.aggregate([
    {
        $project: {
            _id: 0,
            m_name: 1,
            StarCast: {
                $concat: [
                    { $toUpper: { $substrCP: [{ $arrayElemAt: ["$details.review", 0] }, 0, 1] } },
                    {
                        $substrCP: [
                            { $arrayElemAt: ["$details.review", 0] },
                            1,
                            { $subtract: [{ $strLenCP: { $arrayElemAt: ["$details.review", 0] } }, 1] }
                        ]
                    }
                ]
            }
        }
    }
]).pretty()