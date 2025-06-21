import { useState } from "react";
import {
  Search,
  Calendar,
  Clock,
  User,
  Tag,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Badge } from "~/components/ui/badge";

// Sample blog data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React and Next.js: A Beginner's Guide",
    excerpt:
      "Learn the fundamentals of React and Next.js to build modern web applications. This comprehensive guide covers everything from setup to deployment.",
    content: `
# Getting Started with React and Next.js

React and Next.js have revolutionized the way we build web applications. In this comprehensive guide, we'll explore the fundamentals and get you started on your journey.

## What is React?

React is a JavaScript library for building user interfaces, particularly web applications. It was developed by Facebook and has become one of the most popular frontend frameworks.

### Key Features:
- Component-based architecture
- Virtual DOM for better performance
- Unidirectional data flow
- Large ecosystem and community

## What is Next.js?

Next.js is a React framework that provides additional features like server-side rendering, static site generation, and built-in routing.

### Benefits of Next.js:
- Server-side rendering (SSR)
- Static site generation (SSG)
- Built-in routing
- Image optimization
- API routes

## Getting Started

To create a new Next.js project, run:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

This will create a new Next.js application with all the necessary dependencies and configuration.

## Conclusion

React and Next.js provide a powerful foundation for building modern web applications. Start with the basics and gradually explore more advanced features as you become comfortable with the fundamentals.
    `,
    author: "Tsedey Solomon",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["React", "Next.js", "JavaScript", "Frontend"],
    featured: true,
  },
  {
    id: 2,
    title: "Understanding Microcontrollers: 8051 vs ARM Architecture",
    excerpt:
      "A deep dive into microcontroller architectures, comparing the classic 8051 with modern ARM processors and their use cases in embedded systems.",
    content: `
# Understanding Microcontrollers: 8051 vs ARM Architecture

Microcontrollers are the heart of embedded systems. Let's explore two popular architectures and understand their differences.

## The 8051 Microcontroller

The 8051 is a classic 8-bit microcontroller that has been widely used in embedded applications for decades.

### Key Features:
- 8-bit CPU
- 4KB ROM
- 128 bytes RAM
- 32 I/O pins
- Simple instruction set

## ARM Architecture

ARM processors represent modern microcontroller design with powerful features and energy efficiency.

### Advantages:
- 32-bit architecture
- Low power consumption
- Rich instruction set
- Advanced peripherals
- Scalable performance

## Choosing the Right Architecture

The choice between 8051 and ARM depends on your project requirements, complexity, and performance needs.
    `,
    author: "John Doe",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Embedded Systems",
    tags: ["8051", "ARM", "Microcontrollers", "Embedded"],
    featured: false,
  },
  {
    id: 3,
    title: "My Experience with POS Systems: Lessons from PEDS Internship",
    excerpt:
      "Insights and lessons learned during my internship at PEDS, working with cash register systems and providing ICT support to retail clients.",
    content: `
# My Experience with POS Systems: Lessons from PEDS Internship

During my internship at PEDS, I gained valuable hands-on experience with point-of-sale systems and learned about the challenges of retail technology.

## What I Learned

Working with cash register systems taught me about:
- Hardware troubleshooting
- Customer service
- System reliability
- Real-world problem solving

## Common Issues

The most frequent problems I encountered were:
- Network connectivity issues
- Hardware malfunctions
- Software configuration problems
- User training needs

## Key Takeaways

This experience taught me the importance of reliable systems in business operations and the value of good technical support.
    `,
    author: "John Doe",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Career",
    tags: ["POS", "Internship", "Career", "Technical Support"],
    featured: false,
  },
  {
    id: 4,
    title: "Building Responsive Web Applications with Tailwind CSS",
    excerpt:
      "Learn how to create beautiful, responsive designs using Tailwind CSS utility classes and best practices for modern web development.",
    content: `
# Building Responsive Web Applications with Tailwind CSS

Tailwind CSS has changed how we approach styling in web development. Let's explore how to build responsive applications effectively.

## Why Tailwind CSS?

Tailwind provides utility-first CSS classes that make styling fast and consistent.

### Benefits:
- Rapid development
- Consistent design system
- Small bundle size
- Responsive design utilities

## Responsive Design Principles

Using Tailwind's responsive prefixes, you can create designs that work on all devices.

## Best Practices

- Use consistent spacing
- Follow mobile-first approach
- Leverage component patterns
- Optimize for performance
    `,
    author: "John Doe",
    date: "2023-12-28",
    readTime: "10 min read",
    category: "Web Development",
    tags: ["Tailwind CSS", "Responsive Design", "CSS", "Frontend"],
    featured: false,
  },
  {
    id: 5,
    title: "IoT Projects with Microcontrollers: Home Automation Basics",
    excerpt:
      "Explore the world of IoT by building simple home automation projects using microcontrollers and sensors.",
    content: `
# IoT Projects with Microcontrollers: Home Automation Basics

The Internet of Things (IoT) opens up exciting possibilities for home automation. Let's build some basic projects.

## Getting Started with IoT

IoT combines hardware, software, and connectivity to create smart systems.

### Essential Components:
- Microcontroller (Arduino, ESP32)
- Sensors (temperature, motion, light)
- Actuators (relays, motors, LEDs)
- Connectivity (WiFi, Bluetooth)

## Simple Projects

Start with these beginner-friendly projects:
1. Smart LED control
2. Temperature monitoring
3. Motion detection system
4. Automated plant watering

## Scaling Up

Once comfortable with basics, explore more complex automation scenarios.
    `,
    author: "John Doe",
    date: "2023-12-20",
    readTime: "15 min read",
    category: "IoT",
    tags: ["IoT", "Home Automation", "Arduino", "Sensors"],
    featured: true,
  },
  {
    id: 6,
    title: "Database Design Best Practices for Web Applications",
    excerpt:
      "Essential principles for designing efficient and scalable databases for modern web applications, including normalization and indexing strategies.",
    content: `
# Database Design Best Practices for Web Applications

Good database design is crucial for application performance and maintainability. Let's explore key principles.

## Fundamental Principles

### Normalization
- Eliminate data redundancy
- Ensure data integrity
- Improve storage efficiency

### Indexing Strategy
- Index frequently queried columns
- Avoid over-indexing
- Monitor query performance

## Common Patterns

Learn about common database patterns and when to use them.

## Performance Optimization

Tips for optimizing database performance in production applications.
    `,
    author: "John Doe",
    date: "2023-12-15",
    readTime: "11 min read",
    category: "Backend",
    tags: ["Database", "SQL", "Performance", "Backend"],
    featured: false,
  },
];

