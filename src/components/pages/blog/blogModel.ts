
export interface Article {
  id?: number;
  category?: string;
  date?: string;
  title?: string;
  image?: string;
  linkD?: string;
  blogLink?: string;
  details?: ArticleDetails;
}

export interface ArticleDetails {
  content?: ContentBlock[];
}

export interface ContentBlock {
  type: "paragraph" | "list" | "image";
  text?: string; // For paragraphs
  items?: string[]; // For lists
  url?: string; // For images
  caption?: string; // For image captions
}



export const articles: Article[] = [
  {
    id: 1,
    category: "Growth",
    date: "April 09, 2022",
    title: "How Fast Can I Get a Simple Website for My Business?",
    image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34",
    details: {
      content: [
        {
          type: "paragraph",
          text: "Graphic design is an ever-evolving field where success is redefined by the creative ingenuity of individuals. The ability to adapt to trends while maintaining a unique style is key to standing out in this industry.",
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
          caption: "A creative workspace filled with inspiration.",
        },
        {
          type: "paragraph",
          text: "For aspiring visual artists, breaking into the graphic design world often means understanding the delicate balance between creative freedom and client demands. This article explores strategies for success.",
        },
        {
          type: "list",
          items: [
            "Master the fundamentals of design principles.",
            "Build a strong and versatile portfolio.",
            "Stay updated with the latest design tools and trends.",
            "Collaborate with other creatives to broaden your perspective.",
          ],
        },
        {
          type: "paragraph",
          text: "Networking is another vital aspect. Attending industry events, joining online communities, and building meaningful relationships can open doors to new opportunities and collaborations.",
        },
        {
          type: "image",
          url: "https://plus.unsplash.com/premium_photo-1661284836545-3a6ec65fcffc",
          caption: "A designer presenting their work to a client.",
        },
        {
          type: "paragraph",
          text: "By following these principles and embracing change, graphic designers can carve a path to success that resonates with their personal and professional aspirations.",
        },
        {
          type: "list",
          items: [
            "Invest in continuous learning.",
            "Experiment with diverse styles and techniques.",
            "Seek constructive feedback from peers and mentors.",
          ],
        },
        {
          type: "paragraph",
          text: "In conclusion, success in graphic design is not about following a rigid formula. It's about finding a balance between passion, skill, and adaptability while staying true to your artistic vision.",
        },
      ],
    },
  },
  {
    id: 2,
    category: "Growth",
    date: "April 09, 2022",
    title: "What Do I Need for a Business Website to Be Legit?",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    details: {
      content: [
        {
          type: "paragraph",
          text: "Selecting the right theme for your WooCommerce store is critical for its success. A good theme ensures better usability and enhances the shopping experience.",
        },
        {
          type: "list",
          items: [
            "Boosting user engagement with attractive visuals.",
            "Ensuring responsive design for all devices.",
            "Increasing conversions with intuitive navigation.",
          ],
        },
        {
          type: "paragraph",
          text: "This guide walks you through the benefits of investing in a theme that matches your brand and business goals.",
        },
      ],
    },
  },
  {
    id: 3,
    category: "Growth",
    date: "April 09, 2022",
    title: "Already Have a Website? Here’s How to Make Changes",
    image: "https://plus.unsplash.com/premium_photo-1661281282296-3fa2a9f73dbe",
    details: {
      content: [
        {
          type: "paragraph",
          text: "Telling the story behind your photographs can enhance their impact. Writing engaging content about your photos is a skill every photographer should develop.",
        },
        {
          type: "list",
          items: [
            "Tips for writing compelling photo descriptions.",
            "Using storytelling to connect with your audience.",
            "How to highlight the technical and artistic aspects of your shots.",
          ],
        },
        {
          type: "paragraph",
          text: "By mastering this skill, you can elevate your portfolio and create deeper connections with your audience.",
        },
      ],
    },
  },
  {
    id: 4,
    category: "Growth",
    date: "April 09, 2022",
    title: "Lessons and insights from 8 years of Pixelgrade",
    image: "https://plus.unsplash.com/premium_photo-1661274202754-abde708db7d0",
    details: {
      content: [
        {
          type: "paragraph",
          text: "Pixelgrade’s journey over the last 8 years has been filled with challenges, growth, and invaluable lessons. This retrospective shares key insights.",
        },
        {
          type: "list",
          items: [
            "How to build a user-first approach in design.",
            "Navigating challenges in a competitive industry.",
            "Scaling a business while staying true to core values.",
          ],
        },
        {
          type: "paragraph",
          text: "Discover how Pixelgrade transformed its vision into a thriving business while staying innovative.",
        },
      ],
    },
  },
  {
    id: 5,
    category: "Growth",
    date: "April 09, 2022",
    title: "Travelling as a way of self-discovery and progress",
    image: "https://plus.unsplash.com/premium_photo-1661284836545-3a6ec65fcffc",
    details: {
      content: [
        {
          type: "paragraph",
          text: "Traveling isn't just about exploring new places—it's a journey inward, helping you discover more about yourself.",
        },
        {
          type: "list",
          items: [
            "How travel broadens your perspective.",
            "The link between travel and personal growth.",
            "Tips for meaningful and reflective travel experiences.",
          ],
        },
        {
          type: "paragraph",
          text: "This article explores the transformative power of travel and how it can lead to personal and professional growth.",
        },
      ],
    },
  },
  {
    id: 6,
    category: "Growth",
    date: "April 09, 2022",
    title: "The unseen of spending three years at Pixelgrade",
    image: "https://plus.unsplash.com/premium_photo-1661277712617-1e46eac647e8",
    details: {
      content: [
        {
          type: "paragraph",
          text: "Spending three years at Pixelgrade has brought both challenges and achievements. This article provides a behind-the-scenes look at the journey.",
        },
        {
          type: "list",
          items: [
            "The importance of building a strong team culture.",
            "Innovative projects that shaped the company’s identity.",
            "Lessons learned from client interactions and feedback.",
          ],
        },
        {
          type: "paragraph",
          text: "Gain a deeper understanding of the experiences that have defined Pixelgrade’s mission and vision.",
        },
      ],
    },
  }
 
  
];
