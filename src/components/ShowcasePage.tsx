import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Code, Palette, Smartphone, Globe, Zap, Shield, ArrowRight, Star, Sparkles, Layers, Cpu, Database, GitBranch } from 'lucide-react';

const ShowcasePage: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative z-10 container mx-auto px-6 py-20"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-white/90 font-medium">Zivara Solutions</span>
          </motion.div>
          
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Web Design
          </motion.h1>
          
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-200 via-purple-200 to-pink-200 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            & Development
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Crafting digital experiences that inspire, engage, and convert. 
            From concept to deployment, we bring your vision to life.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              icon: Palette,
              title: "UI/UX Design",
              description: "Beautiful, intuitive interfaces that users love",
              color: "from-pink-500 to-rose-500"
            },
            {
              icon: Code,
              title: "Frontend Development",
              description: "Modern, responsive web applications",
              color: "from-blue-500 to-cyan-500"
            },
            {
              icon: Smartphone,
              title: "Mobile-First",
              description: "Optimized for all devices and screen sizes",
              color: "from-green-500 to-emerald-500"
            },
            {
              icon: Globe,
              title: "Full-Stack Solutions",
              description: "Complete web applications from database to UI",
              color: "from-purple-500 to-violet-500"
            },
            {
              icon: Zap,
              title: "Performance",
              description: "Lightning-fast, optimized experiences",
              color: "from-yellow-500 to-orange-500"
            },
            {
              icon: Shield,
              title: "Security",
              description: "Enterprise-grade security and best practices",
              color: "from-red-500 to-pink-500"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/70 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-4 gap-8 mb-16"
        >
          {[
            { number: "100+", label: "Projects Delivered" },
            { number: "50+", label: "Happy Clients" },
            { number: "99%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                <motion.div
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-white/70 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          variants={itemVariants}
          className="mb-16"
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Built with Modern Technology
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React", icon: "⚛️", color: "from-blue-400 to-cyan-400" },
              { name: "TypeScript", icon: "🔷", color: "from-blue-500 to-blue-600" },
              { name: "Next.js", icon: "▲", color: "from-gray-700 to-gray-900" },
              { name: "Tailwind", icon: "🎨", color: "from-cyan-400 to-blue-500" },
              { name: "Node.js", icon: "🟢", color: "from-green-500 to-green-600" },
              { name: "MongoDB", icon: "🍃", color: "from-green-600 to-green-700" },
              { name: "AWS", icon: "☁️", color: "from-orange-400 to-orange-500" },
              { name: "Docker", icon: "🐳", color: "from-blue-500 to-blue-600" },
              { name: "Figma", icon: "🎯", color: "from-purple-500 to-pink-500" },
              { name: "Git", icon: "📦", color: "from-orange-500 to-red-500" },
              { name: "Vercel", icon: "▲", color: "from-gray-600 to-gray-800" },
              { name: "Framer", icon: "✨", color: "from-purple-400 to-pink-400" }
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="group"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <div className={`text-3xl mb-3 ${tech.color.includes('from-') ? '' : 'text-white'}`}>
                    {tech.icon}
                  </div>
                  <div className="text-white/80 font-medium text-sm">{tech.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          variants={itemVariants}
          className="mb-16"
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Our Development Process
          </motion.h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your vision and requirements", icon: Layers },
              { step: "02", title: "Design", description: "Creating beautiful, user-centered designs", icon: Palette },
              { step: "03", title: "Development", description: "Building with clean, scalable code", icon: Code },
              { step: "04", title: "Launch", description: "Deploying and optimizing for success", icon: Zap }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="relative"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center h-full">
                  <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                    {process.step}
                  </div>
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <process.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{process.title}</h4>
                  <p className="text-white/70">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <motion.div
            className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl px-8 py-4 text-white font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-1/4 left-10 w-4 h-4 bg-purple-400 rounded-full opacity-60"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-1/3 right-20 w-6 h-6 bg-cyan-400 rounded-full opacity-40"
          style={{ animationDelay: "1s" }}
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-pink-400 rounded-full opacity-50"
          style={{ animationDelay: "2s" }}
        />
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </div>
  );
};

export default ShowcasePage;
