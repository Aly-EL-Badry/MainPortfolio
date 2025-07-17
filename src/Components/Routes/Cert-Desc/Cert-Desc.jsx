import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Error from '../Error/Error';
import './Cert-Desc.css'; 

const hcia = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158338/HCIA_cvu2ap.webp"
const java = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158337/Java_course_ovcdpp.webp"
const Git = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158328/Git_and_Github_figiut.webp"
const introToBackend = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158330/Intro_to_backend_b8plvf.webp"
const ProgramminginPython = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158326/ProgrammingInPython_jynq96.webp"
const versionControl = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158321/VersionControl_qaw4vj.webp"
const introToDataBase = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158328/Intro_to_database_mf47g5.webp"
const aice = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158334/alx_up9vdv.webp"
const ecpc = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158330/ecpc_h69udh.webp"
const dotpy = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158331/dotpy_jefwd4.webp"
const clean = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158337/clean_viakud.webp"
const oop = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158325/oop_jylarf.webp"
const hc = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158335/html_clwgwq.webp"
const py = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158322/pyrhon_ap5njq.webp"
const pan = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158326/pandas_ekptzt.webp"
const machine = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158325/machine_bpmwnd.webp"
const data = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158336/data_nt65ih.webp"
const sql = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158326/sql_btezcp.webp"
const django = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1750292305/Screenshot_2025-06-19_031639_vmutu1.png"
const front = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1750292412/Screenshot_2025-06-19_031902_jgjdes.png"
const depi = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1752783989/DEPI_Data_Science_Grad_vpy20t.png"
const tailwindPractical = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1752783986/Tailwind_Practical_project_zvacda.png"
const tailwindBasics = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1752783985/Tailwind_Basics_vruvpl.png"
const tailwindSpecialization = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1752783980/Tailwind_Specialization_ztmvry.png"


