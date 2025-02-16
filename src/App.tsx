import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Home, Briefcase, User, Mail, Menu, X, Users, Phone, Star, Coffee, Heart, Twitter, Linkedin, Github, MapPin } from 'lucide-react';

const sections = [
  {
    id: 'home',
    title: 'Welcome to Innovation',
    icon: <Home className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    content: {
      headline: 'Transforming Ideas into Reality',
      description: 'We are a forward-thinking company dedicated to creating innovative solutions that drive business success.',
      features: [
        'Digital Transformation',
        'Custom Software Development',
        'Cloud Solutions',
        'AI & Machine Learning'
      ],
      cta: 'Explore Our Solutions'
    }
  },
  {
    id: 'about',
    title: 'Our Story',
    icon: <User className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    content: {
      headline: 'A Decade of Excellence',
      description: 'Founded in 2014, weve grown from a small startup to a global technology leader, serving clients across 30+ countries.',
      stats: [
        { label: 'Years Experience', value: '10+' },
        { label: 'Global Clients', value: '500+' },
        { label: 'Team Members', value: '150+' },
        { label: 'Projects Delivered', value: '1000+' }
      ],
      cta: 'Learn Our History'
    }
  },
  {
    id: 'team',
    title: 'Our Team',
    icon: <Users className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    content: {
      headline: 'Meet Our Experts',
      description: 'Our diverse team of professionals brings together expertise from various fields to deliver exceptional results.',
      departments: [
        'Software Development',
        'UI/UX Design',
        'Project Management',
        'Customer Success'
      ],
      cta: 'Join Our Team'
    }
  },
  {
    id: 'services',
    title: 'Services',
    icon: <Star className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    content: {
      headline: 'Comprehensive Solutions',
      description: 'We offer end-to-end technology solutions tailored to your business needs.',
      services: [
        { name: 'Web Development', description: 'Custom websites and web applications' },
        { name: 'Mobile Apps', description: 'iOS and Android development' },
        { name: 'Cloud Services', description: 'AWS and Azure solutions' },
        { name: 'Consulting', description: 'Technical strategy and architecture' }
      ],
      cta: 'View Services'
    }
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    icon: <Briefcase className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    content: {
      headline: 'Our Success Stories',
      description: 'Explore our latest projects and see how weve helped businesses transform their digital presence.',
      projects: [
        { name: 'E-commerce Platform', client: 'Global Retail Corp' },
        { name: 'Banking App', client: 'FinTech Solutions' },
        { name: 'Healthcare Portal', client: 'MedTech Inc' },
        { name: 'IoT Dashboard', client: 'Smart Systems' }
      ],
      cta: 'View Projects'
    }
  },
  {
    id: 'culture',
    title: 'Culture',
    icon: <Coffee className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    content: {
      headline: 'Life at Our Company',
      description: 'We foster a culture of innovation, collaboration, and continuous learning.',
      values: [
        'Innovation First',
        'Customer Success',
        'Continuous Learning',
        'Work-Life Balance'
      ],
      cta: 'Join Our Team'
    }
  },
  {
    id: 'testimonials',
    title: 'Testimonials',
    icon: <Heart className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    content: {
      headline: 'Client Success Stories',
      description: 'Hear what our clients have to say about working with us.',
      testimonials: [
        { text: "Outstanding service and results", author: "John Doe, CEO" },
        { text: "Transformed our business completely", author: "Jane Smith, CTO" },
        { text: "Exceptional technical expertise", author: "Mike Johnson, Director" }
      ],
      cta: 'Read More'
    }
  },
  {
    id: 'contact',
    title: 'Contact Us',
    icon: <Phone className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    content: {
      headline: "Let's Build Something Great",
      description: 'Ready to start your next project? Get in touch with our team.',
      contact: {
        email: 'contact@company.com',
        phone: '+1 (555) 123-4567',
        address: '123 Innovation Street, Tech City, TC 12345'
      },
      cta: 'Get in Touch'
    }
  }
];

