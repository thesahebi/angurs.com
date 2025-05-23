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
  type: "paragraph" | "list" | "image" | "heading";
  text?: string; // For paragraphs and headings
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
          type: "heading",
          text: "How Fast Can I Get a Simple Website for My Business?",
        },
        {
          type: "paragraph",
          text: "If you’re starting a new business or expanding your existing one, having a website is no longer optional—it’s essential. The good news? You can have a simple, professional website for your business ready within a week!",
        },
        {
          type: "heading",
          text: "Step 1: Decide What You Need (Day 1)",
        },
        {
          type: "paragraph",
          text: "Before building your website, think about its purpose. Do you need a platform to showcase products, provide contact details, or promote services? A clear vision ensures the development process stays focused and efficient.",
        },
        {
          type: "list",
          items: [
            "Home Page: Your first impression—highlight your brand’s value.",
            "About Us: Share your story and build trust.",
            "Products/Services Page: Showcase what you offer.",
            "Contact Us: Make it easy for customers to reach you.",
          ],
        },
        {
          type: "heading",
          text: "Step 2: Choose the Right Platform and Tools (Day 2-3)",
        },
        {
          type: "paragraph",
          text: "For a fast launch, use website builders like Wix, Squarespace, or WordPress. These platforms offer templates that save time and effort. If you prefer a professional touch, hire a web developer who can customize your site to align with your brand.",
        },
        {
          type: "heading",
          text: "Step 3: Set Up Core Pages (Day 4-5)",
        },
        {
          type: "paragraph",
          text: "A simple business website typically includes:",
        },
        {
          type: "heading",
          text: "Step 4: Test and Launch (Day 6-7)",
        },
        {
          type: "paragraph",
          text: "Once your website is ready, test it thoroughly. Ensure all links work, contact forms are functional, and the design looks great on mobile and desktop devices.",
        },
        {
          type: "list",
          items: [
            "Proofread content for errors.",
            "Optimize for search engines (SEO).",
            "Ensure fast loading speeds.",
          ],
        },
        {
          type: "paragraph",
          text: "After these final checks, you’re ready to go live!",
        },
      ],
    },
  },
  // Additional articles...
];