const certificates = [
  {
    img: hcia,
    alt: "hcia",
    main: "HCIA:AI",
    sub: "From: Huawei ICT Academy",
    description: "Huawei Certified ICT Associate in AI (HCIA-AI) provides foundational knowledge in AI, covering machine learning, deep learning, and AI applications.",
    takeaways: [
      "Understanding AI fundamentals, including neural networks and deep learning.",
      "Exploring AI frameworks like TensorFlow and PyTorch.",
      "Learning how to train and optimize machine learning models.",
      "Gaining insights into AI applications in various industries.",
      "Developing AI models using Huawei's computing platforms."
    ]
  },
  {
    img: Git,
    alt: "Git",
    main: "Intro to Git and Github",
    sub: "From: Google | Coursera",
    description: "An introductory course on version control using Git and GitHub, essential for software development and collaboration.",
    takeaways: [
      "Understanding the importance of version control in software development.",
      "Learning Git commands like commit, push, pull, and merge.",
      "Creating and managing repositories on GitHub.",
      "Using branches for feature development and collaboration.",
      "Handling merge conflicts and contributing to open-source projects."
    ]
  },
  {
    img: aice,
    alt: "AICE",
    main: "AI Career Essential",
    sub: "From: Alx",
    description: "A practical AI career-oriented course covering essential skills in artificial intelligence and data science.",
    takeaways: [
      "Understanding key AI concepts, including supervised and unsupervised learning.",
      "Working with Python libraries like NumPy, Pandas, and Scikit-learn.",
      "Developing and evaluating machine learning models.",
      "Exploring real-world AI applications and use cases.",
      "Building a strong AI portfolio for job applications."
    ]
  },
  {
    img: django,
    alt: "Django",
    main: "Django Development",
    sub: "From: Meta | Coursera",
    description: "A comprehensive course on Django web framework, covering full-stack web development with Python.",
    takeaways: [
      "Understanding Django's MVT (Model-View-Template) architecture.",
      "Building dynamic web applications with Django ORM.",
      "Implementing user authentication and authorization systems.",
      "Creating RESTful APIs using Django REST Framework.",
      "Deploying Django applications to production environments."
    ]
  },
  {
    img: front,
    alt: "intro to front end",
    main: "Intro To Front End",
    sub: "From: Meta | Coursera",
    description: "An introductory course on front-end web development covering HTML, CSS, and JavaScript fundamentals.",
    takeaways: [
      "Learning HTML structure, semantic elements, and accessibility best practices.",
      "Mastering CSS for responsive design, layouts, and animations.",
      "Understanding JavaScript fundamentals and DOM manipulation.",
      "Building interactive user interfaces with modern web technologies.",
      "Implementing responsive design principles for mobile-first development."
    ]
  },
  {
    img: introToBackend,
    alt: "Intro to Backend",
    main: "Intro to Backend",
    sub: "From: Meta | Coursera",
    description: "An introductory course on backend development using Node.js and Express, covering server-side programming and API development.",
    takeaways: [
      "Understanding server-side programming concepts.",
      "Building RESTful APIs using Node.js and Express.",
      "Implementing authentication and authorization mechanisms.",
      "Handling database integration with MongoDB or PostgreSQL."
    ]
  },
  {
    img: ProgramminginPython,
    alt: "Programming in Python",
    main: "Programming in Python",
    sub: "From: Meta | Coursera",
    description: "An introductory course on Python programming, covering essential programming concepts and applications.",
    takeaways: [
      "Learning Python syntax, variables, and data types.",
      "Understanding control flow: loops and conditionals.",
      "Working with functions and object-oriented programming in Python.",
      "Using Python for data manipulation and automation.",
      "Writing scripts for real-world applications."
    ]
  },
  {
    img: versionControl,
    alt: "Version Control",
    main: "Version Control",
    sub: "From: Meta | Coursera",
    description: "An introductory course on version control using Git and GitHub, essential for software development and collaboration.",
    takeaways: [
      "Understanding the importance of version control in software development.",
      "Learning Git commands like commit, push, pull, and merge.",
      "Creating and managing repositories on GitHub.",
      "Using branches for feature development and collaboration.",
      "Handling merge conflicts and contributing to open-source projects."
    ]
  },
  {
    img: introToDataBase,
    alt: "Intro to DataBase",
    main: "Intro to DataBase",
    sub: "From: Meta | Coursera",
    description: "An introductory course on database management using SQL, covering essential database concepts and applications.",
    takeaways: [
      "Understanding database design principles.",
      "Learning SQL syntax for database operations.",
      "Implementing transactions and queries in SQL.",
      "Handling data normalization and relational models."
    ]
  },
  {
    img: java,
    alt: "Java",
    main: "Java Course",
    sub: "From: Huawei ICT Academy",
    description: "A comprehensive Java course covering object-oriented programming (OOP), Java syntax, and software development principles.",
    takeaways: [
      "Mastering Java syntax, including variables, loops, and conditionals.",
      "Understanding object-oriented programming (OOP) concepts like inheritance and polymorphism.",
      "Working with Java collections and data structures.",
      "Writing efficient, reusable, and maintainable Java code.",
      "Developing small Java applications and understanding multithreading."
    ]
  },
  {
    img: ecpc,
    alt: "ECPC",
    main: "ECPC Competition",
    sub: "Technology: ECPC",
    description: "Egyptian Collegiate Programming Contest (ECPC), a competitive programming event focusing on algorithms and problem-solving.",
    takeaways: [
      "Improving problem-solving and algorithmic thinking skills.",
      "Practicing data structures like arrays, trees, and graphs.",
      "Enhancing coding efficiency with time and space complexity analysis.",
      "Collaborating in a competitive programming environment.",
      "Preparing for global programming competitions like ICPC."
    ]
  },
  {
    img: dotpy,
    alt: "Dotpy",
    main: "AI Diploma",
    sub: "From: Dotpy",
    description: "A specialized AI diploma covering machine learning, deep learning, and AI deployment strategies.",
    takeaways: [
      "Understanding the fundamentals of machine learning and deep learning.",
      "Exploring natural language processing (NLP) and computer vision techniques.",
      "Working with AI models using TensorFlow and PyTorch.",
      "Deploying AI models in production environments.",
      "Learning AI ethics and responsible AI development."
    ]
  },
  {
    img: clean,
    alt: "clean-code",
    main: "Clean Code",
    sub: "From: ITI",
    description: "A course on writing high-quality, maintainable, and readable code following best practices.",
    takeaways: [
      "Understanding the principles of clean and efficient code.",
      "Learning best practices for naming conventions and code structure.",
      "Avoiding code smells and refactoring code effectively.",
      "Writing modular and reusable functions.",
      "Enhancing software maintainability with proper documentation."
    ]
  },
  {
    img: oop,
    alt: "OOP",
    main: "Mastering OOP",
    sub: "From: ITI",
    description: "An advanced object-oriented programming course covering design patterns and best practices.",
    takeaways: [
      "Understanding OOP principles: encapsulation, inheritance, polymorphism, and abstraction.",
      "Implementing design patterns like Singleton, Factory, and Observer.",
      "Enhancing software architecture using SOLID principles.",
      "Building scalable and maintainable object-oriented applications.",
      "Applying OOP concepts in real-world projects."
    ]
  },
  {
    img: hc,
    alt: "HTML-CSS",
    main: "HTML and CSS",
    sub: "From: ITI",
    description: "A fundamental course on web development using HTML and CSS for creating responsive websites.",
    takeaways: [
      "Learning HTML structure, elements, and semantic tags.",
      "Mastering CSS for styling and layout design.",
      "Using Flexbox and Grid for responsive web design.",
      "Applying media queries for mobile-first development.",
      "Understanding CSS animations and transitions."
    ]
  },
  {
    img: py,
    alt: "python",
    main: "Python",
    sub: "From: Kaggle",
    description: "An introductory Python course covering essential programming concepts and applications.",
    takeaways: [
      "Learning Python syntax, variables, and data types.",
      "Understanding control flow: loops and conditionals.",
      "Working with functions and object-oriented programming in Python.",
      "Using Python for data manipulation and automation.",
      "Writing scripts for real-world applications."
    ]
  },
  {
    img: pan,
    alt: "Pandas",
    main: "Pandas",
    sub: "From: Kaggle",
    description: "A course on Pandas, a powerful library for data manipulation and analysis.",
    takeaways: [
      "Understanding data structures: Series and DataFrames.",
      "Loading, cleaning, and transforming datasets.",
      "Performing data aggregation and grouping.",
      "Using Pandas for exploratory data analysis (EDA).",
      "Handling missing data and outliers effectively."
    ]
  },
  {
    img: machine,
    alt: "intro-to-machine",
    main: "Intro to Machine Learning",
    sub: "From: Kaggle",
    description: "A beginner-friendly course on the basics of machine learning, including supervised and unsupervised learning techniques.",
    takeaways: [
      "Understanding key machine learning concepts and algorithms.",
      "Working with Scikit-learn for model building.",
      "Evaluating model performance using metrics like accuracy and RMSE.",
      "Applying machine learning to real-world datasets.",
      "Handling data preprocessing and feature engineering."
    ]
  },
  {
    img: data,
    alt: "data-cleaning",
    main: "Data Cleaning",
    sub: "From: Kaggle",
    description: "A course on cleaning and preprocessing datasets to improve data quality for analysis and machine learning models.",
    takeaways: [
      "Identifying and handling missing values.",
      "Standardizing and normalizing data.",
      "Detecting and fixing inconsistent or erroneous data.",
      "Transforming and encoding categorical variables.",
      "Using Python libraries like Pandas for data cleaning tasks."
    ]
  },
  {
    img: sql,
    alt: "sql",
    main: "SQL Course",
    sub: "From: Udemy",
    description: "A comprehensive SQL course covering database management, queries, and data analysis.",
    takeaways: [
      "Understanding SQL syntax and commands (SELECT, INSERT, UPDATE, DELETE).",
      "Writing complex queries using JOIN, GROUP BY, and HAVING.",
      "Working with relational databases like MySQL and PostgreSQL.",
      "Optimizing queries for better performance.",
      "Using SQL for data analysis and reporting."
    ]
  },
  {
    img: depi,
    alt: "DEPI",
    main: "Data Science Grad",
    sub: "From: DEPI",
    description: "A comprehensive data science program covering the full data science lifecycle, from data wrangling to machine learning and deployment.",
    takeaways: [
      "Mastering data wrangling, cleaning, and preprocessing techniques.",
      "Building and evaluating machine learning models for real-world problems.",
      "Understanding data visualization and communication best practices.",
      "Deploying data science solutions and working with cloud platforms.",
      "Completing hands-on projects to build a strong data science portfolio."
    ]
  },
  {
    img: tailwindSpecialization,
    alt: "Tailwind Specialization",
    main: "Tailwind Specialization",
    sub: "From: Coursera",
    description: "A specialization focused on advanced Tailwind CSS techniques for building modern, responsive web interfaces.",
    takeaways: [
      "Mastering advanced Tailwind CSS utilities and configuration.",
      "Building scalable and maintainable design systems.",
      "Implementing custom themes and responsive layouts.",
      "Optimizing performance and accessibility with Tailwind.",
      "Completing real-world projects using Tailwind CSS."
    ]
  },
  {
    img: tailwindPractical,
    alt: "Tailwind Practical",
    main: "Tailwind Practical Project",
    sub: "From: Coursera",
    description: "A hands-on project course applying Tailwind CSS to build a fully responsive and interactive web application.",
    takeaways: [
      "Applying Tailwind CSS to real-world web projects.",
      "Building responsive layouts and interactive UI components.",
      "Integrating Tailwind with modern JavaScript frameworks.",
      "Following best practices for code organization and reusability.",
      "Deploying and showcasing a completed Tailwind project."
    ]
  },
  {
    img: tailwindBasics,
    alt: "Tailwind Basics",
    main: "Tailwind Basics",
    sub: "From: Coursera",
    description: "An introductory course on Tailwind CSS, covering the fundamentals of utility-first CSS and rapid UI development.",
    takeaways: [
      "Understanding the utility-first approach of Tailwind CSS.",
      "Learning core Tailwind classes for layout, spacing, and typography.",
      "Building simple, responsive web pages with Tailwind.",
      "Customizing Tailwind configuration for project needs.",
      "Gaining confidence in using Tailwind for rapid prototyping."
    ]
  }
];
const certDesc = () => {
  const { certId } = useParams();
  
  const cert = certificates.find(({ alt }) => alt === certId);
  
  // If certificate not found, show error page
  if (!cert) {
    return <Error />;
  }
  
  return (
    <>
      <div className="describiton">
        <div className="all">
        <div className="text-container">
          <div className="big-text">CERTIFICATE</div>
          <div className="title-text">Certificate Description</div>
        </div>
        <hr className="lin" />
          <div className="cert-details">
            
          <div className="text">
            <h1>{cert.main}</h1>
            <p className="sup-title">{cert.sub}</p>
            <p className="d">{cert.description}</p>
            <hr className="lin" />
            <h2>Key Takeaways:</h2>
            <ul>
              {cert.takeaways.map((takeaway, index) => (
                <li key={index}>{takeaway}</li>
              ))}
            </ul>
          </div>
          <div className="image-container">
            <motion.img src={cert.img} alt={cert.alt} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.1 }}/>
          </div>
        </div>
        <div className="banner">
          <div className="limit">
            <NavLink to="/" className="animated-button">
              <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">Return Main</span>
              <span className="circle"></span>
              <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </NavLink>
          </div>
        </div>
        </div>
      </div>
    </>
    
  );
};

export default certDesc;