function Section({ section, isVisible, index }: { section: typeof sections[0]; isVisible: boolean; index: number }) {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  const renderContent = (content: any) => {
    switch (section.id) {
      case 'home':
        return (
          <div className="space-y-8">
            <h3 className="text-4xl font-bold text-white/90">{content.headline}</h3>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">{content.description}</p>
            <div className="grid grid-cols-2 gap-6 mt-8 max-w-2xl mx-auto">
              {content.features.map((feature: string, i: number) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * i }}
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-lg"
                >
                  {feature}
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="space-y-8">
            <h3 className="text-4xl font-bold text-white/90">{content.headline}</h3>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">{content.description}</p>
            <div className="grid grid-cols-4 gap-6 mt-8">
              {content.stats.map((stat: any, i: number) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * i }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'services':
        return (
          <div className="space-y-8">
            <h3 className="text-4xl font-bold text-white/90">{content.headline}</h3>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">{content.description}</p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              {content.services.map((service: any, i: number) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * i }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-left"
                >
                  <h4 className="text-xl font-semibold mb-2">{service.name}</h4>
                  <p className="text-white/70">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div className="space-y-8">
            <h3 className="text-4xl font-bold text-white/90">{content.headline}</h3>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">{content.description}</p>
          </div>
        );
    }
  };

  return (
    <motion.section
      id={section.id}
      ref={ref}
      className="min-h-screen relative flex items-center justify-center book-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Page Shadow */}
            <motion.div
              className="absolute inset-0 shadow-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Page Content */}
            <motion.div
              className="absolute inset-0 origin-[0%_50%] bg-white"
              initial={{ rotateY: 90, boxShadow: "0 0 0 rgba(0,0,0,0)" }}
              animate={{ 
                rotateY: 0,
                boxShadow: "5px 0 15px rgba(0,0,0,0.3)"
              }}
              exit={{ 
                rotateY: -90,
                boxShadow: "-5px 0 15px rgba(0,0,0,0.3)"
              }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 20
              }}
            >
              <div className="absolute inset-0 book-page-texture">
                <motion.img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5 }}
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>
              
              <motion.div
                className="relative z-10 h-full flex items-center justify-center p-12"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <div className="book-content max-w-5xl mx-auto">
                  <h2 className="text-6xl font-bold mb-12 text-white tracking-tight">{section.title}</h2>
                  {renderContent(section.content)}
                  
                  <motion.div 
                    className="mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <button className="px-8 py-3 bg-white text-gray-900 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all">
                      {section.content.cta}
                    </button>
                  </motion.div>
                </div>
              </motion.div>


              {/* Book Spine */}
              <div className="absolute left-0 top-0 w-4 h-full bg-gradient-to-r from-black/40 to-transparent" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(id);
    }
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative book-container">
      {/* Book Cover */}
      <div className="fixed inset-0 book-cover pointer-events-none" />
      
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white lg:hidden"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Navigation */}
      <nav className={`fixed z-40 transition-all duration-500 ${
        isMenuOpen ? 'top-0' : '-top-full lg:top-0'
      } left-0 w-full bg-white/5 backdrop-blur-md border-b border-white/10`}>
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center justify-center py-4 space-x-8 overflow-x-auto">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`group flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === section.id
                      ? 'text-white bg-white/20'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {section.icon}
                  <span>{section.title}</span>
                  {activeSection === section.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 w-full bg-white/40"
                      layoutId="underline"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Sections */}
      <main className="w-full perspective-2000">
        {sections.map((section, index) => (
          <Section 
            key={section.id} 
            section={section} 
            isVisible={activeSection === section.id}
            index={index}
          />
        ))}
      </main>


      <footer className="bg-[#FAF3E0] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#1B1F3B]">TechCorp</h3>
            <p className="text-[#1B1F3B]">
              Transforming ideas into digital reality through innovative solutions and cutting-edge technology.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#1B1F3B]">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-[#1B1F3B]" />
                <span className='text-[#1B1F3B]'>contact@techcorp.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-[#1B1F3B]" />
                <span className='text-[#1B1F3B]'>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-[#1B1F3B]" />
                <span className='text-[#1B1F3B] '>123 Tech Street, SF, CA</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#1B1F3B]">Quick Links</h3>
            <ul className="space-y-2">
            {/* onClick={() => scrollToSection(section.id)} */}
              <li><button  onClick={() => scrollToSection("services")} className="hover:text-[#CFAF60] transition-colors text-[#1B1F3B] ">Services</button></li>
              <li><button onClick={() => scrollToSection("portfolio")} className="hover:text-[#CFAF60] transition-colors text-[#1B1F3B]">Portfolio</button></li>
              <li><button onClick={() => scrollToSection("about")} className="hover:text-[#CFAF60] transition-colors text-[#1B1F3B]">About Us</button></li>
              <li><button onClick={() => scrollToSection("contact")} className="hover:text-[#CFAF60] transition-colors text-[#1B1F3B]">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#1B1F3B]">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#1B1F3B] transition-colors">
                <Github className="h-6 w-6 hover:text-[#CFAF60] transition-colors text-[#1B1F3B]" />
              </a>
              <a href="#" className="hover:text-[#1B1F3B] transition-colors">
                <Linkedin className="h-6 w-6 hover:text-[#CFAF60] transition-colors text-[#1B1F3B]" />
              </a>
              <a href="#" className="hover:text-[#1B1F3B] transition-colors">
                <Twitter className="h-6 w-6 hover:text-[#CFAF60] transition-colors text-[#1B1F3B]" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-[#1B1F3B]">
          <p>&copy; {new Date().getFullYear()} TechCorp. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default App;