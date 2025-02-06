import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Blog = () => {
  const [filter, setFilter] = useState("all");
  const [readingProgress, setReadingProgress] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    const handleScroll = () => {
      if (!scrollRef.current) return;

      const totalHeight =
        scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const blogPosts = [
    {
      title: "The Future of AI in Enterprise Solutions",
      category: "technology",
      date: "Jan 5, 2025",
      readTime: "5 min read",
      author: "John Anderson",
      authorImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
      excerpt:
        "Exploring how artificial intelligence is revolutionizing enterprise solutions and transforming business operations.",
      tags: ["AI", "Enterprise", "Innovation"],
      featured: true,
      content: `Artificial Intelligence is reshaping the enterprise landscape at an unprecedented pace. From automating routine tasks to providing deep insights through data analysis, AI is becoming an indispensable tool for modern businesses.

      In this comprehensive guide, we'll explore:
      • How AI is transforming different sectors
      • Implementation strategies for enterprise AI
      • Real-world success stories
      • Future predictions and trends`,
    },
    {
      title: "Building Scalable Cloud Architecture",
      category: "development",
      date: "Jan 3, 2025",
      readTime: "7 min read",
      author: "Sarah Mitchell",
      authorImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
      excerpt:
        "Best practices for designing and implementing scalable cloud architectures for modern applications.",
      tags: ["Cloud", "Architecture", "DevOps"],
      featured: false,
    },
    {
      title: "UX Design Trends for 2025",
      category: "design",
      date: "Jan 1, 2025",
      readTime: "4 min read",
      author: "Emily Rodriguez",
      authorImage:
        "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=100&h=100&fit=crop",
      image:
        "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&h=500&fit=crop",
      excerpt:
        "Discover the latest trends in user experience design that will shape the digital landscape in 2025.",
      tags: ["UX Design", "Trends", "UI"],
      featured: false,
    },
    {
      title: "The Rise of Edge Computing",
      category: "technology",
      date: "Dec 28, 2024",
      readTime: "6 min read",
      author: "David Chen",
      authorImage:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&h=100&fit=crop",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
      excerpt:
        "Understanding the impact of edge computing on modern application architecture and performance.",
      tags: ["Edge Computing", "IoT", "Technology"],
      featured: false,
    },
    {
      title: "Mastering React Performance",
      category: "development",
      date: "Dec 25, 2024",
      readTime: "8 min read",
      author: "Michael Kim",
      authorImage:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop",
      excerpt:
        "Advanced techniques for optimizing React applications and improving user experience.",
      tags: ["React", "Performance", "JavaScript"],
      featured: false,
    },
    {
      title: "Digital Marketing Strategies",
      category: "marketing",
      date: "Dec 22, 2024",
      readTime: "5 min read",
      author: "Lisa Thompson",
      authorImage:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      excerpt:
        "Effective digital marketing strategies for reaching and engaging your target audience.",
      tags: ["Marketing", "Digital", "Strategy"],
      featured: false,
    },
  ];

  const categories = [
    { id: "all", label: "All Posts" },
    { id: "technology", label: "Technology" },
    { id: "development", label: "Development" },
    { id: "design", label: "Design" },
    { id: "marketing", label: "Marketing" },
  ];

  const filteredPosts =
    filter === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === filter);

  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <div className="w-screen overflow-hidden" ref={scrollRef}>
      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-primary-500 z-50 transition-all duration-300"
        style={{ width: `${readingProgress}%` }}
      />

      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute bg-black inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsb2d8ZW58MHx8MHx8fDA%3D?w=1080&auto=format&fit=crop&q=60"
            alt="Blog Hero"
            className="w-full h-full bg-black opacity-50   object-cover"
          />
          <div className="absolute inset-0 bg-dark-900/70"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Cormorant'] tracking-wider text-white mb-4"
            data-aos="fade-down"
          >
            Insights & Innovation
          </h1>
          <p
            className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Dive into the latest trends, insights, and innovations in technology, development, and digital transformation.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 sm:py-16 bg-gray-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-wrap gap-4 justify-center mb-12"
            data-aos="fade-up"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full capitalize ${
                  filter === category.id
                    ? "bg-primary-500 text-white"
                    : "bg-blue-400 text-dark-900 "
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>

          {/* Featured Post */}
          {featuredPost && filter === "all" && (
            <motion.div
              className="mb-12 bg-black rounded-xl overflow-hidden shadow-lg"
              data-aos="fade-up"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent lg:bg-gradient-to-r" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <img
                      src={featuredPost.authorImage}
                      alt={featuredPost.author}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="text-gray-300 font-medium">{featuredPost.author}</p>
                      <p className="text-gray-400 text-sm">{featuredPost.date} · {featuredPost.readTime}</p>
                    </div>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-dark-800 text-primary-400 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors duration-300">
                    Read More
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts
              .filter((post) => !post.featured || filter !== "all")
              .map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-black rounded-xl overflow-hidden shadow-lg flex flex-col h-full"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center mb-4">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <div>
                        <p className="text-gray-300 text-sm font-medium">{post.author}</p>
                        <p className="text-gray-400 text-xs">{post.date} · {post.readTime}</p>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-100 group-hover:text-primary-500">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 flex-grow">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-sm bg-dark-800 text-primary-400 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
          </div>
        </div>
      </section>

       {/* CTA Section */}
       <section className="cta-section py-20">
        <div className="container mx-auto px-4">
          <div className="cta-content text-center">
            <h2 className="text-4xl font-bold font-['Orbitron'] tracking-wider mb-6" data-aos="fade-down">
              Ready to Transform Your Business?
            </h2>
            <p
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Let's work together to bring your vision to life with our expert IT consulting services.
            </p>
            <Link
              to="/contact"
              className="cta-button"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Start Your Project
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
