function sendData(){

const allCollegeDetails=[
    {
        "id": 1,
        "name": "Indian Institute of Technology, Delhi",
        "courses": [
            {
                "courseName": "B.Tech in Computer Science",
                "courseFee": 200000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Data Science",
                "courseFee": 150000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "AC",
            "fee": 30000
        }
    },
    {
        "id": 2,
        "name": "Indian Institute of Technology, Mumbai",
        "courses": [
            {
                "courseName": "B.Tech in Mechanical Engineering",
                "courseFee": 210000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Robotics",
                "courseFee": 160000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "Non-AC",
            "fee": 20000
        }
    },
    {
        "id": 3,
        "name": "Indian Institute of Science, Bangalore",
        "courses": [
            {
                "courseName": "B.Sc in Physics",
                "courseFee": 180000,
                "duration": "3 years"
            },
            {
                "courseName": "M.Sc in Biology",
                "courseFee": 140000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "AC",
            "fee": 25000
        }
    },
    {
        "id": 4,
        "name": "National Institute of Technology, Calcutta",
        "courses": [
            {
                "courseName": "B.Tech in Civil Engineering",
                "courseFee": 190000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Structural Engineering",
                "courseFee": 155000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "Non-AC",
            "fee": 22000
        }
    },
    {
        "id": 5,
        "name": "Jawaharlal Nehru University, Delhi",
        "courses": [
            {
                "courseName": "BA in Political Science",
                "courseFee": 90000,
                "duration": "3 years"
            },
            {
                "courseName": "MA in Sociology",
                "courseFee": 110000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "AC",
            "fee": 27000
        }
    },
    {
        "id": 6,
        "name": "Banaras Hindu University, Varanasi",
        "courses": [
            {
                "courseName": "B.Com",
                "courseFee": 75000,
                "duration": "3 years"
            },
            {
                "courseName": "MBA",
                "courseFee": 130000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "Non-AC",
            "fee": 15000
        }
    },
    {
        "id": 7,
        "name": "University of Delhi",
        "courses": [
            {
                "courseName": "B.A in English",
                "courseFee": 85000,
                "duration": "3 years"
            },
            {
                "courseName": "M.A in History",
                "courseFee": 120000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "AC",
            "fee": 25000
        }
    },
    {
        "id": 8,
        "name": "Indian Institute of Technology, Kanpur",
        "courses": [
            {
                "courseName": "B.Tech in Chemical Engineering",
                "courseFee": 210000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Environmental Engineering",
                "courseFee": 150000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "Non-AC",
            "fee": 18000
        }
    },
    {
        "id": 9,
        "name": "Indian Institute of Technology, Kharagpur",
        "courses": [
            {
                "courseName": "B.Tech in Electrical Engineering",
                "courseFee": 220000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Power Systems",
                "courseFee": 160000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "AC",
            "fee": 27000
        }
    },
    {
        "id": 10,
        "name": "National Institute of Fashion Technology, Delhi",
        "courses": [
            {
                "courseName": "B.Des in Fashion Design",
                "courseFee": 300000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Des in Fashion Management",
                "courseFee": 180000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "Non-AC",
            "fee": 20000
        }
    },
    {
        "id": 11,
        "name": "Manipal University, Manipal",
        "courses": [
            {
                "courseName": "B.Tech in Information Technology",
                "courseFee": 210000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Cyber Security",
                "courseFee": 150000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "AC",
            "fee": 25000
        }
    },
    {
        "id": 12,
        "name": "LPU, Jalandhar",
        "courses": [
            {
                "courseName": "B.Sc in Agriculture",
                "courseFee": 120000,
                "duration": "4 years"
            },
            {
                "courseName": "MBA in Agriculture Management",
                "courseFee": 140000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "Non-AC",
            "fee": 15000
        }
    },
    {
        "id": 13,
        "name": "Panjab University, Chandigarh",
        "courses": [
            {
                "courseName": "B.A in Music",
                "courseFee": 80000,
                "duration": "3 years"
            },
            {
                "courseName": "M.A in Fine Arts",
                "courseFee": 100000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "AC",
            "fee": 22000
        }
    },
    {
        "id": 14,
        "name": "Amity University, Noida",
        "courses": [
            {
                "courseName": "B.Tech in Computer Science",
                "courseFee": 240000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Software Engineering",
                "courseFee": 170000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "Non-AC",
            "fee": 30000
        }
    },
    {
        "id": 15,
        "name": "SASTRA University, Thanjavur",
        "courses": [
            {
                "courseName": "B.Tech in Civil Engineering",
                "courseFee": 200000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Structural Engineering",
                "courseFee": 160000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "AC",
            "fee": 25000
        }
    },
    {
        "id": 16,
        "name": "Nirma University, Ahmedabad",
        "courses": [
            {
                "courseName": "B.Tech in Computer Engineering",
                "courseFee": 220000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Computer Applications",
                "courseFee": 180000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "Non-AC",
            "fee": 20000
        }
    },
    {
        "id": 17,
        "name": "SRM Institute of Science and Technology, Chennai",
        "courses": [
            {
                "courseName": "B.Tech in Electrical Engineering",
                "courseFee": 230000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in VLSI Design",
                "courseFee": 150000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "AC",
            "fee": 29000
        }
    },
    {
        "id": 18,
        "name": "Chandigarh University, Chandigarh",
        "courses": [
            {
                "courseName": "B.Tech in Mechanical Engineering",
                "courseFee": 200000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Thermal Engineering",
                "courseFee": 160000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "Non-AC",
            "fee": 18000
        }
    },
    {
        "id": 19,
        "name": "Thapar Institute of Engineering and Technology, Patiala",
        "courses": [
            {
                "courseName": "B.Tech in Information Technology",
                "courseFee": 190000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Software Engineering",
                "courseFee": 140000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "AC",
            "fee": 25000
        }
    },
    {
        "id": 20,
        "name": "Birla Institute of Technology, Mesra",
        "courses": [
            {
                "courseName": "B.Tech in Computer Science",
                "courseFee": 185000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Data Science",
                "courseFee": 160000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "Non-AC",
            "fee": 16000
        }
    },
    {
        "id": 21,
        "name": "Kalinga Institute of Industrial Technology, Bhubaneswar",
        "courses": [
            {
                "courseName": "B.Tech in Civil Engineering",
                "courseFee": 200000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Structural Engineering",
                "courseFee": 150000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "AC",
            "fee": 27000
        }
    },
    {
        "id": 22,
        "name": "Bharati Vidyapeeth Deemed University, Pune",
        "courses": [
            {
                "courseName": "B.Tech in Computer Engineering",
                "courseFee": 210000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Data Science",
                "courseFee": 140000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "Non-AC",
            "fee": 22000
        }
    },
    {
        "id": 23,
        "name": "GITAM University, Visakhapatnam",
        "courses": [
            {
                "courseName": "B.Tech in Electrical Engineering",
                "courseFee": 200000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Power Systems",
                "courseFee": 160000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "AC",
            "fee": 25000
        }
    },
    {
        "id": 24,
        "name": "Jaypee Institute of Information Technology, Noida",
        "courses": [
            {
                "courseName": "B.Tech in Computer Science",
                "courseFee": 200000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Information Security",
                "courseFee": 140000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "Non-AC",
            "fee": 20000
        }
    },
    {
        "id": 25,
        "name": "Netaji Subhas University of Technology, Delhi",
        "courses": [
            {
                "courseName": "B.Tech in Mechanical Engineering",
                "courseFee": 210000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Robotics",
                "courseFee": 170000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "AC",
            "fee": 25000
        }
    },
    {
        "id": 26,
        "name": "Sardar Vallabhbhai Patel Institute of Technology, Vasad",
        "courses": [
            {
                "courseName": "B.Tech in Information Technology",
                "courseFee": 190000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Software Engineering",
                "courseFee": 130000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "Non-AC",
            "fee": 18000
        }
    },
    {
        "id": 27,
        "name": "Vishwakarma Institute of Technology, Pune",
        "courses": [
            {
                "courseName": "B.Tech in Civil Engineering",
                "courseFee": 185000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Environmental Engineering",
                "courseFee": 160000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "AC",
            "fee": 20000
        }
    },
    {
        "id": 28,
        "name": "Indian School of Business, Hyderabad",
        "courses": [
            {
                "courseName": "MBA in Management",
                "courseFee": 200000,
                "duration": "2 years"
            },
            {
                "courseName": "PGP in Management",
                "courseFee": 250000,
                "duration": "1 year"
            }
        ],
        "accommodation": {
            "type": "Non-AC",
            "fee": 15000
        }
    },
    {
        "id": 29,
        "name": "Manipal Academy of Higher Education, Manipal",
        "courses": [
            {
                "courseName": "B.Sc in Nursing",
                "courseFee": 80000,
                "duration": "4 years"
            },
            {
                "courseName": "MBA in Healthcare Management",
                "courseFee": 150000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "AC",
            "fee": 22000
        }
    },
    {
        "id": 30,
        "name": "Kumaraguru College of Technology, Coimbatore",
        "courses": [
            {
                "courseName": "B.Tech in Information Technology",
                "courseFee": 180000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Data Science",
                "courseFee": 160000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "Non-AC",
            "fee": 20000
        }
    },
    {
        "id": 31,
        "name": "Shiv Nadar University, Greater Noida",
        "courses": [
            {
                "courseName": "B.Tech in Computer Science",
                "courseFee": 220000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Cyber Security",
                "courseFee": 170000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "AC",
            "fee": 28000
        }
    },
    {
        "id": 32,
        "name": "IIIT Delhi",
        "courses": [
            {
                "courseName": "B.Tech in Computer Science",
                "courseFee": 230000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Artificial Intelligence",
                "courseFee": 180000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "Non-AC",
            "fee": 25000
        }
    },
    {
        "id": 33,
        "name": "Indian Institute of Management, Ahmedabad",
        "courses": [
            {
                "courseName": "MBA in Business Management",
                "courseFee": 250000,
                "duration": "2 years"
            },
            {
                "courseName": "PGDM in Management",
                "courseFee": 200000,
                "duration": "1 year"
            }
        ],
        "accommodation": {
            "type": "AC",
            "fee": 30000
        }
    },
    {
        "id": 34,
        "name": "Indira Gandhi National Open University, Delhi",
        "courses": [
            {
                "courseName": "B.Com in Commerce",
                "courseFee": 70000,
                "duration": "3 years"
            },
            {
                "courseName": "MBA in Business Management",
                "courseFee": 140000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "Non-AC",
            "fee": 15000
        }
    },
    {
        "id": 35,
        "name": "Birla Institute of Technology and Science, Pilani",
        "courses": [
            {
                "courseName": "B.Tech in Chemical Engineering",
                "courseFee": 220000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Chemical Engineering",
                "courseFee": 160000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "AC",
            "fee": 27000
        }
    },
    {
        "id": 36,
        "name": "PES University, Bangalore",
        "courses": [
            {
                "courseName": "B.Tech in Computer Science",
                "courseFee": 200000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Software Engineering",
                "courseFee": 150000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "Non-AC",
            "fee": 22000
        }
    },
    {
        "id": 37,
        "name": "Srinivas University, Mangalore",
        "courses": [
            {
                "courseName": "B.Sc in Nursing",
                "courseFee": 90000,
                "duration": "4 years"
            },
            {
                "courseName": "MBA in Healthcare Management",
                "courseFee": 130000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "AC",
            "fee": 24000
        }
    },
    {
        "id": 38,
        "name": "Delhi Technological University, Delhi",
        "courses": [
            {
                "courseName": "B.Tech in Mechanical Engineering",
                "courseFee": 200000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Thermal Engineering",
                "courseFee": 160000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "Non-AC",
            "fee": 20000
        }
    },
    {
        "id": 39,
        "name": "Mody University of Science and Technology, Rajasthan",
        "courses": [
            {
                "courseName": "B.Tech in Computer Science",
                "courseFee": 210000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Data Science",
                "courseFee": 150000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "AC",
            "fee": 28000
        }
    },
    {
        "id": 40,
        "name": "Rajasthan Technical University, Kota",
        "courses": [
            {
                "courseName": "B.Tech in Civil Engineering",
                "courseFee": 180000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Structural Engineering",
                "courseFee": 140000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "Non-AC",
            "fee": 18000
        }
    },
    {
        "id": 41,
        "name": "Nirma University, Ahmedabad",
        "courses": [
            {
                "courseName": "B.Tech in Electronics Engineering",
                "courseFee": 190000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in VLSI Design",
                "courseFee": 160000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "AC",
            "fee": 22000
        }
    },
    {
        "id": 42,
        "name": "Bharati Vidyapeeth University, Pune",
        "courses": [
            {
                "courseName": "B.Tech in Information Technology",
                "courseFee": 210000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Information Security",
                "courseFee": 140000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "Non-AC",
            "fee": 20000
        }
    },
    {
        "id": 43,
        "name": "Lovely Professional University, Punjab",
        "courses": [
            {
                "courseName": "B.Tech in Computer Science",
                "courseFee": 220000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Data Science",
                "courseFee": 150000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "AC",
            "fee": 28000
        }
    },
    {
        "id": 44,
        "name": "Vellore Institute of Technology, Vellore",
        "courses": [
            {
                "courseName": "B.Tech in Electrical Engineering",
                "courseFee": 230000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Renewable Energy",
                "courseFee": 170000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "Non-AC",
            "fee": 20000
        }
    },
    {
        "id": 45,
        "name": "SASTRA University, Thanjavur",
        "courses": [
            {
                "courseName": "B.Tech in Electronics Engineering",
                "courseFee": 210000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in VLSI Design",
                "courseFee": 180000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "AC",
            "fee": 23000
        }
    },
    {
        "id": 46,
        "name": "National Institute of Technical Teachers Training and Research, Chandigarh",
        "courses": [
            {
                "courseName": "B.Tech in Computer Science",
                "courseFee": 195000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Software Engineering",
                "courseFee": 150000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "Non-AC",
            "fee": 19000
        }
    },
    {
        "id": 47,
        "name": "Rajasthan Institute of Engineering and Technology, Jaipur",
        "courses": [
            {
                "courseName": "B.Tech in Information Technology",
                "courseFee": 190000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Cyber Security",
                "courseFee": 170000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "AC",
            "fee": 24000
        }
    },
    {
        "id": 48,
        "name": "Jawaharlal Nehru Technological University, Hyderabad",
        "courses": [
            {
                "courseName": "B.Tech in Mechanical Engineering",
                "courseFee": 180000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Thermal Engineering",
                "courseFee": 160000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "Non-AC",
            "fee": 18000
        }
    },
    {
        "id": 49,
        "name": "Sri Venkateswara University, Tirupati",
        "courses": [
            {
                "courseName": "B.Sc in Mathematics",
                "courseFee": 70000,
                "duration": "3 years"
            },
            {
                "courseName": "M.Sc in Computer Science",
                "courseFee": 130000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "AC",
            "fee": 22000
        }
    },
    {
        "id": 50,
        "name": "Jadavpur University, Kolkata",
        "courses": [
            {
                "courseName": "B.Tech in Computer Science",
                "courseFee": 200000,
                "duration": "4 years"
            },
            {
                "courseName": "M.Tech in Software Engineering",
                "courseFee": 160000,
                "duration": "2 years"
            }
        ],
        "accommodation": {
            "type": "Non-AC",
            "fee": 20000
        }
    }
];

return allCollegeDetails;

}
module.exports = sendData;

