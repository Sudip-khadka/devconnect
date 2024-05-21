const contests = [
    {
        id:1,
        title: "Google Code Jam",
        description: "Google's annual coding competition that challenges programmers to solve complex algorithmic puzzles.",
        tags: ["algorithms", "programming", "competition"],
        startDate: "2024-05-15",
        endDate: "2024-05-30",
        requirements: "Open to programmers of all skill levels. Participants need to register on the Google Code Jam website.",
        imageUrl: "https://imgs.search.brave.com/zODrivmhgCmZb-2yrIuUTASoeTzt9njOOZqDDPmynAE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmFucG9pbWFn/ZXMuY29tL3dvcmRw/cmVzcy93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNC8wNS9nb29n/bGUtNS1hcDI0LWhl/cm8uanBn"
    },
    {
        id:2,
        title: "Facebook Hacker Cup",
        description: "Facebook's annual algorithmic programming competition open to programmers from around the world.",
        tags: ["algorithms", "programming", "competition"],
        startDate: "2024-06-10",
        endDate: "2024-06-25",
        requirements: "Open to programmers aged 18 and older. Registration is required on the Facebook Hacker Cup website.",
        imageUrl: "https://imgs.search.brave.com/ZE-QMnbhTxEnv6vsn_pKjquw4penbRts8hcMQhHMZbA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZWVrc2Zvcmdl/ZWtzLm9yZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMjA0MTMx/NTE1MzQvRmFjZWJv/b2t0aHJvdWdoSGFj/a2VyY3VwLnBuZw"
    },
    {
        id:3,
        title: "Microsoft CodeFest",
        description: "Microsoft's coding competition where participants showcase their coding skills to solve real-world problems.",
        tags: ["coding", "Microsoft", "competition"],
        startDate: "2024-07-01",
        endDate: "2024-07-15",
        requirements: "Open to students and professionals. Registration details available on the Microsoft CodeFest website.",
        imageUrl: "https://imgs.search.brave.com/oBNbhYAT5xopqeGYJEoIrwTJmrDfFgC5pjB8CDwLydQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y25ldC5jb20vYS9p/bWcvcmVzaXplLzU0/NjE0ZDFlODZjODI5/ODZiODE2NTQzMmYw/MGI2MDIyN2Q2Mzdj/MjMvaHViLzIwMTgv/MDgvMDMvODA5Yjk3/NDMtNGMxMy00NTdm/LWIwMzctODQwNGY1/NzBlZDQ2L21pY3Jv/c29mdC1oYWNrYXRo/b24tNDg3My5qcGc_/YXV0bz13ZWJwJmZp/dD1jcm9wJmhlaWdo/dD02NzUmd2lkdGg9/MTIwMA"
    },
    {
        id:4,
        title: "Amazon Coding Challenge",
        description: "Amazon's coding challenge for software engineers to demonstrate their problem-solving abilities.",
        tags: ["coding", "Amazon", "competition"],
        startDate: "2024-08-05",
        endDate: "2024-08-20",
        requirements: "Open to Amazon employees and external applicants. Registration required.",
        imageUrl: "https://imgs.search.brave.com/WDBCLHEsQQtsTBnsgJp7XZPW7qj_eJ1Ff7Fp-S0-alw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kMS5h/d3NzdGF0aWMuY29t/LzIwMjNfU3VtbWl0/c19Db21tZXJjaWFs/X1NvY2lhbE1lZGlh/VGVtcGxhdGVfMTky/MHgxMDgwLmMxNzkz/M2IzNmE3ODlmODEx/ZjI5YjFkNDIyZTgy/NjdiNDhlM2FiMDku/cG5n"
    },
    {
        id:5,
        title: "IBM CodeSprint",
        description: "IBM's global coding competition where developers compete in algorithmic and AI challenges.",
        tags: ["IBM", "coding", "AI"],
        startDate: "2024-09-10",
        endDate: "2024-09-25",
        requirements: "Open to students and professionals. Register on the IBM CodeSprint website.",
        imageUrl: "https://imgs.search.brave.com/maZOZKJ5ppHOZWroMvuqGaesOZwdRhx4lNLrcsY-6sE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdWJz/dGFja2Nkbi5jb20v/aW1hZ2UvZmV0Y2gv/d18xNDU2LGNfbGlt/aXQsZl9hdXRvLHFf/YXV0bzpnb29kLGZs/X3Byb2dyZXNzaXZl/OnN0ZWVwL2h0dHBz/Oi8vYnVja2V0ZWVy/LWUwNWJiYzg0LWJh/YTMtNDM3ZS05NTE4/LWFkYjMyYmU3Nzk4/NC5zMy5hbWF6b25h/d3MuY29tL3B1Ymxp/Yy9pbWFnZXMvYjFh/OWU3NmEtZTM4ZS00/MDA0LTg2Y2MtMTI4/ZjY4YTRjYjM3XzEw/MDB4MTAwMC5qcGVn"
    },
    {
        id:6,
        title: "Intel CodeWars",
        description: "Intel's coding competition focusing on parallel programming and optimization.",
        tags: ["Intel", "coding", "parallel programming"],
        startDate: "2024-10-01",
        endDate: "2024-10-15",
        requirements: "Open to students and professionals. Register on the Intel CodeWars website.",
        imageUrl: "https://imgs.search.brave.com/wzpf16mr-aleoXAzATF2Lmk89nuUMDOMd4Rk19grhNA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb2Rl/d2Fycy5pbmZvL2Nh/Y2hlL3Jlc2l6ZS83/ZDQ2MTkyZjdhYmVm/NmY5YTllYmIxNGYz/ZmViNjFjMF94MzAw/LmpwZw"
    },
    {
        id:7,
        title: "Oracle Code Clash",
        description: "Oracle's coding competition for developers to showcase their skills in Java programming.",
        tags: ["Oracle", "Java", "competition"],
        startDate: "2024-11-01",
        endDate: "2024-11-15",
        requirements: "Open to students and professionals. Register on the Oracle Code Clash website.",
        imageUrl: "https://imgs.search.brave.com/qg6veo2M0V8qx6hLxmyu_BsSupuDOKu1bp4TThIGPIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/djIvMSpSUzctcVNU/eDc2eHBOMkZjSERw/cEJ3LmpwZWc"
    },
    {
        id:8,
        title: "Cisco CodeQuest",
        description: "Cisco's coding competition challenging developers to solve networking and cybersecurity problems.",
        tags: ["Cisco", "networking", "cybersecurity"],
        startDate: "2025-01-01",
        endDate: "2025-01-15",
        requirements: "Open to students and professionals. Register on the Cisco CodeQuest website.",
        imageUrl: "https://imgs.search.brave.com/XZKGOsKf3BshzjN5zbBiONJHZsgt9oT83uxlK2RZh1U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5saWNkbi5jb20v/ZG1zL2ltYWdlL0M1/NjEyQVFIWTIxX1BG/c0c3ZXcvYXJ0aWNs/ZS1jb3Zlcl9pbWFn/ZS1zaHJpbmtfNjAw/XzIwMDAvMC8xNTk2/MzE3MTQzNTYwP2U9/MjE0NzQ4MzY0NyZ2/PWJldGEmdD1rSGh6/emVJMFhYc1BxOUUw/T0RnenZXdVhDTlg3/cEV2OWRONGViYmhZ/V3pJ"
    },
    {
        id:9,
        title: "Uber Hackathon",
        description: "Uber's annual hackathon where developers innovate and create solutions for the transportation industry.",
        tags: ["Uber", "hackathon", "innovation"],
        startDate: "2025-02-01",
        endDate: "2025-02-15",
        requirements: "Open to students and professionals. Register on the Uber Hackathon website.",
        imageUrl: "https://imgs.search.brave.com/iSEf-36kpm6_CM5qpwCdLa7aRtpgs_kxRV95UqKxMyo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/djIvMCpoZHYxaEdu/aEhUVXZNLVZxLnBu/Zw"
    },
    {
        id:10,
        title: "Netflix CodeFlix",
        description: "Netflix's coding competition focusing on video streaming optimization and recommendation algorithms.",
        tags: ["Netflix", "coding", "video streaming"],
        startDate: "2025-03-01",
        endDate: "2025-03-15",
        requirements: "Open to students and professionals. Register on the Netflix CodeFlix website.",
        imageUrl: "https://imgs.search.brave.com/iMK0bpQOHFE9qAS6J2UI9mfJ97x8nhrepANtIF_PSds/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1Mjku/cG5n"
    },
    {
        id:11,
        title: "Google Code Jam",
        description: "Google's annual coding competition that challenges programmers to solve complex algorithmic puzzles.",
        tags: ["algorithms", "programming", "competition"],
        startDate: "2024-05-15",
        endDate: "2024-05-30",
        requirements: "Open to programmers of all skill levels. Participants need to register on the Google Code Jam website.",
        imageUrl: "https://imgs.search.brave.com/zODrivmhgCmZb-2yrIuUTASoeTzt9njOOZqDDPmynAE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmFucG9pbWFn/ZXMuY29tL3dvcmRw/cmVzcy93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNC8wNS9nb29n/bGUtNS1hcDI0LWhl/cm8uanBn"
    },
    {
        id:12,
        title: "Facebook Hacker Cup",
        description: "Facebook's annual algorithmic programming competition open to programmers from around the world.",
        tags: ["algorithms", "programming", "competition"],
        startDate: "2024-06-10",
        endDate: "2024-06-25",
        requirements: "Open to programmers aged 18 and older. Registration is required on the Facebook Hacker Cup website.",
        imageUrl: "https://imgs.search.brave.com/ZE-QMnbhTxEnv6vsn_pKjquw4penbRts8hcMQhHMZbA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZWVrc2Zvcmdl/ZWtzLm9yZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMjA0MTMx/NTE1MzQvRmFjZWJv/b2t0aHJvdWdoSGFj/a2VyY3VwLnBuZw"
    },
    {
        id:13,
        title: "Microsoft CodeFest",
        description: "Microsoft's coding competition where participants showcase their coding skills to solve real-world problems.",
        tags: ["coding", "Microsoft", "competition"],
        startDate: "2024-07-01",
        endDate: "2024-07-15",
        requirements: "Open to students and professionals. Registration details available on the Microsoft CodeFest website.",
        imageUrl: "https://imgs.search.brave.com/oBNbhYAT5xopqeGYJEoIrwTJmrDfFgC5pjB8CDwLydQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y25ldC5jb20vYS9p/bWcvcmVzaXplLzU0/NjE0ZDFlODZjODI5/ODZiODE2NTQzMmYw/MGI2MDIyN2Q2Mzdj/MjMvaHViLzIwMTgv/MDgvMDMvODA5Yjk3/NDMtNGMxMy00NTdm/LWIwMzctODQwNGY1/NzBlZDQ2L21pY3Jv/c29mdC1oYWNrYXRo/b24tNDg3My5qcGc_/YXV0bz13ZWJwJmZp/dD1jcm9wJmhlaWdo/dD02NzUmd2lkdGg9/MTIwMA"
    },
    {
        id:14,
        title: "Amazon Coding Challenge",
        description: "Amazon's coding challenge for software engineers to demonstrate their problem-solving abilities.",
        tags: ["coding", "Amazon", "competition"],
        startDate: "2024-08-05",
        endDate: "2024-08-20",
        requirements: "Open to Amazon employees and external applicants. Registration required.",
        imageUrl: "https://imgs.search.brave.com/WDBCLHEsQQtsTBnsgJp7XZPW7qj_eJ1Ff7Fp-S0-alw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kMS5h/d3NzdGF0aWMuY29t/LzIwMjNfU3VtbWl0/c19Db21tZXJjaWFs/X1NvY2lhbE1lZGlh/VGVtcGxhdGVfMTky/MHgxMDgwLmMxNzkz/M2IzNmE3ODlmODEx/ZjI5YjFkNDIyZTgy/NjdiNDhlM2FiMDku/cG5n"
    },
    {
        id:15,
        title: "IBM CodeSprint",
        description: "IBM's global coding competition where developers compete in algorithmic and AI challenges.",
        tags: ["IBM", "coding", "AI"],
        startDate: "2024-09-10",
        endDate: "2024-09-25",
        requirements: "Open to students and professionals. Register on the IBM CodeSprint website.",
        imageUrl: "https://imgs.search.brave.com/maZOZKJ5ppHOZWroMvuqGaesOZwdRhx4lNLrcsY-6sE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdWJz/dGFja2Nkbi5jb20v/aW1hZ2UvZmV0Y2gv/d18xNDU2LGNfbGlt/aXQsZl9hdXRvLHFf/YXV0bzpnb29kLGZs/X3Byb2dyZXNzaXZl/OnN0ZWVwL2h0dHBz/Oi8vYnVja2V0ZWVy/LWUwNWJiYzg0LWJh/YTMtNDM3ZS05NTE4/LWFkYjMyYmU3Nzk4/NC5zMy5hbWF6b25h/d3MuY29tL3B1Ymxp/Yy9pbWFnZXMvYjFh/OWU3NmEtZTM4ZS00/MDA0LTg2Y2MtMTI4/ZjY4YTRjYjM3XzEw/MDB4MTAwMC5qcGVn"
    },
    {
        id:16,
        title: "Intel CodeWars",
        description: "Intel's coding competition focusing on parallel programming and optimization.",
        tags: ["Intel", "coding", "parallel programming"],
        startDate: "2024-10-01",
        endDate: "2024-10-15",
        requirements: "Open to students and professionals. Register on the Intel CodeWars website.",
        imageUrl: "https://imgs.search.brave.com/wzpf16mr-aleoXAzATF2Lmk89nuUMDOMd4Rk19grhNA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb2Rl/d2Fycy5pbmZvL2Nh/Y2hlL3Jlc2l6ZS83/ZDQ2MTkyZjdhYmVm/NmY5YTllYmIxNGYz/ZmViNjFjMF94MzAw/LmpwZw"
    },
    {
        id:17,
        title: "Oracle Code Clash",
        description: "Oracle's coding competition for developers to showcase their skills in Java programming.",
        tags: ["Oracle", "Java", "competition"],
        startDate: "2024-11-01",
        endDate: "2024-11-15",
        requirements: "Open to students and professionals. Register on the Oracle Code Clash website.",
        imageUrl: "https://imgs.search.brave.com/qg6veo2M0V8qx6hLxmyu_BsSupuDOKu1bp4TThIGPIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/djIvMSpSUzctcVNU/eDc2eHBOMkZjSERw/cEJ3LmpwZWc"
    },
    {
        id:18,
        title: "Cisco CodeQuest",
        description: "Cisco's coding competition challenging developers to solve networking and cybersecurity problems.",
        tags: ["Cisco", "networking", "cybersecurity"],
        startDate: "2025-01-01",
        endDate: "2025-01-15",
        requirements: "Open to students and professionals. Register on the Cisco CodeQuest website.",
        imageUrl: "https://imgs.search.brave.com/XZKGOsKf3BshzjN5zbBiONJHZsgt9oT83uxlK2RZh1U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5saWNkbi5jb20v/ZG1zL2ltYWdlL0M1/NjEyQVFIWTIxX1BG/c0c3ZXcvYXJ0aWNs/ZS1jb3Zlcl9pbWFn/ZS1zaHJpbmtfNjAw/XzIwMDAvMC8xNTk2/MzE3MTQzNTYwP2U9/MjE0NzQ4MzY0NyZ2/PWJldGEmdD1rSGh6/emVJMFhYc1BxOUUw/T0RnenZXdVhDTlg3/cEV2OWRONGViYmhZ/V3pJ"
    },
    {
        id:19,
        title: "Uber Hackathon",
        description: "Uber's annual hackathon where developers innovate and create solutions for the transportation industry.",
        tags: ["Uber", "hackathon", "innovation"],
        startDate: "2025-02-01",
        endDate: "2025-02-15",
        requirements: "Open to students and professionals. Register on the Uber Hackathon website.",
        imageUrl: "https://imgs.search.brave.com/iSEf-36kpm6_CM5qpwCdLa7aRtpgs_kxRV95UqKxMyo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/djIvMCpoZHYxaEdu/aEhUVXZNLVZxLnBu/Zw"
    },
    {
        id:20,
        title: "Netflix CodeFlix",
        description: "Netflix's coding competition focusing on video streaming optimization and recommendation algorithms.",
        tags: ["Netflix", "coding", "video streaming"],
        startDate: "2025-03-01",
        endDate: "2025-03-15",
        requirements: "Open to students and professionals. Register on the Netflix CodeFlix website.",
        imageUrl: "https://imgs.search.brave.com/iMK0bpQOHFE9qAS6J2UI9mfJ97x8nhrepANtIF_PSds/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1Mjku/cG5n"
    },
    // Add more contest objects as needed
];

export default contests;
