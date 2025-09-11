// feature-data.ts
import { FaUser, FaCode, FaCloud, FaChartLine, FaReact, FaNodeJs, FaAngular, FaVuejs, FaPython, FaPhp, FaCss3, FaHtml5, FaSwift, FaJava, FaFigma } from "react-icons/fa6";
import { FeatureModelProps, ProgramModelProps } from "./feature-model";
import { FaJsSquare, FaPencilRuler } from "react-icons/fa";
import { SiTypescript, SiCsharp, SiGo, SiRuby } from "react-icons/si";

export const featureData: FeatureModelProps[] = [
    {
        id: 1,
        icon: FaCloud,
        title: "Cloud as a Service (CSP)",
        content: "Scale smarter with secure, reliable, and cost-efficient cloud solutions",
        iconColor: "#ea580c",
        bgColor: "#dbeafe"
    },
    {
        id: 2,
        icon: FaUser,
        title: "Staff as a Service (StaaS)",
        content: "Extend your team with our experts, from strategy to delivery",
        iconColor: "#2563eb",
        bgColor: "#dbeafe"
    },
    {
        id: 3,
        icon: FaCode,
        title: "Code as a Service (CaaS)",
        content: "Transform your ideas into powerful apps and websites, built to scale",
        iconColor: "#ea580c",
        bgColor: "#ffedd5"
    },
    {
        id: 4,
        icon: FaCode,
        title: "Software as a Service (SaaS)",
        content: "Seamless hosting and storage with secure, reliable cloud infrastructure",
        iconColor: "#2563eb",
        bgColor: "#d1fae5"
    }
];
export const brandinfData: FeatureModelProps[] = [
    {
        id: 1,
        icon: FaChartLine,
        title: "Creative Design, Bring Your Brand to Life",
        content: "Websites, apps, and digital experiences built to reflect your brand, engage your audience, and leave a lasting impression everywhere",
        iconColor: "#2563eb",
        bgColor: "#dbeafe"
    },
    {
        id: 2,
        icon: FaPencilRuler,
        title: "Development, Ideas Into Digital Reality",
        content: "We turn your vision into scalable websites, apps, and systems — all easy to manage, update, and evolve as your business grows.",
        iconColor: "#ea580c",
        bgColor: "#ffedd5"
    },
    {
        id: 3,
        icon: FaCode,
        title: "Cloud migration, Seamless, Secure, Scalable",
        content: "Move to the cloud with minimal downtime and maximum security. Unlock reliability, flexibility, and growth powered by cloud technology.",
        iconColor: "#059669",
        bgColor: "#d1fae5"
    },
    {
        id: 4,
        icon: FaCloud,
        title: "Domain & Hosting, The Essentials, Covered",
        content: "From the perfect name to secure hosting, we handle the foundation that keeps your business online, discoverable, and ready to scale.",
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
    {
        id: 8,
        icon: FaSwift,
        name: "Swift",
    },
    {
        id: 9,
        icon: FaHtml5,
        name: "HTML5",
    },
    {
        id: 10,
        icon: FaCss3,
        name: "CSS3",
    },
    {
        id: 11,
        icon: FaJsSquare,
        name: "JavaScript",
    },
    {
        id: 12,
        icon: SiTypescript,
        name: "TypeScript",
    },
    {
        id: 13,
        icon: SiCsharp,
        name: "C#",
    },
    {
        id: 14,
        icon: SiGo,
        name: "Go",
    },
    {
        id: 15,
        icon: SiRuby,
        name: "Ruby",
    },
    {
        id: 16,
        icon: FaFigma,
        name: "Figma",
    },
];
