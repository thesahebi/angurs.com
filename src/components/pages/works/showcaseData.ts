
import project1 from "../../../assets/imgs/projects/SIGHT.webp";
import project2 from "../../../assets/imgs/projects/Yoga1.webp";
import project3 from "../../../assets/imgs/projects/f1.webp";


export interface FrontendShowcaseProps {
    title?: string;
    description?: string;
    bgColor?: string;
    category?: any[];
    tech?: any[];
    imgUrl?: string;
    orderImg?: number,
    orderContent?: number
}

// Sample data with images for 10 records
export const showcaseData: FrontendShowcaseProps[] = [
    {
        title: "UX Design Implementation",
        description: "Transform your design into a live, user-friendly interface",
        bgColor: "bg-blue-600",
        category: ["Frontend", "UI/UX", "Development", "Frontend", "UI/UX", "Development"],
        tech: ["ReactJS", "Redux", "NextJs", "NodeJS", "Rest API", "Development"],
        imgUrl: project1,
        orderImg: 1,
        orderContent: 0
    },
    {
        title: "Responsive Web Development",
        description: "Create websites that work seamlessly across all devices",
        bgColor: "bg-purple-600",
        category: ["Web", "Responsive", "Development"],
        tech: ["ReactJS", "Redux", "NextJs", "NodeJS", "Rest API", "Development"],
        imgUrl: project2,
        orderImg: 0,
        orderContent: 1
    },
    {
        title: "E-commerce Solutions",
        description: "Build modern e-commerce experiences with advanced features",
        bgColor: "bg-green-600",
        category: ["E-commerce", "Frontend", "Shopping"],
        tech: ["ReactJS", "Redux", "NextJs", "NodeJS", "Rest API", "Development"],
        imgUrl: project3,
        orderImg: 1,
        orderContent: 0
    },
    {
        title: "Mobile App Development",
        description: "Develop cross-platform mobile applications with React Native",
        bgColor: "bg-orange-400",
        category: ["Mobile", "Apps", "Cross-platform"],
        tech: ["ReactJS", "Redux", "NextJs", "NodeJS", "Rest API", "Development"],
        imgUrl: project2,
        orderImg: 0,
        orderContent: 1
    },

    {
        title: "Landing Page Optimization",
        description: "Optimize landing pages for better conversion rates",
        bgColor: "bg-pink-600",
        category: ["Marketing", "Optimization", "Landing"],
        tech: ["ReactJS", "Redux", "NextJs", "NodeJS", "Rest API", "Development"],
        imgUrl: project1,
        orderImg: 1,
        orderContent: 0
    },
    {
        title: "Progressive Web Apps",
        description: "Build fast, reliable, and engaging progressive web apps",
        bgColor: "bg-teal-600",
        category: ["PWA", "Performance", "Web"],
        tech: ["ReactJS", "Redux", "NextJs", "NodeJS", "Rest API", "Development"],
        imgUrl: project3,
        orderImg: 0,
        orderContent: 1
    },
    {
        title: "Interactive Prototypes",
        description: "Create interactive prototypes for better user testing",
        bgColor: "bg-red-600",
        category: ["Prototyping", "Testing", "Design"],
        tech: ["ReactJS", "Redux", "NextJs", "NodeJS", "Rest API", "Development"],
        imgUrl: project1,
        orderImg: 1,
        orderContent: 0
    },
    {
        title: "API Integration",
        description: "Seamlessly integrate backend APIs with frontend interfaces",
        bgColor: "bg-cyan-600",
        category: ["API", "Integration", "Backend"],
        tech: ["ReactJS", "Redux", "NextJs", "NodeJS", "Rest API", "Development"],
        imgUrl: project2,
        orderImg: 0,
        orderContent: 1
    },
    {
        title: "Performance Optimization",
        description: "Optimize web applications for maximum performance",
        bgColor: "bg-amber-600",
        category: ["Performance", "Speed", "Optimization"],
        tech: ["ReactJS", "Redux", "NextJs", "NodeJS", "Rest API", "Development"],
        imgUrl: project3, orderImg: 1,
        orderContent: 0
    }
];
