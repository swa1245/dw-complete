import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AiContent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const features = [
    'Natural Language Generation',
    'Content Optimization',
    'Multi-language Support',
    'SEO Analysis',
    'Plagiarism Detection',
    'Content Performance Analytics'
  ];

  const technologies = [
    { name: 'Python', icon: '🐍' },
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'GPT-3', icon: '🤖' },
    { name: 'FastAPI', icon: '⚡' },
    { name: 'React', icon: '⚛️' }
  ];

  const challenges = [
    {
      title: 'Content Quality',
      description: 'Ensuring AI-generated content maintains human-like quality and creativity.',
      solution: 'Developed hybrid AI models combining GPT-3 with custom fine-tuning.'
    },
    {
      title: 'Language Accuracy',
      description: 'Supporting multiple languages while maintaining context and nuance.',
      solution: 'Implemented specialized language models and cultural context analysis.'
    },
    {
      title: 'Performance Scale',
      description: 'Handling large-scale content generation with consistent quality.',
      solution: 'Built distributed processing system with quality control pipelines.'
    }
  ];

  const achievements = [
    '10M+ Articles Generated',
    '50+ Languages Supported',
    '95% Client Satisfaction',
    'AI Innovation Award 2023',
    '40% Cost Reduction for Clients'
  ];

  const testimonial = {
    quote: "This AI platform revolutionized our content creation process. We've increased our output by 5x while maintaining quality.",
    author: "Emily Chen",
    position: "Content Director, Global Media Corp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  };

  const stats = [
    { label: 'Words Generated', value: '1B+' },
    { label: 'Active Users', value: '50K+' },
    { label: 'Languages', value: '50+' },
    { label: 'Accuracy Rate', value: '99%' }
  ];

  const contentTypes = [
    { type: 'Blog Posts', count: '5M+' },
    { type: 'Product Descriptions', count: '2M+' },
    { type: 'Social Media', count: '10M+' },
    { type: 'Marketing Copy', count: '3M+' },
    { type: 'Technical Docs', count: '1M+' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-screen bg-gray-200 mt-20 text-black py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold  mb-6 text-primary">AI Content Generator</h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            A cutting-edge AI platform that revolutionizes content creation through advanced natural language processing.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-800 rounded-xl p-6 text-center"
            >
              <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
              alt="AI Content Generator"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="space-y-8">
            <div data-aos="fade-left">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Key Features</h2>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-primary">•</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div data-aos="fade-left" data-aos-delay="200">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Technologies Used</h2>
              <div className="flex flex-wrap gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-dark-800 px-4 py-2 rounded-full text-white flex items-center space-x-2"
                  >
                    <span>{tech.icon}</span>
                    <span>{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Types Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">Content Generation Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {contentTypes.map((content, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-800 rounded-xl p-6 text-center hover:bg-dark-700 transition-colors"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">{content.type}</h3>
                <p className="text-gray-400">{content.count}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Demo Section */}
        {/* <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">AI Content Demo</h2>
          <div className="bg-dark-800 rounded-xl p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-400">AI Content Generator</div>
              </div>
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-700 rounded-lg">
                <p className="text-gray-400">Interactive content generation demo</p>
              </div>
            </div>
          </div>
        </div> */}

        {/* Challenges Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">Challenges & Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-dark-800 rounded-xl p-6 hover:bg-dark-700 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3 text-primary">{challenge.title}</h3>
                <p className="text-gray-300 mb-4">{challenge.description}</p>
                <p className="text-primary-400">Solution: {challenge.solution}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-bold mb-8 text-primary">Key Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-800 rounded-xl p-6 hover:bg-dark-700 transition-colors"
              >
                <p className="text-lg text-primary-400">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        {/* <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-dark-800 rounded-2xl p-8 mb-20"
          data-aos="fade-up"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-xl italic mb-4 text-gray-300">"{testimonial.quote}"</p>
              <p className="text-primary font-semibold">{testimonial.author}</p>
              <p className="text-gray-400">{testimonial.position}</p>
            </div>
          </div>
        </motion.div> */}

        {/* Technical Overview */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-dark-800 rounded-2xl p-8"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-semibold mb-4 text-primary">Technical Overview</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Our AI Content Generator is built on a sophisticated stack combining GPT-3 with custom-trained 
            models. The frontend uses React for a responsive interface, while the backend is powered by 
            Python and FastAPI. We utilize TensorFlow for custom model training and content quality 
            assessment.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The system employs advanced NLP techniques for content generation, including context 
            understanding, tone analysis, and style matching. Our distributed architecture handles 
            multiple concurrent requests, with automatic load balancing and failover. Content quality 
            is ensured through a multi-stage pipeline including plagiarism detection, grammar checking, 
            and style consistency verification.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AiContent;
