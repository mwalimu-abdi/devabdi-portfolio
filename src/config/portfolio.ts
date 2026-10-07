/**
 * CENTRAL PORTFOLIO CONFIGURATION - ABDI ADAN
 * Clean, verified configuration for Full-Stack Web Developer in Nairobi, Kenya.
 */

import abdiAvatar from '../assets/images/newprofile.webp';
import hrmsImage from '../assets/images/portfolio/ubs_hrms.png';
import pmsImage from '../assets/images/portfolio/ubs_pms.png';
import chatImage from '../assets/images/portfolio/ubs_chat.png';
import realEstateImage from '../assets/images/real_estate_website_1791218834611.jpg';
import schoolSystemImage from '../assets/images/school_management_system_dark.jpg';
import personalPortfolioImage from '../assets/images/personal_portfolio_1791218856911.jpg';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'Frontend' | 'Web Apps';
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  description: string;
  detailedDescription: string;
  features: string[];
  technologies: string[];
  liveDemoUrl: string;
  sourceCodeUrl: string;
  highlights: string[];
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools';
  icon: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  content: string;
  verified: boolean;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Abdi Adan',
    shortName: 'Abdi',
    title: 'Full-Stack Web Developer',
    fullTitle: 'Full-Stack Web Developer in Nairobi, Kenya',
    location: 'Nairobi, Kenya',
    country: 'Kenya',
    experienceYears: 5,
    heroGreeting:
      'Full-Stack Web Developer based in Nairobi, Kenya. I build modern, fast, and scalable web applications and business systems.',
    bio: 'Full-stack web developer with 5+ years of experience delivering high-performance web applications, clean responsive interfaces, and reliable backends for businesses and organizations in Kenya.',
    extendedBio: [
      'Key capabilities I deliver:',
      '• Fast, responsive user experiences with instant load times.',
      '• Clean, maintainable code with TypeScript and React.',
      '• Secure REST APIs and optimized database design.',
      '• Reliable deployment pipelines and server configurations.',
    ],
    defaultAvatar: abdiAvatar,
    stats: [
      { label: 'Years Experience', value: '5+' },
      { label: 'Completed Projects', value: '35+' },
      { label: 'Satisfied Clients', value: '25+' },
    ],
  },

  // Central contact details - single source of truth
  // TODO: confirm this is the number I want clients to call.
  contact: {
    email: 'info@devabdi.co.ke',
    phoneDisplay: '+254 722 353 802',
    phoneRaw: '+254722353802',
    whatsappNumber: '254722353802',
    location: 'Nairobi, Kenya',
    socials: {
      whatsapp: 'https://wa.me/254722353802',
      emailLink: 'mailto:info@devabdi.co.ke',
      phoneLink: 'tel:+254722353802',
      // TODO: Add real GitHub URL when available: 'https://github.com/your-username'
      // TODO: Add real LinkedIn URL when available: 'https://linkedin.com/in/your-username'
    },
  },

  // Client-facing services written in natural, search-friendly language
  services: [
    {
      id: 'custom-web',
      title: 'Custom Website Development',
      description:
        'I design and develop responsive, fast-loading websites for businesses, schools, and organizations in Nairobi and across Kenya. Built with clean semantic code, modern UX, and mobile-first principles.',
      icon: 'design',
      deliverables: ['Custom Web Design', 'Mobile-First Layouts', 'Speed Optimization'],
    },
    {
      id: 'web-apps',
      title: 'Web Application & Business System Development',
      description:
        'From school management systems to internal dashboards and operations portals, I develop custom full-stack web applications with secure databases and robust REST APIs.',
      icon: 'code',
      deliverables: ['React & Node.js SPAs', 'Database Architecture', 'Secure REST APIs'],
    },
    {
      id: 'redesign-optimization',
      title: 'Website Redesign & Speed Optimization',
      description:
        'Upgrade slow, outdated websites with modern React components, optimized assets, and clean typography to deliver instant page loads and improve conversion.',
      icon: 'award',
      deliverables: ['Core Web Vitals Tuning', 'Modern UI Revamp', 'Codebase Refactoring'],
    },
    {
      id: 'maintenance-support',
      title: 'Maintenance & Technical Support',
      description:
        'Reliable post-launch technical support, security updates, server monitoring, and continuous feature enhancements to keep your systems running smoothly.',
      icon: 'tools',
      deliverables: ['Security Updates', 'Server Monitoring', 'Continuous Improvements'],
    },
  ],

  // Skills grouped by category without arbitrary percentage bars
  skills: [
    { name: 'React.js', category: 'Frontend' as const, icon: 'react', description: 'Component architecture, state management, and modern SPA design.' },
    { name: 'TypeScript', category: 'Frontend' as const, icon: 'ts', description: 'Static typing, interfaces, and maintainable enterprise codebases.' },
    { name: 'JavaScript (ES6+)', category: 'Frontend' as const, icon: 'js', description: 'Modern ES features, asynchronous programming, and DOM optimization.' },
    { name: 'HTML5 & CSS3', category: 'Frontend' as const, icon: 'html', description: 'Semantic markup, Flexbox, CSS Grid, and responsive layout standards.' },
    { name: 'Tailwind CSS', category: 'Frontend' as const, icon: 'tailwind', description: 'Utility-first CSS, custom design systems, and responsive styling.' },
    { name: 'Node.js & Express', category: 'Backend' as const, icon: 'node', description: 'RESTful API development, server routing, and middleware integration.' },
    { name: 'PostgreSQL & MySQL', category: 'Backend' as const, icon: 'php', description: 'Relational database schema design, indexing, and query optimization.' },
    { name: 'REST APIs & Git', category: 'Tools' as const, icon: 'api', description: 'API architecture, version control workflows, and team collaboration.' },
  ],

  // Portfolio projects with descriptive image alts and verified factual descriptions
  projects: [
    {
      id: 'ubs-hrms',
      title: 'UBS-HRMS',
      subtitle: 'Human Resource Management System',
      category: 'Web Apps' as const,
      image: hrmsImage,
      imageAlt: 'Screenshot of UBS-HRMS employee management portal interface showing staff directory and records',
      imageWidth: 1722,
      imageHeight: 622,
      description: 'Human resource management system with employee records, approval flows, time-off management, and automated HR services.',
      detailedDescription: 'UBS-HRMS streamlines organizational employee data, automated status reports, leave requests, and centralized document storage into a unified portal.',
      features: [
        'Employee onboarding and profile management',
        'Time-off and attendance tracking workflows',
        'Real-time status reporting and analytics dashboard',
        'Role-based permissions and access control',
        'Centralized HR services and document automation',
      ],
      technologies: ['React', 'Node.js', 'REST APIs', 'MySQL', 'Tailwind CSS'],
      // TODO: Add real live demo URL when deployed
      liveDemoUrl: '',
      // TODO: Add real source code URL when public
      sourceCodeUrl: '',
      highlights: ['Automated employee status reports', 'Centralized HR workflow portal'],
    },
    {
      id: 'ubs-pms',
      title: 'UBS-PMS',
      subtitle: 'Project Management System',
      category: 'Full-Stack' as const,
      image: pmsImage,
      imageAlt: 'Screenshot of UBS-PMS project dashboard displaying task pipelines and sprint progress',
      imageWidth: 1656,
      imageHeight: 601,
      description: 'Streamlined project dashboard with task management, sprint tracking, real-time collaboration, and team workflows.',
      detailedDescription: 'UBS-PMS gives engineering and product teams total clarity on task dependencies, subtask assignments, burndown metrics, and project deadlines.',
      features: [
        'Interactive Kanban and sprint boards',
        'Task delegation with deadline countdowns',
        'Private channels and task discussion threads',
        'Milestone tracking with progress completion gauges',
        'Team capacity planning and workload view',
      ],
      technologies: ['TypeScript', 'React', 'Node.js', 'Express', 'PostgreSQL'],
      // TODO: Add real live demo URL when deployed
      liveDemoUrl: '',
      // TODO: Add real source code URL when public
      sourceCodeUrl: '',
      highlights: ['Real-time task synchronization', 'Automated sprint delivery'],
    },
    {
      id: 'ubs-chat',
      title: 'UBS-Chat',
      subtitle: 'Real-Time Team Messaging',
      category: 'Frontend' as const,
      image: chatImage,
      imageAlt: 'Screenshot of UBS-Chat application interface with channels and real-time conversation stream',
      imageWidth: 1730,
      imageHeight: 662,
      description: 'Real-time team messaging platform featuring channel conversations, direct messages, and fast message search.',
      detailedDescription: 'A lightweight chat application enabling fluid team communications, unread counts, file attachments, and user presence indicators.',
      features: [
        'Real-time WebSocket instant messaging',
        'Channel categories and direct chat rooms',
        'Unread message counter and notification badges',
        'Full-text conversation search',
        'Responsive mobile-friendly interface',
      ],
      technologies: ['React', 'WebSockets', 'Tailwind CSS', 'Node.js'],
      // TODO: Add real live demo URL when deployed
      liveDemoUrl: '',
      // TODO: Add real source code URL when public
      sourceCodeUrl: '',
      highlights: ['Instant channel switching', 'Mobile responsive messaging'],
    },
    {
      id: 'real-estate-website',
      title: 'Real Estate Website',
      subtitle: 'Property Portal & Search Platform',
      category: 'Web Apps' as const,
      image: realEstateImage,
      imageAlt: 'Screenshot of modern real estate web platform featuring property listings and neighborhood search filters',
      imageWidth: 1376,
      imageHeight: 768,
      description: 'Real estate web platform featuring property search, neighborhood filters, and high-resolution architectural galleries.',
      detailedDescription: 'Engineered for property buyers, sellers, and realtors. Features responsive listing cards, price and bedroom filters, dynamic consultation scheduling, and agent inquiry management.',
      features: [
        'Multi-parameter property search and filters',
        'Property gallery views with amenity highlights',
        'Consultation request and agent contact booking',
        'High-resolution architectural photo galleries',
        'Mobile-first responsive layout with fast image delivery',
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'REST APIs'],
      // TODO: Add real live demo URL when deployed
      liveDemoUrl: '',
      // TODO: Add real source code URL when public
      sourceCodeUrl: '',
      highlights: ['Fast property search interface', 'Responsive multi-device layout'],
    },
    {
      id: 'school-management-system',
      title: 'School Management System',
      subtitle: 'Education ERP & Student Administration',
      category: 'Full-Stack' as const,
      image: schoolSystemImage,
      imageAlt: 'Screenshot of School Management System admin dashboard showing student attendance metrics and grade tables',
      imageWidth: 1376,
      imageHeight: 768,
      description: 'Comprehensive school ERP platform for student attendance, grade reporting, timetables, and teacher administrative workflows.',
      detailedDescription: 'Empowers schools and educational centers to track student attendance records, manage term schemes, generate report summaries, and coordinate teacher-parent records.',
      features: [
        'Student attendance tracking and reporting',
        'Gradebook calculations and printable report summaries',
        'Class scheduling and room timetable management',
        'Teacher portal with lesson planning workflows',
        'Multi-tier role permissions for staff and admins',
      ],
      technologies: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
      // TODO: Add real live demo URL when deployed
      liveDemoUrl: '',
      // TODO: Add real source code URL when public
      sourceCodeUrl: '',
      highlights: ['Automated grade reporting workflow', 'Centralized academic administration'],
    },
    {
      id: 'personal-portfolio',
      title: 'Personal Portfolio',
      subtitle: 'Modern Developer Showcase',
      category: 'Frontend' as const,
      image: personalPortfolioImage,
      imageAlt: 'Screenshot of Abdi Adan personal developer portfolio website displaying dark-mode UI and project grid',
      imageWidth: 1376,
      imageHeight: 768,
      description: 'Clean modern developer personal portfolio featuring smooth transitions, accessible typography, and interactive project previews.',
      detailedDescription: 'Crafted with attention to typography, micro-interactions, and visual performance. Features modal project inspections, fast Vite build pipeline, and touch-optimized navigation.',
      features: [
        'Dynamic theme palette personalization with instant CSS variables',
        'Accessible modal dialog project inspections with full feature details',
        'Dual-layer interactive hover animations',
        'Fully responsive layout with semantic HTML structure',
        'Zero-dependency high performance Vite pipeline',
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
      // TODO: Add real live demo URL when deployed
      liveDemoUrl: '',
      // TODO: Add real source code URL when public
      sourceCodeUrl: '',
      highlights: ['Accessible semantic markup', 'Fast client-side routing'],
    },
  ],

  // Client testimonials
  // TODO: set verified to true ONLY for real, consenting clients with confirmed permission.
  // The UI will automatically hide this section if no verified testimonials exist.
  testimonials: [
    {
      id: '1',
      author: 'David Mwangi',
      role: 'Operations Director',
      company: 'Apex Digital Kenya',
      rating: 5,
      content: 'Abdi built our enterprise web platform with speed and precision. The tool is fast, dependable, and a pleasure to use daily.',
      verified: false, // TODO: set to true once confirmed
    },
    {
      id: '2',
      author: 'Piyush Nathani',
      role: 'Senior Technical Manager',
      company: 'Maxlink IT Solutions',
      rating: 5,
      content: 'I rarely write reviews, but the developer truly deserves recognition for their technical expertise, customisation and professionalism.',
      verified: false, // TODO: set to true once confirmed
    },
    {
      id: '3',
      author: 'Sarah Ochieng',
      role: 'Co-Founder & CTO',
      company: 'Kikwetu Digital',
      rating: 5,
      content: 'Exceptional code quality and clean architecture. Working with Abdi made scaling our web application smooth and effortless.',
      verified: false, // TODO: set to true once confirmed
    },
    {
      id: '4',
      author: 'Hiren Gohel',
      role: 'Product Designer',
      company: 'TechCraft Studios',
      rating: 5,
      content: 'The quality of the design is very high, and easy to customize. Overall a good design, supportive team, that I am quite happy with.',
      verified: false, // TODO: set to true once confirmed
    },
    {
      id: '5',
      author: 'James Kariuki',
      role: 'Lead Educator',
      company: 'Academic Excellence Network',
      rating: 5,
      content: 'Mwalimu Hodari transformed how our educators prepare schemes of work and lesson plans. It saves hours of administrative paperwork every week.',
      verified: false, // TODO: set to true once confirmed
    },
    {
      id: '6',
      author: 'Vijay Sardhara',
      role: 'Engineering Lead',
      company: 'Rainloops Technolabs',
      rating: 5,
      content: 'Whenever we faced a challenge, Abdi provided solutions within minutes. Brilliant communication, solid execution, and dependable delivery.',
      verified: false, // TODO: set to true once confirmed
    },
  ],

  themeColors: [
    { id: 'brown', name: 'Terracotta (Default)', hex: '#d1701f' },
    { id: 'cadetBlue', name: 'Cadet Blue', hex: '#5e9e9f' },
    { id: 'crimson', name: 'Crimson', hex: '#e65f78' },
    { id: 'emerald', name: 'Emerald', hex: '#10b981' },
    { id: 'purple', name: 'Purple', hex: '#8e44ad' },
    { id: 'sky', name: 'Sky Blue', hex: '#0ea5e9' },
  ],
};

