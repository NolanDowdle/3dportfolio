import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    inmar,
    asu,
    carrent,
    jobit,
    toDoList,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Machine Learning / AI",
      icon: mobile,
    },
    {
      title: "Research",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "Farragut Systems",
      icon: inmar,
      iconBg: "#383E56",
      date: "September 2023 - December 2024",
      points: [
        "Engineered and integrated complex multi-page UIs with backend services and existing products using C#, Radzen Blazor, SQL, and HTML.",
        "Developed and validated a new API back-end for a cutting-edge product, ensuring seamless integration using C# and SQL.",
        "Developed and deployed numerous data-driven analytical reports in Power BI Desktop."
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Inmar Intelligence",
      icon: inmar,
      iconBg: "#383E56",
      date: "May 2021 - August 2021",
      points: [
        "Researched feasibility of transitioning Inmar Intelligence healthcare claims pipeline from Apache Kafka to Google Cloud Pub/Sub.",
        "Transitioned Inmar Intelligence healthcare claims pipeline from Apache Kafka to Google Cloud Pub/Sub, saving over $90,000 per year.",
        "Gained experience using Python, Hadoop, HDFS and YARN.",
        "Participated in code reviews and sprint meetings.",
      ],
    },
    {
      title: "Undergraduate Research Assistant",
      company_name: "Appalachian State univeristy",
      icon: asu,
      iconBg: "#383E56",
      date: "August 2020 - May 2021",
      points: [
        "Developed a neural network to predict the secondary structure of RNA.",
      ],
    },
  ];
  
  const testimonials = [
    
  ];
  
  const projects = [
    {
      name: "To Do List",
      description:
        "A dynamic to do list app allowing users to enter new tasks and delete tasks.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: toDoList,
      source_code_link: "https://github.com/NolanDowdle/ToDoList",
    },
    {
      name: "Solana Real Time Crypto Tracker",
      description:
        "Tracks real time transactions on Solana network using Redis, Rust, and Solana API",
      tags: [
        {
          name: "Redis",
          color: "blue-text-gradient",
        },
        {
          name: "Rust",
          color: "pink-text-gradient",
        },
        {
          name: "Solana",
          color: "pink-text-gradient",
        },
      ],
      image: toDoList,
      source_code_link: "https://github.com/NolanDowdle/Solana-Real-Time-Crypto-Transaction-Tracker",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };