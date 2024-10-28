import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Code } from "lucide-react";


export const DATA = {
    name: "Sanjiv Jaiswal",
    initials: "SJ",
    url: "https://sanjivjaiswal.com.np",
    location: "Kathmandu, Nepal",
    locationLink: "#",
    description:
        <p>An Entrepreneurial Web Developer, Building Real Products For the Real World.</p>,
    summary:
        <p>My journey began with a BSc in Computer Science and IT, combined with a passion for <span className="bold-text">building products</span> that solve real-world problems. Along the way, I’ve been involved in various personal projects, and continuously strived to evolve as both a developer and a business strategist.</p>,
    avatarUrl: "/me-square.jpg",

    cvDownloadLink: "#",

    skills: [
        {
            title: "Web Development",
            description: <p>With an experience of 1.5+ years, I've been highly active in the web development space. I love to build valuable things!</p>,
            tags: ["React", "Next.js", "JavaScript", "Typescript", "TailwindCSS", "Appwrite", "Git/GitHub", "UI/UX (Figma)"],
        },
        {
            title: "Product Building",
            description: <p>I love to build market-ready products bringing value to the table; tool for <span className="bold-text">Minecraft players</span>, <span className="bold-text">esports platform</span>, and <span className="bold-text">personal finance app</span> are quite recent ones!</p>,
            tags: ["Product Strategy", "MVP Development", "Problem Solving", "Entreprenerial Mindset"],
        },
        {
            title: "Business and Marketing",
            description: <p>Having spent over <span className="bold-text">3 years</span> in <span className="bold-text">SEO</span> and <span className="bold-text">Competition Analysis</span>, I’ve a strong command over organic marketing, business analysis, and market research.  </p>,
            tags: ["SEO (Search Engine Optimization)", "Market Research", "Digital Marketing"],
        },
    ],

    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        { href: "#projects", icon: Code, label: "Projects" },
        { href: "/blog", icon: NotebookIcon, label: "Blog" },
    ],


    contact: {
        email: "connect@sanjivjaiswal.com.np",
        tel: "+9779862495033",
        social: {
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/sanjiv-jaiswal/",
                icon: Icons.linkedin,

                navbar: true,
            },
            X: {
                name: "X",
                url: "https://x.com/sanjivkjais",
                icon: Icons.x,

                navbar: true,
            },
            GitHub: {
                name: "GitHub",
                url: "https://github.com/SanjivJais",
                icon: Icons.github,

                navbar: true,
            },
            email: {
                name: "Send Email",
                url: "mailto:connect@sanjivjaiswal.com.np",
                icon: Icons.email,

                navbar: true,
            },
        },
    },



    experience: [
        {
            company: "Atomic Finance",
            href: "https://atomic.finance",
            badges: [],
            location: "Remote",
            title: "Bitcoin Protocol Engineer",
            logoUrl: "/atomic.png",
            start: "May 2021",
            end: "Oct 2022",
            description:
                "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
        },
        {
            company: "Shopify",
            badges: [],
            href: "https://shopify.com",
            location: "Remote",
            title: "Software Engineer",
            logoUrl: "/shopify.svg",
            start: "January 2021",
            end: "April 2021",
            description:
                "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
        },
        {
            company: "Nvidia",
            href: "https://nvidia.com/",
            badges: [],
            location: "Santa Clara, CA",
            title: "Software Engineer",
            logoUrl: "/nvidia.png",
            start: "January 2020",
            end: "April 2020",
            description:
                "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
        },
        {
            company: "Splunk",
            href: "https://splunk.com",
            badges: [],
            location: "San Jose, CA",
            title: "Software Engineer",
            logoUrl: "/splunk.svg",
            start: "January 2019",
            end: "April 2019",
            description:
                "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
        },
        {
            company: "Lime",
            href: "https://li.me/",
            badges: [],
            location: "San Francisco, CA",
            title: "Software Engineer",
            logoUrl: "/lime.svg",
            start: "January 2018",
            end: "April 2018",
            description:
                "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
        },
        {
            company: "Mitre Media",
            href: "https://mitremedia.com/",
            badges: [],
            location: "Toronto, ON",
            title: "Software Engineer",
            logoUrl: "/mitremedia.png",
            start: "May 2017",
            end: "August 2017",
            description:
                "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
        },
    ],


    education: [
        {
            school: "Buildspace",
            href: "https://buildspace.so",
            degree: "s3, s4, sf1, s5",
            logoUrl: "/buildspace.jpg",
            start: "2023",
            end: "2024",
        },
        {
            school: "University of Waterloo",
            href: "https://uwaterloo.ca",
            degree: "Bachelor's Degree of Computer Science (BCS)",
            logoUrl: "/waterloo.png",
            start: "2016",
            end: "2021",
        },
        {
            school: "Wilfrid Laurier University",
            href: "https://wlu.ca",
            degree: "Bachelor's Degree of Business Administration (BBA)",
            logoUrl: "/laurier.png",
            start: "2016",
            end: "2021",
        },
        {
            school: "International Baccalaureate",
            href: "https://ibo.org",
            degree: "IB Diploma",
            logoUrl: "/ib.png",
            start: "2012",
            end: "2016",
        },
    ],




    technologies: [
        {
            id: "react",
            name: "React JS",
            image: "/tech-icons/react.svg",
            description: "A JavaScript library for building user interfaces",
        },
        {
            id: "javascript",
            name: "JavaScript",
            image: "/tech-icons/javascript.svg",
            description: null,
        },
        {
            id: "tailwindcss",
            name: "Tailwind CSS",
            image: "/tech-icons/tailwind.svg",
            description: "A utility-first CSS framework",
        },
        {
            id: "appwrite",
            name: "Appwrite",
            image: "/tech-icons/appwrite.svg",
            description: "An open source backend as a service",
        },
        {
            id: "apexcharts",
            name: "ApexCharts",
            image: "/tech-icons/apexcharts.png",
            description: "A powerful charting library for React",
        },
        {
            id: "nextjs",
            name: "Next JS",
            image: "/tech-icons/nextjs.svg",
            description: "The React framework for production",
        },
        {
            id: "typescript",
            name: "TypeScript",
            image: "/tech-icons/typescript.svg",
            description: "A strongly typed programming language that builds on JavaScript",
        },
        {
            id:"html",
            name: "HTML",
            image: "/tech-icons/html.svg",
            description: null,
        },
        {
            id:"css",
            name: "CSS",
            image: "/tech-icons/css.svg",
            description: null,
        },
        {
            id:"git",
            name: "Git",
            image: "/tech-icons/git.svg",
            description: null,
        },
        {
            id:"github",
            name: "GitHub",
            image: "/tech-icons/github.svg",
            description: null,
        },
        {
            id:"wordpress",
            name: "WordPress",
            image: "/tech-icons/wordpress.svg",
            description: null,
        },
        {
            id:"figma",
            name: "Figma",
            image: "/tech-icons/figma.svg",
            description: "A popular UI/UX tool for prototyping and design",
        },
        {
            id:"shadcnui",
            name: "Shadcn UI",
            image: "/tech-icons/shadcnui.svg",
            description: "A powerful UI library for React and Next.js",
        },
        {
            id:"framer-motion",
            name: "Framer Motion",
            image: "/tech-icons/framer-motion.svg",
            description: "A motion library for React and Next.js",
        }
    ],


    projects: [
        {
            title: "Moneybinds Web App",
            description:
            <p className='text-white-100 text-[15px]'>A simple yet powerful personal money management app desgined to reduce complexity and make it easier to manage your money.</p>,
            link: "https://moneybinds.com",
            active: true,
            technologies: [
                "react",
                "javascript",
                "tailwindcss",
                "appwrite",
                "apexcharts",
            ],
            image: "/project-thumbs/demo.png",
            video:
                "#",
        },
        {
            title: "Moneybinds Web App",
            description:
                <p className='text-white-100 text-[15px]'>Started as a finance and crypto blog, Moneybinds has transformed into a useful money management app with the ultimate objective to remove complexity and provide simple yet accurate money tracking. </p>,
            link: "https://moneybinds.com",
            active: true,
            technologies: [
                "react",
                "javascript",
                "tailwindcss",
                "appwrite",
                "apexcharts",
            ],
            image: "/project-thumbs/demo.png",
            video:
                "#",
        },
        {
            title: "Moneybinds Web App",
            description:
                <p className='text-white-100 text-[15px]'>Started as a finance and crypto blog, Moneybinds has transformed into a useful money management app with the ultimate objective to remove complexity and provide simple yet accurate money tracking. </p>,
            link: "https://moneybinds.com",
            active: true,
            technologies: [
                "react",
                "javascript",
                "tailwindcss",
                "appwrite",
                "apexcharts",
            ],
            image: "/project-thumbs/demo.png",
            video:
                "#",
        },
        {
            title: "Moneybinds Web App",
            description:
                <p className='text-white-100 text-[15px]'>Started as a finance and crypto blog, Moneybinds has transformed into a useful money management app with the ultimate objective to remove complexity and provide simple yet accurate money tracking. </p>,
            link: "https://moneybinds.com",
            active: true,
            technologies: [
                "react",
                "javascript",
                "tailwindcss",
                "appwrite",
                "apexcharts",
            ],
            image: "/project-thumbs/demo.png",
            video:
                "#",
        },
        
    ],


    // hackathons: [
    //     {
    //         title: "Hack Western 5",
    //         dates: "November 23rd - 25th, 2018",
    //         location: "London, Ontario",
    //         description:
    //             "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
    //         image:
    //             "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
    //         mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //         links: [],
    //     },
    //     {
    //         title: "DeveloperWeek Hackathon",
    //         dates: "February 3rd - 4th, 2018",
    //         location: "San Francisco, California",
    //         description:
    //             "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
    //         image:
    //             "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
    //         links: [
    //             {
    //                 title: "Github",
    //                 icon: <Icons.github className="h-4 w-4" />,
    //                 href: "https://github.com/cryptotrends/cryptotrends",
    //             },
    //         ],
    //     },
        
    // ],
} as const;
