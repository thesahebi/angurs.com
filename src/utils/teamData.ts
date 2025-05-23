interface TeamMember {
  id: number;
  name: string;
  job: string;
  expir: number;
  imgUrl: string; 
  details?: string; 
}


import rostam from "../assets/imgs/rostam.webp";
import hayat from "../assets/imgs/hayat.webp";
import yahya from "../assets/imgs/yahya.webp";
import khaled from "../assets/imgs/khaled.webp";
import yuri from "../assets/imgs/yuri.webp";


export const teamMember: TeamMember[] = [
  {
    id: 1,
    name: "Rostam Sadiqi",
    job: "Front End Developer",
    expir: 5,
    imgUrl: rostam,
  },
  {
    id: 2,
    name: "Hayatullah Rahnamoon",
    job: "Full Stack Developer",
    expir: 5,
    imgUrl: hayat,
  },
  {
    id: 3,
    name: "Yahya Rahimi",
    job: "Java Developer",
    expir: 5,
    imgUrl: yahya,
  },
  {
    id: 4,
    name: "Khalid Bayat",
    job: "Backend Developer",
    expir: 5,
    imgUrl: khaled,
  },
  {
    id: 5,
    name: " Ali",
    job: "CEO",
    expir: 5,
    imgUrl: yuri,
  },
  // {
  //   id: 6,
  //   name: "Rostam Sadiqi",
  //   job: "Front End Developer",
  //   expir: 5,
  //   imgUrl: fram3,
  // },
  // {
  //   id: 7,
  //   name: "Hayatullah Rahnamoon",
  //   job: "Full Stack Developer",
  //   expir: 5,
  //   imgUrl: fram2,
  // },
  // {
  //   id: 8,
  //   name: "Yahya Rahimi",
  //   job: "Java Developer",
  //   expir: 5,
  //   imgUrl: fram1,
  // },
  // {
  //   id: 9,
  //   name: "Khalid Bayat",
  //   job: "Backend Developer",
  //   expir: 5,
  //   imgUrl: fram4,
  // },
  // {
  //   id: 10,
  //   name: "Ramazan Ali",
  //   job: "CEO",
  //   expir: 5,
  //   imgUrl: fram5,
  // },
];
export const teamMemberV2: TeamMember[] = [
  {
    id: 1,
    name: "Rostam Sadiqi",
    job: "Front End Developer",
    details: "Clarity gives you the blocks & components you need to create a truly professional website, landing page for your SaaS. Lorem ipsum dolor sit amet, consectetur adipis cing elit. Sodales non nunc bibendum tristique sit mi non vitae. Maecenas nulla.",
    expir: 5,
    imgUrl: rostam,
  },
  {
    id: 2,
    name: "Hayatullah Rahnamoon",
    job: "Full Stack Developer",
    expir: 5,
    details: "Clarity gives you the blocks & components you need to create a truly professional website, landing page for your SaaS. Lorem ipsum dolor sit amet, consectetur adipis cing elit. Sodales non nunc bibendum tristique sit mi non vitae. Maecenas nulla.",
   
    imgUrl: hayat,
  },
  {
    id: 3,
    name: "Yahya Rahimi",
    job: "Java Developer",
    details: "Clarity gives you the blocks & components you need to create a truly professional website, landing page for your SaaS. Lorem ipsum dolor sit amet, consectetur adipis cing elit. Sodales non nunc bibendum tristique sit mi non vitae. Maecenas nulla.",
   
    expir: 5,
    imgUrl: yahya,
  },
  {
    id: 4,
    name: "Khalid Bayat",
    job: "Backend Developer",
    details: "Clarity gives you the blocks & components you need to create a truly professional website, landing page for your SaaS. Lorem ipsum dolor sit amet, consectetur adipis cing elit. Sodales non nunc bibendum tristique sit mi non vitae. Maecenas nulla.",
   
    expir: 5,
    imgUrl: khaled,
  },
  {
    id: 5,
    name: "Ramazan Ali",
    job: "CEO",
    details: "Clarity gives you the blocks & components you need to create a truly professional website, landing page for your SaaS. Lorem ipsum dolor sit amet, consectetur adipis cing elit. Sodales non nunc bibendum tristique sit mi non vitae. Maecenas nulla.",
   
    expir: 5,
    imgUrl: yuri,
  },
  // {
  //   id: 6,
  //   name: "Rostam Sadiqi",
  //   job: "Front End Developer",
  //   expir: 5,
  //   imgUrl: fram3,
  // },
  // {
  //   id: 7,
  //   name: "Hayatullah Rahnamoon",
  //   job: "Full Stack Developer",
  //   expir: 5,
  //   imgUrl: fram2,
  // },
  // {
  //   id: 8,
  //   name: "Yahya Rahimi",
  //   job: "Java Developer",
  //   expir: 5,
  //   imgUrl: fram1,
  // },
  // {
  //   id: 9,
  //   name: "Khalid Bayat",
  //   job: "Backend Developer",
  //   expir: 5,
  //   imgUrl: fram4,
  // },
  // {
  //   id: 10,
  //   name: "Ramazan Ali",
  //   job: "CEO",
  //   expir: 5,
  //   imgUrl: fram5,
  // },
];
