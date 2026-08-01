export const personalInfo = {
  name: "Tarun Bapat",
  title: "Full Stack Developer",
  tagline: "Building digital experiences that matter",
  email: "tarun.bapat0797@gmail.com",
  phone: "NA",
  location: "Indore, India",
  github: "https://github.com/TarunBapat/",
  linkedin: "https://www.linkedin.com/in/tarun-bapat/",
  twitter: "https://x.com/TarunBapat",
};

export const skills = [
  "React",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "GraphQL",
  "MySQL",
  "Python",
  "PostgreSQL",
  "AWS",
  "Docker",
];

export const projects = [
  {
    id: 1,
    title: "Courses Platform",
    description:
      "A full-stack Application with React frontend and Node.js backend and admin dashboards.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    liveUrl: "https://courses.tarunbapat.com/",
    githubUrl: "https://github.com/johndoe/ecommerce",
    featured: false,
  },
  {
    id: 2,
    title: "Properties Management App",
    description:
      "A full-stack Application with using NextJS and tailwind CSS for styling.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
    tech: ["NextJS", "Tailwind-UI"],
    liveUrl: "https://properties.tarunbapat.com/",
    githubUrl: "https://github.com/johndoe/taskapp",
    featured: false,
  },
  {
    id: 3,
    title: "Carpool",
    description:
      "A ride-sharing platform that connects drivers and riders heading the same way, with route matching, ride requests, and trip management.",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=250&fit=crop",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl:
      "https://car-pool-8jmc5cmdp-tarun-bapats-projects-0938dcd4.vercel.app",
    githubUrl: personalInfo.github,
    featured: false,
  },
];

export const experiences = [
  {
    id: 1,
    title: "Engineering Lead",
    company: "Persistent Systems",
    location: "Indore, India",
    period: "2025 - Present",
    description:
      "Led development of microservices architecture serving 100k+ users. Mentored junior developers.",
    achievements: [
      "Developed scalable web applications using ReactJS with modern features such as hooks, state management (Redux), and component-based architecture, ensuring high-performance and user-friendly interfaces",
      "Increased application performance by 40%",
      "Led team of 5 developers on major product launch",
      "Implemented automated testing reducing bugs by 60%",
      "Utilized TypeScript for improved code quality, type safety, and error reduction, contributing to a more efficient development process",
    ],
    tech: [
      "React",
      "Node.js",
      "TypeScript",
      "AWS",
      "Docker",
      "GraphQL",
      "Node.js",
      "Express",
    ],
  },
  {
    id: 2,
    title: "Senior Solution Engineer",
    company: "Deqode Solutions",
    location: "Indore, India",
    period: "2022 - 2025",
    description:
      "Developed responsive web applications and collaborated with design team to create intuitive user experiences.",
    achievements: [
      "Built component library used across 5+ products",
      "Improved page load times by 50%",
      "Collaborated with UX team on design system",
      "Involved in defining the requirements for the application",
    ],
    tech: [
      "React",
      "TypeScript",
      "SCSS",
      "Jest",
      "Storybook",
      "Node.js",
      "Express",
    ],
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Tata Consultancy Services",
    location: "Mumbai, India",
    period: "2019 - 2022",
    description:
      "Used ReactJS in the development of the complex web application",
    achievements: [
      "Developed scalable web applications using ReactJS with modern features such as hooks, state management (Redux), and component-based architecture, ensuring high-performance and user-friendly interfaces",
      "Designed and maintained microservices-based architecture on Node.js, improving application modularity and scalability",
      "Utilized TypeScript for improved code quality, type safety, and error reduction, contributing to a more efficient development process",
    ],
    tech: ["JavaScript", "React", "HTML", "CSS", "MySQL", "Node.js", "Express"],
  },
];
