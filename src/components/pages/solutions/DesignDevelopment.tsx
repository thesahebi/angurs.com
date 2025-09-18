import React, { useState, useEffect } from "react";

const DesignDevelopment = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const [typingText, setTypingText] = useState("");
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);

  const codeSnippets = [
    {
      language: "React",
      code: `import React from 'react';

const ModernApp = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return (
    <div className="app">
      <h1>Beautiful UI</h1>
      {data.map(item => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};`,
      description: "Modern React components with hooks"
    },
    {
      language: "Node.js",
      code: `const express = require('express');
const app = express();

app.get('/api/data', async (req, res) => {
  try {
    const data = await fetchFromDatabase();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`,
      description: "Scalable backend architecture"
    },
    {
      language: "Python",
      code: `from flask import Flask, jsonify
import pandas as pd

app = Flask(__name__)

@app.route('/api/analytics')
def get_analytics():
    data = pd.read_csv('data.csv')
    insights = data.describe()
    return jsonify(insights.to_dict())

if __name__ == '__main__':
    app.run(debug=True)`,
      description: "Data-driven applications"
    }
  ];

  const technologies = {
    frontend: [
      { name: "ReactJS", icon: "⚛️", description: "Component-based UI library" },
      { name: "Angular", icon: "🅰️", description: "Full-featured framework" },
      { name: "VueJS", icon: "💚", description: "Progressive framework" },
      { name: "HTML5", icon: "🌐", description: "Semantic markup" },
      { name: "CSS3", icon: "🎨", description: "Modern styling" },
      { name: "JavaScript", icon: "⚡", description: "Dynamic interactions" },
      { name: "TypeScript", icon: "📘", description: "Type-safe development" }
    ],
    backend: [
      { name: "NodeJS", icon: "🟢", description: "JavaScript runtime" },
      { name: "Python", icon: "🐍", description: "Versatile programming" },
      { name: "PHP", icon: "🐘", description: "Web development" },
      { name: "Java", icon: "☕", description: "Enterprise solutions" },
      { name: "C#", icon: "🔷", description: "Microsoft ecosystem" },
      { name: "Go", icon: "🐹", description: "High performance" },
      { name: "Ruby", icon: "💎", description: "Developer happiness" }
    ],
    mobile: [
      { name: "Swift", icon: "🍎", description: "iOS development" },
      { name: "React Native", icon: "📱", description: "Cross-platform mobile" },
      { name: "Flutter", icon: "🦋", description: "Google's UI toolkit" }
    ],
    design: [
      { name: "Figma", icon: "🎨", description: "Collaborative design" },
      { name: "Adobe XD", icon: "🎯", description: "UX/UI design" },
      { name: "Sketch", icon: "✏️", description: "Mac design tool" }
    ]
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCodeIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentCode = codeSnippets[currentCodeIndex];
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < currentCode.code.length) {
        setTypingText(currentCode.code.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 30);
    return () => clearInterval(typeInterval);
  }, [currentCodeIndex]);

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E293B]"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#ff6b35] rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-[#3B82F6] rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-[#10B981] rounded-full animate-pulse delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-[#1E293B] border border-[#ff6b35]/20 rounded-full text-[#ff6b35] text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[#ff6b35] rounded-full mr-2 animate-pulse"></span>
              Design & Development
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-[#E2E8F0] to-[#94A3B8] bg-clip-text text-transparent">
                Code
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#ff6b35] to-[#F59E0B] bg-clip-text text-transparent">
                Beautifully
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#E2E8F0] mb-8 max-w-3xl mx-auto leading-relaxed">
              We craft exceptional digital experiences using cutting-edge technologies and modern design principles.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-[#ff6b35] hover:bg-[#e55a2b] text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your Project
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#technologies"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/20 hover:border-[#ff6b35] text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                View Technologies
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Code Showcase */}
      <section className="py-16 md:py-24 bg-[#1E293B]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#ff6b35] to-[#F59E0B] bg-clip-text text-transparent">
                  Live Code Examples
                </span>
              </h2>
              <p className="text-[#E2E8F0] text-lg">
                See our code in action with real-world examples
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-[#0F172A] rounded-2xl p-6 border border-[#1E293B]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-[#94A3B8] text-sm font-mono">
                    {codeSnippets[currentCodeIndex].language}
                  </span>
                </div>
                <pre className="text-[#E2E8F0] text-sm font-mono leading-relaxed overflow-x-auto">
                  <code>{typingText}</code>
                </pre>
              </div>
              
              <div className="space-y-6">
                {codeSnippets.map((snippet, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                      index === currentCodeIndex
                        ? "bg-[#ff6b35]/10 border-[#ff6b35]/30"
                        : "bg-[#0F172A] border-[#1E293B] hover:border-[#ff6b35]/20"
                    }`}
                    onClick={() => setCurrentCodeIndex(index)}
                  >
                    <h3 className="text-xl font-semibold mb-2 text-[#ff6b35]">
                      {snippet.language}
                    </h3>
                    <p className="text-[#E2E8F0]">
                      {snippet.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-16 md:py-24 bg-[#0F172A]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-[#E2E8F0] bg-clip-text text-transparent">
                  Our Technology Stack
                </span>
              </h2>
              <p className="text-[#E2E8F0] text-lg max-w-3xl mx-auto">
                We use the latest tools and frameworks to build scalable, maintainable, and beautiful applications.
              </p>
            </div>

            {/* Technology Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {Object.keys(technologies).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 capitalize ${
                    activeTab === category
                      ? "bg-[#ff6b35] text-white shadow-lg"
                      : "bg-[#1E293B] text-[#E2E8F0] hover:bg-[#334155]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Technology Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {technologies[activeTab].map((tech, index) => (
                <div
                  key={index}
                  className="group bg-[#1E293B] rounded-xl p-6 border border-[#334155] hover:border-[#ff6b35]/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6b35]/10"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {tech.name}
                  </h3>
                  <p className="text-[#94A3B8] text-sm">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-[#1E293B]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#ff6b35] to-[#F59E0B] bg-clip-text text-transparent">
                  Our Development Process
                </span>
              </h2>
              <p className="text-[#E2E8F0] text-lg">
                From concept to deployment, we follow a proven methodology
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "Understanding your vision and requirements",
                  icon: "🔍"
                },
                {
                  step: "02",
                  title: "Design",
                  description: "Creating beautiful, user-centered interfaces",
                  icon: "🎨"
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Building robust, scalable applications",
                  icon: "⚡"
                },
                {
                  step: "04",
                  title: "Deployment",
                  description: "Launching and maintaining your solution",
                  icon: "🚀"
                }
              ].map((process, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#ff6b35] to-[#F59E0B] rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                      {process.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#1E293B] border-2 border-[#ff6b35] rounded-full flex items-center justify-center text-sm font-bold text-[#ff6b35]">
                      {process.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {process.title}
                  </h3>
                  <p className="text-[#94A3B8]">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-[#E2E8F0] bg-clip-text text-transparent">
                Ready to Build Something Amazing?
              </span>
            </h2>
            <p className="text-xl text-[#E2E8F0] mb-8 max-w-2xl mx-auto">
              Let's discuss your project and bring your ideas to life with cutting-edge technology and beautiful design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-[#ff6b35] hover:bg-[#e55a2b] text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your Project
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/solutions"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/20 hover:border-[#ff6b35] text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                View All Solutions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignDevelopment;
