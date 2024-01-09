const data = {
    // About page
    about: {
        avatar: "./../../public/social/avatar.jpg",
        name: "Ashok Kumar Dharanikota",
        title: "Full Stack Developer",
        about:
            "Hey there! 👋 I'm Ashok, a tech enthusiast on a mission to make the digital world cooler. From contributing to open-source projects, diving into Java and SQL wizardry, to crafting Full Stack Web Apps, I'm all about turning ideas into tech realities. When not coding, catch me listening to music or exploring new places. Let's connect the dots between creativity and code – because in my world, innovation is the name of the game! 🚀✨",
        social: [
            {
                name: "Twitter",
                username: "@ashok_d7",
                url: "https://twitter.com/@ashok_d7",
                icon: './../../public/social/twitter.svg',
                style: {
                    width: "200px",
                    height: "200px",
                    background: "linear-gradient(180deg, #4EBCFF 0%, #1199ED 100%)",
                    borderRadius: "36px",
                    border: "2.017px solid rgba(255, 255, 255, 0.22)",
                    padding: "25px",
                    fontFamily: "'Inter', sans-serif",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gridArea: "twitter"
                },
            },

            {
                name: "GitHub",
                username: "@Ashok-Kumar-dharanikota",
                url: "https://github.com/Ashok-Kumar-dharanikota",
                icon: "./../../public/social/GitHub.svg",
                style: {
                    width: "200px",
                    height: "200px",
                    background: "linear-gradient(180deg, #25262F 0%, #0C0D16 100%)",
                    borderRadius: "36px",
                    border: "2.017px solid rgba(255, 255, 255, 0.22)",
                    padding: "25px",
                    fontFamily: "'Inter', sans-serif",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gridArea: "github"

                },
            },
            {
                name: "Linkedin",
                username: "@ashok-kumar-dharanikota",
                url: "https://www.linkedin.com/in/ashok-kumar-dharanikota/",
                icon: "./../../public/social/linkedin.svg",
                style: {
                    minWidth: "150px",
                    minHeight: "150px",
                    background: "linear-gradient(180deg, #6F7AFC 0%, #4554EE 100%)",
                    borderRadius: "36px",
                    border: "2.017px solid rgba(255, 255, 255, 0.22)",
                    padding: "25px",
                    fontFamily: "'Inter', sans-serif",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gridArea: "linkedin"

                },
            },

        ],
        achievements: [
            {
                image: "",
                title: "one",
                description: "",
                link: "",
                style: {

                }
            },
            {
                image: "",
                title: "two",
                description: "",
                link: "",
                style: {

                }
            },
            {
                image: "",
                title: "three",
                description: "",
                link: "",
                style: {

                }
            }

        ]
    },
    // Skills
    skills: {
        title: "",
        subtitle: "",
        skillsList: [
            {
                name: "Skill 1",
                image: "",
                type: ""
            },
            {
                name: "Skill 2",
                image: "",
                type: ""
            },
            {
                name: "Skill 3",
                image: "",
                type: ""
            },
            {
                name: "Skill 4",
                image: "",
                type: ""
            }

        ],
    },

    //Experience page
    experience: {
        title: "",
        subtitle: "",
        experienceList: [
            {
                company: "Company Name",
                role: "Software Engineer Intern",
                date: "start - end",
                desc: "Responsibilities included working on a team to develop and maintain software applications",
                image: "",
                style: {

                }
            },
            {
                company: "Company Name",
                role: "Software Engineer Intern",
                date: "start - end",
                desc: "Responsibilities included working on a team to develop and maintain software applications",
                image: "",
                style: {

                }
            },
            {
                company: "Company Name",
                role: "Software Engineer Intern",
                date: "start - end",
                desc: "Responsibilities included working on a team to develop and maintain software applications",
                image: "",
                style: {

                }
            }
        ]
    },

    //projects page
    projects: {
        title: "",
        subtitle: "",
        projectList: [
            {
                name: "",
                description: "",
                link: {
                    code: "",
                    live: ""
                },
                images: [
                    { src: "", alt: "" },
                    { src: "", alt: "" }
                ],
                skillsUsed: ["", "", ""],
                style: {

                }
            },
            {
                name: "",
                description: "",
                link: {
                    code: "",
                    live: ""
                },
                images: [
                    { src: "", alt: "" },
                    { src: "", alt: "" }
                ],
                skillsUsed: ["", "", ""],
                style: {

                }
            },
            {
                name: "",
                description: "",
                link: {
                    code: "",
                    live: ""
                },
                images: [
                    { src: "", alt: "" },
                    { src: "", alt: "" }
                ],
                skillsUsed: ["", "", ""],
                style: {

                }
            }
        ]
    }

}

export default data;
