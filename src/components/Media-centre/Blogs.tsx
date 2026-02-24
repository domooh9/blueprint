import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import blogPhoto1 from "@/assets/Picture4.png";
import blogPhoto2 from "@/assets/Picture3.png";
import blogPhoto3 from "@/assets/Kevin.jpg";
import blogPhoto4 from "@/assets/imageb.jpeg";

const blogPosts = [
  {
    title: "How Embedded Finance Is Transforming Everyday Business",
    summary:
      "From retail checkouts to utility payments, embedded finance is changing how customers interact with digital products.",
    image: blogPhoto1,
    author: "Finserve Editorial",
    date: "Jan 12, 2026",
    readTime: "5 min read",
    category: "Fintech Trends",
  },
  {
    title: "Designing Secure Payment Journeys That Convert",
    summary:
      "Security and user experience are not trade-offs. Learn practical design patterns for safer payment flows that reduce drop-offs.",
    image: blogPhoto2,
    author: "Product Team",
    date: "Feb 03, 2026",
    readTime: "7 min read",
    category: "Payments",
  },
  {
    title: "Building for Scale: APIs, Reliability, and Trust",
    summary:
      "Modern digital finance products require resilient API architecture, strong observability, and uptime discipline.",
    image: blogPhoto3,
    author: "Engineering Team",
    date: "Feb 10, 2026",
    readTime: "6 min read",
    category: "Engineering",
  },
  {
    title: "Financial Inclusion Through Smarter Digital Channels",
    summary:
      "How mobile-first platforms can expand access to formal financial services for individuals and small businesses.",
    image: blogPhoto4,
    author: "Growth Team",
    date: "Feb 18, 2026",
    readTime: "4 min read",
    category: "Inclusion",
  },
];

const Blogs = () => {
  return (
    <section className="space-y-10">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Insights & Blogs</h2>
        <p className="text-lg text-gray-600">
          Practical perspectives on fintech, payments, digital trust, and the future of financial services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <Card
            key={post.title}
            className="overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="h-56 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <CardContent className="p-6">
              <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4">
                {post.category}
              </span>

              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">{post.title}</h3>
              <p className="text-gray-600 mb-5 leading-relaxed">{post.summary}</p>

              <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
                <div className="flex items-center gap-4">
                  <span>{post.author}</span>
                  <span className="flex items-center gap-1">
                    <CalendarDays className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock3 className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
              </div>

              <Button className="mt-5 rounded-full px-6 py-2 inline-flex items-center gap-2">
                Read More
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
