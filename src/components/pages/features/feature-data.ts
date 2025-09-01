// feature-data.ts
import { FaUser, FaCode, FaCloud, FaChartLine, FaReact, FaNodeJs, FaAngular, FaVuejs, FaPython, FaPhp, FaGitAlt, FaDatabase, FaCss3, FaHtml5, FaSwift, FaJava, FaLinux, FaDocker, FaFigma } from "react-icons/fa6";
import { FeatureModelProps, ProgramModelProps } from "./feature-model";
import { FaJsSquare, FaPencilRuler } from "react-icons/fa";

export const featureData: FeatureModelProps[] = [
    {
        id: 1,
        icon: FaUser,
        title: "Staff as a Service (StaaS)",
        content: "Get Our Expert Team to Help You with Your Projects – From Start to Finish",
        iconColor: "#2563eb",
        bgColor: "#dbeafe"
    },
    {
        id: 2,
        icon: FaCode,
        title: "Code as a Service (CaaS)",
        content: "Turn Your Ideas Into Websites and Apps with Our Expert Team",
        iconColor: "#ea580c",
        bgColor: "#ffedd5"
    },
    {
        id: 3,
        icon: FaCloud,
        title: "Software as a Service (SaaS)",
        content: "Easy Hosting and Storage for Your Apps with Our Reliable Servers",
        iconColor: "#059669",
        bgColor: "#d1fae5"
    }
];
export const brandinfData: FeatureModelProps[] = [
    {
        id: 1,
        icon: FaChartLine,
        title: "Creative Design",
        content: "Design That Brings Your Brand to Life We create websites, web apps, mobile applications, and surveys—all designed to reflect your brand and engage your audience. Our designs attract visitors, build trust, and leave a lasting impression across every platform.",
        iconColor: "#2563eb",
        bgColor: "#dbeafe"
    },
    {
        id: 2,
        icon: FaPencilRuler,
        title: "Development",
        content: "From Your Ideas to the Web Anything in your mind can be turned into something amazing on the internet. We make your ideas come to life through websites, apps, and systems, giving you the power to easily manage and update everything with a simple web browser.",
        iconColor: "#ea580c",
        bgColor: "#ffedd5"
    },
    {
        id: 3,
        icon: FaCode,
        title: "Cloud migration",
        content: "Seamlessly migrate your business to the cloud with minimal downtime and maximum security.",
        iconColor: "#059669",
        bgColor: "#d1fae5"
    },
    {
        id: 4,
        icon: FaCloud,
        title: "Space & Business Name",
        content: "We Handle the Essentials We take care of everything to get your website online, including finding the perfect space for it and choosing the best name for your business. This means your website is always live, easy to find, and ready to represent you, while you focus on growing your business.",
        iconColor: "#352542",
        bgColor: "#dbeafe"
    }
];



export const programmingData: ProgramModelProps[] = [
    {
        id: 1,
        icon: FaReact,
        name: "ReactJS",
    },
    {
        id: 2,
        icon: FaNodeJs,
        name: "NodeJS",
    },
    {
        id: 3,
        icon: FaAngular,
        name: "Angular",
    },
    {
        id: 4,
        icon: FaVuejs,
        name: "VueJS",
    },
    {
        id: 5,
        icon: FaPython,
        name: "Python",
    },
    {
        id: 6,
        icon: FaPhp,
        name: "PHP",
    },
    {
        id: 7,
        icon: FaJava,
        name: "Java",
    },
    // {
    //     id: 8,
    //     icon: FaRust,
    //     name: "Rust",
    // },
    {
        id: 9,
        icon: FaSwift,
        name: "Swift",
    },
    {
        id: 10,
        icon: FaHtml5,
        name: "HTML5",
    },
    {
        id: 11,
        icon: FaCss3,
        name: "CSS3",
    },
    {
        id: 12,
        icon: FaJsSquare,
        name: "JavaScript",
    },
    {
        id: 13,
        icon: FaDatabase,
        name: "SQL",
    },
    {
        id: 14,
        icon: FaGitAlt,
        name: "Git",
    },
    // {
    //     id: 15,
    //     icon: FaCuttlefish,
    //     name: "C",
    // },
    // {
    //     id: 16,
    //     icon: FaCode,
    //     name: "C++",
    // },
    {
        id: 17,
        icon: FaLinux,
        name: "Linux",
    },
    {
        id: 18,
        icon: FaDocker,
        name: "Docker",
    },
    {
        id: 19,
        icon: FaFigma,
        name: "Figma",
    },
];