const categories = [
  "All",
  "Web Development",
  "Embedded Systems",
  "Career",
  "Python",
  "Backend",
];

export default function blog() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  // Featured posts
  const featuredPosts = blogPosts.filter((post) => post.featured);

  if (selectedPost) {
    const post = blogPosts.find((p) => p.id === selectedPost);
    if (!post) return null;

    return (
      <div className="min-h-screen ">
        <div className="container py-8">
          <Button
            variant="ghost"
            onClick={() => setSelectedPost(null)}
            className="mb-6"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>

          <article className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6 ml-20">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    <Tag className="mr-1 h-3 w-3" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div
                dangerouslySetInnerHTML={{
                  __html: post.content.replace(/\n/g, "<br />"),
                }}
              />
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen ml-24 ">
      <div className="container py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development, embedded
            systems, and technology
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-12 ml-16">
            <h2 className="text-2xl font-bold mb-6">Featured Posts</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <Badge variant="outline">Featured</Badge>
                    </div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      className="w-full justify-between"
                      onClick={() => setSelectedPost(post.id)}
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Search and Filter */}
        <div className="mb-8 ml-16">
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="relative flex-1 ">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-6 text-muted-foreground" />
              <Input
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-12"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 ml-10 ">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8 ml-16">
          {paginatedPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  {post.category}
                </Badge>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="w-full justify-between"
                  onClick={() => setSelectedPost(post.id)}
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>

            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                )
              )}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No posts found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or category filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
