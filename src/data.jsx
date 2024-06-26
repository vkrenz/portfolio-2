import {
    PiInstagramLogoDuotone,
    PiTwitterLogoDuotone,
    PiLinkedinLogoDuotone,
    PiGithubLogoDuotone,
    PiCodepenLogoDuotone,
    PiDiscordLogoDuotone,
    PiChatCenteredTextDuotone,
} from 'react-icons/pi'

import { GiClothes } from 'react-icons/gi'

import { TbBrandAirbnb, TbBrandVercel } from 'react-icons/tb'

import { FaGithubAlt } from 'react-icons/fa'

import { MdOpenInNew } from 'react-icons/md'

import pfpImage from './assets/pfp.png';

const data = {
    name: "Victor Krenzel",
    description: "I'm a tech enthusiast, driven by curiosity and creativity, passionate about problem-solving and continuous learning.",
    photo: pfpImage,
    contact: {
        company: "Scotiabank",
        email: "vkrenzel@outlook.com",
        phone: "647-568-6382",
        location: "Toronto",
    },
    socials: [
        /** 6 Max socials */
        {
            name: "Instagram",
            link: "https://www.instagram.com/v.krzl/",
            icon: <PiInstagramLogoDuotone />,
            handle: "@v.krzl",
        },
        {   
            name: "Twitter",
            link: "https://twitter.com/vkrenzel",
            icon: <PiTwitterLogoDuotone />,
            handle: "@vkrenzel",
        },
        {   
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/vkrenz/",
            icon: <PiLinkedinLogoDuotone />,
            handle: "in/vkrenz",
        },
        {   
            name: "Github",
            link: "https://github.com/vkrenz",
            icon: <PiGithubLogoDuotone />,
            handle: "vkrenz",
        },
        {
            name: "Codepen",
            link: "https://codepen.io/vkrenzel",
            icon: <PiCodepenLogoDuotone />,
            handle: "vkrenz",
        },
        {
            name: "Discord",
            link: "https://discord.com",
            icon: <PiDiscordLogoDuotone />,
            handle: "osaprocky",
        },
    ],
    projects: [
        {
            name: "Airbnb Clone",
            dateYear: "2023",
            imageIcon: <TbBrandAirbnb />,
            headerIcons: [
                {
                    icon: <TbBrandVercel key="vercel" />,
                    link: 'https://bnb-nu.vercel.app/',
                },
                {
                    icon: <FaGithubAlt key="github"/>,
                    link: 'https://github.com/vkrenz/airbnb-clone',
                },
            ],
            description:
                "A feature-rich Airbnb clone showcasing CRUD, user authentication, search filters, interactive maps, and efficient media management, highlighting my expertise in building innovative web applications.",
            link: "https://project1-link.com",
            languages: [
                {
                    name: "Typescript", 
                    link: "https://www.typescriptlang.org/",

                },
                {
                    name: "Next.js", 
                    link: "https://nextjs.org/blog/next-13",

                },
                {
                    name: "React", 
                    link: "https://react.dev/",

                },
                {
                    name: "MongoDB", 
                    link: "https://www.mongodb.com/"

                },
                {
                    name: "Tailwind CSS",
                    link: "https://tailwindcss.com/"
                },
            ],
        },
        {
            name: "Chatalot",
            link: '',
            githubLink: 'https://github.com/vkrenz/chatalot-app',
            dateYear: "2022",
            imageIcon: <PiChatCenteredTextDuotone />,
            headerIcons: [
                {
                    icon: <FaGithubAlt key="github"/>,
                    link: 'https://github.com/vkrenz/chatalot-app',
                },
                {
                    icon: <MdOpenInNew key="open" />,
                    link: 'https://vkrenz.github.io/chatalot-app/',
                },
            ],
            description:
                "A dynamic web app combining style and function. With dark mode, Google login, and real-time chat via Firebase, it elevates online conversations. User security ensures privacy. Chatalot reflects my commitment to creating engaging and secure web apps.",
            languages: [
                {
                    name: "React", 
                    link: "https://react.dev/",
                },
                {
                    name: "Tailwind CSS",
                    link: "https://tailwindcss.com/",
                },
                {
                    name: "Firebase",
                    link: "https://firebase.google.com/",
                },
            ],
        },
        {
            name: "EssentiaMarket",
            dateYear: "2023",
            imageIcon: <GiClothes />,
            headerIcons: [
                {
                    icon: <FaGithubAlt key="github"/>,
                    link: 'https://github.com/vkrenz/chatalot-app',
                },
                {
                    icon: <MdOpenInNew key="open" />,
                    link: 'https://vkrenz.github.io/chatalot-app/',
                },
            ],
            description:
                "EssentiaMarket is an engaging web application built with Next.js and React, enhanced with Bootstrap. It offers seamless page navigation and dynamic data retrieval from an API, making it an intuitive and interactive platform for exploring an online marketplace.",
            link: "https://project2-link.com",
            languages: [
                {
                    name: "React", 
                    link: "https://react.dev/",
                },
                {
                    name: "Next.js", 
                    link: "https://nextjs.org/blog/next-13",

                },
                {
                    name: "Bootstrap",
                    link: "https://getbootstrap.com/"
                },
            ],
        },
    ],
    skills: [
        {
            name: "JavaScript",
            icon: "javascript-icon",
        },
        {
            name: "React",
            icon: "react-icon",
        },
        {
            name: "HTML",
            icon: "html-icon",
        },
        {
            name: "CSS",
            icon: "css-icon",
        },
        {
            name: "Java",
            icon: "java-icon",
        },
    ],
    experience: [
        {
            name: "React", 
            link: "https://react.dev/",
        },
        {
            name: "Tailwind CSS",
            link: "https://tailwindcss.com/",
        },
        {
            name: "Firebase",
            link: "https://firebase.google.com/",
        },
        {
            name: "Next.js", 
            link: "https://nextjs.org/blog/next-13",

        },
        {
            name: "Bootstrap",
            link: "https://getbootstrap.com/"
        },
        {
            name: "Typescript", 
            link: "https://www.typescriptlang.org/",

        },
        {
            name: "MongoDB", 
            link: "https://www.mongodb.com/",

        },
        {
            name: "Node.js",
            link: "https://nodejs.org/en",
        },
        {
            name: "jQuery",
            link: "https://jquery.com/",
        },
        {
            name: "Express.js",
            link: "https://expressjs.com/",
        },
        {
            name: "MySQL",
            link: "https://www.mysql.com/",
        },
        {
            name: "Oracle Database",
            link: "https://www.oracle.com/ca-en/database/sqldeveloper/"
        },
        {
            name: "Mongoose",
            link: "https://mongoosejs.com/"
        },
        {
            name: "Material UI",
            link: "https://mui.com/",
        },
        {
            name: "Shadcn/ui",
            link: "https://ui.shadcn.com/"
        },
        {
            name: "Flowbite",
            link: "https://flowbite.com/"
        }
    ],
    resume: {
        name: {
            firstName: "Victor",
            lastName: "Krenzel"
        },
        location: "Toronto, ON",
        postalCode: "M2R",
        phone: "+1 (647) 568-6382",
        email: "vkrenzel@outlook.com",
        linkedin: "linkedin.com/in/vkrenz",
        education: [
            {

            },
            {

            },
        ]
    }
};

export default data;
