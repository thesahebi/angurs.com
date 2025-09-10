export interface CustomerRatingModel {
  id: number;
  name: string;
  position: string;
  company: string;
  rating: number;
  content: string;
}

export const customerRatingData: CustomerRatingModel[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CTO",
    company: "TechCorp Solutions",
    rating: 5,
    content: "Angurs delivered exceptional cloud infrastructure that scaled perfectly with our growth. Their team's expertise and 24/7 support made the transition seamless.",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "IT Director",
    company: "Global Enterprises",
    rating: 5,
    content: "Outstanding DevOps automation services! They reduced our deployment time by 80% and improved our system reliability significantly. Highly recommended!",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Operations Manager",
    company: "InnovateTech",
    rating: 5,
    content: "The backup and disaster recovery solutions provided by Angurs saved us during a critical system failure. Their quick response and expertise were invaluable.",
  },
  {
    id: 4,
    name: "David Thompson",
    position: "CEO",
    company: "StartupHub",
    rating: 5,
    content: "From networking setup to cloud migration, Angurs handled everything professionally. Their team's knowledge and customer service are top-notch.",
  },
  {
    id: 5,
    name: "Lisa Wang",
    position: "VP Technology",
    company: "DataFlow Inc",
    rating: 5,
    content: "Angurs transformed our IT infrastructure with their virtualization solutions. The performance improvements and cost savings exceeded our expectations.",
  },
  {
    id: 6,
    name: "Robert Martinez",
    position: "IT Manager",
    company: "SecureNet Systems",
    rating: 5,
    content: "Professional, reliable, and innovative. Angurs helped us modernize our entire IT stack. Their support team is always available when we need them.",
  }
];
