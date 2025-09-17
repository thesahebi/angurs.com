export interface TestimonalDataModel {
  id: number;
  name?: string;
  position: string;
  content?: string;
  imgUrl?: string; // Assuming imgUrl is a string (could be a URL or path to an image)
}


import img1 from "../assets/imgs/profile.jpeg"


export const testimonalData: TestimonalDataModel[] = [
  {
    id: 1,
    name: "John",
    position: "CEO",
    content: "We just completed our new website with Zivara web solutions and are so excited to have it live!! It is so professionally done and eye appealing, not to mention how great it looks and works with mobile devices. We tried it on an iPhone and an droid and it was great on both! We love how easy it is to make changes ourselves, (after some training from Zivara yet know we have the support when/if we need it",
    imgUrl: img1,

  },
  {
    id: 2,
    name: "Khan",
    position: "CEO",
    content: "We have installed Computers and done networking for our office. Zivara web solutions has a super-efficient and cooperative team and their products are extremely important for our day to day life and saves lots of time and money and the advice in these field is very much helpful. I would recommend Zivara and there services for all Computer related requirements. Wishing them a great business ahead.",
    imgUrl: img1,
  },
  {
    id: 3,
    name: "John Smith",
    position: "CEO",
    content: "Please make sure that you thank everyone at Zivara web solutions for all of the work they have done, we are very happy with everything and will be recommending your services to anyone that will listen. Pass it on please		",
    imgUrl: img1,
  }
];
