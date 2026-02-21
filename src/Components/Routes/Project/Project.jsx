import React, { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import './Project.css'

const projects = [
  {
    title: "AI Project",
    items: [
      {
        link: "https://github.com/Aly-EL-Badry/Pothole-Detection",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745155110/pothole_detection_1_nqaolw.webp",
        alt: "pothole Detection",
        main: "Pothole-Detection",
        sub: "A Object Detection Model For Potholes in the Streets",
        tags: ["YOLO", "Computer Vision", "Deep Learning"],
        details: {
          problem: `Potholes are a common issue in urban and rural roadways worldwide, posing serious hazards to vehicles and pedestrians alike. They cause damage to tires, suspensions, and other vehicle components, lead to traffic congestion, and increase the risk of accidents. For city authorities and road maintenance teams, identifying potholes efficiently and prioritizing repairs is a major challenge. Traditional methods rely on manual inspections, which are time-consuming, labor-intensive, and prone to human error. Furthermore, manual monitoring often fails to provide real-time data, making it difficult to respond promptly to emerging hazards. As cities grow and traffic increases, there is a pressing need for an automated, scalable solution that can continuously monitor roads and detect potholes accurately.`,
          
          solution: `The Pothole Detection project addresses this problem by leveraging computer vision and deep learning techniques to automatically identify potholes from road images. Using the YOLO (You Only Look Once) object detection framework, the system can process images captured by cameras mounted on vehicles or drones in real-time, accurately detecting potholes and localizing their positions on the road. The model is trained on a diverse dataset of road conditions to recognize potholes of varying sizes, shapes, and lighting conditions. Detected potholes can be mapped geographically, allowing maintenance teams to prioritize repairs based on severity and location. This automated solution significantly reduces the need for manual inspection, improves road safety, and enables proactive maintenance strategies. The project uses Python, OpenCV, TensorFlow, and YOLO for image processing, model training, and deployment, providing a robust and efficient tool for modern road infrastructure management.`
        }
      },
      {
        link: "https://github.com/Aly-EL-Badry/NY-Taxi-DashBoard",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745155108/ny-taxi_mfu1iz.webp",
        alt: "NY Taxi",
        main: "New york Taxi Dashboard",
        sub: "Dashboard That Show analysis for Taxi Target in NewYork",
        tags: ["Data Visualization", "Dash", "Plotly"],
        details: {
          problem: `New York City operates one of the largest taxi fleets in the world, with millions of trips occurring each year. For taxi operators, drivers, and policymakers, understanding trends in ride demand, peak hours, geographic hotspots, and revenue generation is critical. However, the raw taxi trip data is massive, often containing millions of records with timestamps, pickup/dropoff locations, fares, and passenger counts. Analyzing this data manually is impractical, time-consuming, and prone to errors. Without a clear visualization, it is difficult to identify patterns, monitor driver performance, optimize routes, or make data-driven business decisions. This lack of insight can lead to inefficiencies, reduced profitability, and poor customer satisfaction.`,
          
          solution: `The New York Taxi Dashboard project solves this problem by creating an interactive data visualization platform that provides actionable insights from large-scale taxi trip data. The dashboard aggregates and visualizes key metrics such as trip counts, revenue, passenger distribution, and geographic hotspots on an interactive map of New York City. Users can filter data by date, time, or location to analyze trends and identify peak demand areas. Advanced visualizations such as line charts, heatmaps, and bar plots are used to display temporal and spatial patterns clearly. Built with Python, Dash, and Plotly, the dashboard allows real-time interaction and responsive exploration of the data. By converting raw trip records into visual insights, this project enables taxi companies and operators to optimize driver allocation, improve service efficiency, plan promotions, and ultimately enhance the customer experience. The solution transforms complex, large datasets into a comprehensible and actionable tool for decision-making in urban transportation.`
        }
      },
      {
        link: "https://github.com/Aly-EL-Badry/DisasterPrediction",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1771711582/1756504675321_cd6x1g.jpg",
        alt: "Disaster Detection",
        main: "Disaster Detection Project",
        sub: "Detects and classifies natural disasters from social media data",
        tags: ["Python", "Mlops", "Deep Learning"],
        details: {
          problem: `Natural disasters, including earthquakes, floods, hurricanes, and wildfires, strike unexpectedly and often cause widespread damage, affecting millions of people globally. Rapid identification and response are critical for saving lives, minimizing damage, and mobilizing emergency services efficiently. Social media platforms such as Twitter have become vital sources of real-time information during disasters, but manually monitoring and analyzing thousands of posts is impossible. Furthermore, images shared online can provide immediate visual evidence of the disaster, yet categorizing and validating this information quickly is challenging. Without an automated system, authorities risk delays, miscommunication, and inefficient resource allocation.`,
          solution: `The Disaster Detection Project addresses this challenge by leveraging Natural Language Processing (NLP) and computer vision techniques to automatically detect and classify disaster-related information from social media. The system ingests real-time posts and images, cleans and preprocesses the textual data, and applies deep learning models to determine whether a post is relevant to a disaster event. Images are analyzed using convolutional neural networks to identify visual evidence of damage or hazards. The project then categorizes the disaster type, generates alerts, and compiles actionable insights for first responders and emergency teams. By automating the monitoring process, it enables faster decision-making, improves situational awareness, and enhances the ability to respond to crises effectively. This project combines Python, TensorFlow, Keras, OpenCV, and NLP libraries like NLTK to create an end-to-end solution that transforms raw social media data into actionable intelligence.`
        }
      },
      {
        link: "https://github.com/Aly-EL-Badry/Flight-Delay-Prediction-MLops",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1771711584/1770334911378_mf9yre.jpg",
        alt: "Flight Delay Prediction",
        main: "Flight Delay Prediction",
        sub: "Predicts flight delays using historical flight data",
        tags: ["Python", "Machine Learning", "Deep Learning", "Mlops"],
        details: {
          problem: `Flight delays are one of the most common and frustrating issues faced by passengers and airlines alike. Unpredictable delays can lead to missed connections, increased travel costs, dissatisfied customers, and operational inefficiencies for airlines. Delays often result from multiple complex factors, including weather conditions, air traffic congestion, technical issues, and scheduling conflicts. Traditional methods for predicting delays are limited and often reactive, relying on historical patterns without adapting to new, dynamic variables. As flights increase worldwide, there is a growing need for a proactive, data-driven approach that accurately forecasts delays to improve customer experience and operational efficiency.`,
          solution: `The Flight Delay Prediction Project tackles this problem by leveraging historical flight data to build predictive models capable of estimating the likelihood and duration of flight delays. The project collects and preprocesses data such as flight schedules, airline routes, weather conditions, and historical delays, and applies feature engineering to highlight patterns that correlate with delays. Machine learning models, including regression and classification algorithms, are trained to predict potential delays and provide probabilistic forecasts. The solution allows passengers to plan more effectively and helps airlines optimize scheduling, manage resources, and minimize disruption. Technologies like Python, Scikit-Learn, Pandas, NumPy, Matplotlib, and Seaborn are used to clean, analyze, visualize, and model the data, ensuring the predictions are interpretable and actionable. By offering a predictive approach, the project transforms reactive flight management into a proactive strategy.`
        }
      },
      // {
      //   link: "https://github.com/Aly-EL-Badry/AGNews-Classifier",
      //   img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1760000006/agnews.webp",
      //   alt: "AGNews Text Classification",
      //   main: "AGNews Classifier",
      //   sub: "Classifies news articles into predefined categories using NLP",
      //   tags: ["Python", "NLP", "Deep Learning"],
      //   details: {
      //     problem: `The rapid growth of online news content makes it extremely difficult for readers, editors, and journalists to manually categorize and filter articles for timely consumption. News platforms publish thousands of articles daily across multiple categories such as World, Business, Sports, and Science/Technology. Without automation, sorting these articles is inefficient and error-prone, resulting in delays in delivering relevant information to readers, poor user experience, and missed opportunities for targeted content delivery. Manual classification is labor-intensive and cannot scale to meet the demand of modern news platforms.`,
      //     solution: `The AGNews Classifier Project solves this problem by building an automated text classification system that accurately categorizes news articles into predefined categories. The project leverages Natural Language Processing (NLP) techniques and deep learning models to process textual content, extracting meaningful features that capture context, semantics, and intent. Preprocessing steps include tokenization, normalization, and embedding generation. Transformers and PyTorch models are trained on the AGNews dataset to classify articles efficiently and accurately. The solution allows news platforms to automatically organize content, deliver personalized feeds to users, and enhance the speed and quality of information dissemination. The technology stack includes Python, PyTorch, HuggingFace Transformers, NLTK, and Scikit-Learn for modeling, preprocessing, and evaluation. This approach reduces manual labor, improves scalability, and ensures that readers receive timely, categorized news content.`
      //   }
      // },
      {
        link: "https://github.com/Aly-EL-Badry/Chat-MD",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1771711584/Gemini_Generated_Image_ak0dsaak0dsaak0d_yjpha4.png",
        alt: "Chat MD",
        main: "Chat MD",
        sub: "AI-powered chatbot for medical questions and advice",
        tags: ["Python", "NLP", "Transformers", "AI Chatbot"],
        details: {
          problem: `Access to reliable medical information is a challenge for many people. Patients often have medical questions that require accurate guidance, but consulting a professional is not always immediately possible due to cost, location, or time constraints. Additionally, the volume of medical information online can be overwhelming and sometimes misleading, leading to confusion or wrong self-diagnosis. There is a need for a trustworthy, automated system that can provide preliminary medical insights based on established knowledge and trained models.`,
          solution: `The Chat MD Project addresses this by developing an AI chatbot capable of understanding medical questions, providing relevant answers, and offering guidance on common conditions. The system leverages Natural Language Processing (NLP) and pre-trained transformer models to interpret queries, retrieve relevant information from curated medical knowledge bases, and respond in a clear and accurate manner. The chatbot is designed to assist users in obtaining preliminary insights, recommending next steps, and improving awareness of medical conditions. Python, HuggingFace Transformers, PyTorch, and NLP libraries such as SpaCy are used for text processing, model training, and response generation. By providing an interactive, AI-driven interface, Chat MD helps bridge the gap between patients and accessible medical information, ensuring safe and reliable guidance.`
        }
      }
    ],
  },
  {
    title: "Web Development",
    items: [
      {
        link: "https://alkamalcenter.com/",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1750289036/Screenshot_2025-06-19_022311_qwoivs.png",
        alt: "Al-Kamal Center",
        main: "Al-Kamal Center",
        sub: "E-Commerce Website for Al-Kamal Center",
        tags: ["React", "DataBase", "TailWind"],
        details: {
          description: `An e-commerce website for Al-Kamal Center built with React and TailWind, featuring dynamic product listings, responsive design, and database integration for managing products, categories, and orders.`
        }
      },
      {
        link: "https://github.com/Aly-EL-Badry/RecipeHub",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1748179221/screenshot_euiznx.png",
        alt: "RecipeHub",
        main: "RecipeHub",
        sub: "A Full-Stack Website Supplied With Ai Chat Bot",
        tags: ["Django", "Cloudinary", "MySql"],
        details: {
          description: `A full-stack recipe platform with an AI chat bot to assist users in finding and modifying recipes. Built with Django, MySQL, and Cloudinary for image hosting.`
        }
      },
      {
        link: "https://github.com/Aly-EL-Badry/Fashion-Corner",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745155111/fasion_twfrhh.webp",
        alt: "Fasion Corner",
        main: "Fasion Corner",
        sub: "E-commerce Clothes Shop",
        tags: ["React", "Bootstrap", "CSS"],
        details: {
          description: `A modern e-commerce clothing shop built with React and Bootstrap. Features include product galleries, filtering, shopping cart, and responsive design for seamless online shopping.`
        }
      },
      {
        link: "https://github.com/Aly-EL-Badry/My-House/",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745155109/house_e6vgxj.webp",
        alt: "Home",
        main: "My House",
        sub: "E-Commerce Website for Furniture",
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        details: {
          description: `An e-commerce furniture website providing interactive product galleries, cart functionality, and a responsive design built with HTML, CSS, JavaScript, and Bootstrap.`
        }
      },
      {
        link: "https://github.com/Aly-EL-Badry/E-Learn-Website",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745155108/e-learn_zxtz5m.webp",
        alt: "e-learn",
        main: "E-Learn Template",
        sub: "E-Learning Website",
        tags: ["HTML", "CSS"],
        details: {
          description: `A clean and responsive e-learning template built with HTML and CSS, designed for organizing courses and content for an intuitive online learning experience.`
        }
      }
    ]
  },
  {
    title: "Different Fields Project",
    items: [
      {
        link: "https://github.com/Aly-EL-Badry/Vole-Machine-simulator",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745155111/vole_iyqgwl.webp",
        alt: "vole machine",
        main: "Vole Machine Simulator",
        sub: "A simulation for vole Machine in the computer",
        tags: ["C++", "QT", "Simulation"],
        details: {
          description: `A computer-based simulation of a Vole Machine built with C++ and QT. It demonstrates the mechanics and operation of the machine, providing an interactive way to visualize its processes for learning and analysis purposes.`
        }
      },
      {
        link: "https://github.com/Aly-EL-Badry/Pics-Modifier",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745155111/photoshop_n3z9zs.webp",
        alt: "PiscArt.",
        main: "piscArt",
        sub: "A PhotoShop Program for 18 Different Filters",
        tags: ["C++", "Image Processing"],
        details: {
          description: `piscArt is an image editing program developed in C++ that allows users to apply 18 different filters to photos. It provides basic image manipulation functionalities similar to Photoshop for learning and experimentation.`
        }
      },
      {
        link: "https://github.com/Aly-EL-Badry/Course-Management-System",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1750290541/WhatsApp_Image_2025-05-18_at_19.08.55_d6640cb4_mxb704.jpg",
        alt: "Course Management System",
        main: "Course Management System",
        sub: "A Course Managment System For College",
        tags: ["C#", "MySql"],
        details: {
          description: `A Course Management System built with C# and MySQL that helps colleges manage courses, student enrollment, and schedules efficiently. The system streamlines administrative tasks and provides a simple interface for academic management.`
        }
      },
      {
        link: "https://github.com/Aly-EL-Badry/Tharwa-Project",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1750290010/Screenshot_2025-06-19_023952_xtzyh6.png",
        alt: "Tharwa Project",
        main: "Tharwa Documentation",
        sub: "It is a documentation for A personal investment Project",
        tags: ["Java", "SRS", "SDS"],
        details: {
          description: `Tharwa Documentation is a comprehensive Java project that provides detailed documentation (SRS & SDS) for a personal investment project, explaining requirements, system design, and workflow for reference and development purposes.`
        }
      },
      {
        link: "https://github.com/Ali-EL-Badry/X-Game-O",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745155110/x_ongy3b.webp",
        alt: "X-Games-o",
        main: "X-Games-o",
        sub: "Some X-O Games For OOP Training",
        tags: ["C++", "Game Development"],
        details: {
          description: `X-Games-o is a collection of X-O (Tic-Tac-Toe) games developed in C++ to practice object-oriented programming concepts. It demonstrates the use of classes, objects, and game logic in a hands-on project.`
        }
      }
    ]
  },
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);

  const closeModal = useCallback(() => {
    setSelectedProject(null);
    setSelectedImageUrl(null);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    if (selectedProject) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      const imgs = selectedProject.images || [selectedProject.img];
      setSelectedImageUrl(imgs[0] || selectedProject.img);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [selectedProject, closeModal]);

  return (
    <motion.div className="pro">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}  
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }} 
        className='title first'
      >
        Mega project
      </motion.div>
      <motion.hr  
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}  
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      <motion.div 
        className="satalitor-section"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}  
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="satalitor-container"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}  
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div className="satalitor-content">
            <motion.div 
              className="satalitor-video"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}  
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <div className="video-container">
                <iframe 
                  src="https://www.youtube.com/embed/0y7AV4b-XJA" 
                  title="Satalitor Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="video-overlay"></div>
              </div>
            </motion.div>
            
            <motion.div 
              className="satalitor-text"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}  
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <h2 className="satalitor-title">Satalitor</h2>
              <p className="satalitor-subtitle">AI-Driven Agricultural Insight Platform</p>
              
              <div className="key-points">
                <div className="key-point">
                  <div className="point-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div className="point-content">
                    <h4>Satellite Imagery Analysis</h4>
                    <p>Deep learning models analyze Earth's surface using advanced satellite data</p>
                  </div>
                </div>
                
                <div className="key-point">
                  <div className="point-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div className="point-content">
                    <h4>Soil & Land Detection</h4>
                    <p>Detects soil type, segments land, and predicts NPK nutrients</p>
                  </div>
                </div>
                
                <div className="key-point">
                  <div className="point-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                    </svg>
                  </div>
                  <div className="point-content">
                    <h4>Crop Recommendations</h4>
                    <p>AI suggests optimal crops based on soil analysis and environmental data</p>
                  </div>
                </div>
                
                <div className="key-point">
                  <div className="point-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                  </div>
                  <div className="point-content">
                    <h4>Comprehensive Reports</h4>
                    <p>Generates detailed agricultural reports with actionable insights</p>
                  </div>
                </div>
              </div>
              
              <div className="tech-stack">
                <div className="tech-item">
                  <div className="tech-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <span>React js</span>
                </div>
                <div className="tech-item">
                  <div className="tech-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <span>Flask</span>
                </div>
                <div className="tech-item">
                  <div className="tech-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <span>AI | DL</span>
                </div>
                <div className="tech-item">
                  <div className="tech-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <span>Data Analysic</span>
                </div>
              </div>
              
              <div className="satalitor-buttons">
                <motion.a 
                  href="https://satellitor.netlify.app/"
                  className="satalitor-button primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Visit Website</span>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  </svg>
                </motion.a>
                <motion.a 
                  href="https://www.youtube.com/watch?v=0y7AV4b-XJA"
                  className="satalitor-button secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Watch Full Demo</span>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Existing Project Sections */}
      {projects.map((project, index) => (
        <motion.div 
          key={index}
          className="project-section"
        >
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}  
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }} 
            className={`title ${index === 0 ? "first" : ""}`}
          >
            {project.title}
          </motion.div>
          <motion.hr  
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}  
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          <motion.div className="cards">
            {project.items.map((item, i) => (
              <motion.div
                className="ca project-card"
                key={i}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProject(item)}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(item)}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="img-container">
                  <img src={item.img} loading="lazy" alt={item.alt} />
                  <div className="img-overlay"></div>
                </div>
                <div className="content">
                  <p className="main">{item.main}</p>
                  <p className="sub">{item.sub}</p>
                  <div className="tags">
                    {item.tags && item.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeModal}
          >
            <motion.div
              className="project-modal project-modal-card"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="project-modal-close"
                onClick={closeModal}
                aria-label="Close"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <div className="project-modal-hero">
                <img
                  src={selectedImageUrl || selectedProject.img}
                  alt={selectedProject.alt}
                />
                <div className="project-modal-hero-overlay" />
                <div className="project-modal-header project-modal-header-overlay">
                  <h2 className="project-modal-title">{selectedProject.main}</h2>
                  <p className="project-modal-subtitle">{selectedProject.sub}</p>
                </div>
              </div>

              <div className="project-modal-grid">
                {/* Left: Problem & Solution (image opens here = main hero above) */}
                <div className="project-modal-left">
                  <div className="project-modal-details">
                    {selectedProject.details?.problem != null && (
                      <>
                        <h3 className="project-modal-detail-heading">Problem</h3>
                        <p className="project-modal-detail-text">{selectedProject.details.problem}</p>
                        <h3 className="project-modal-detail-heading">Solution</h3>
                        <p className="project-modal-detail-text">{selectedProject.details.solution}</p>
                      </>
                    )}
                    {selectedProject.details?.description != null && (
                      <>
                        <h3 className="project-modal-detail-heading">About</h3>
                        <p className="project-modal-detail-text">{selectedProject.details.description}</p>
                      </>
                    )}
                  </div>
                </div>

                {/* Right: only small thumbnails (click to show in hero), tech, link */}
                <div className="project-modal-right">
                  <div className="project-modal-thumbnails-wrap">
                    <span className="project-modal-thumbnails-label">Images</span>
                    <div className="project-modal-thumbnails">
                      {(selectedProject.images || [selectedProject.img]).map((src, idx) => (
                        <button
                          type="button"
                          key={idx}
                          className={`project-modal-thumb ${selectedImageUrl === src ? 'active' : ''}`}
                          onClick={() => setSelectedImageUrl(src)}
                        >
                          <img src={src} alt={`${selectedProject.alt} ${idx + 1}`} />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="project-modal-tech-wrap">
                    <span className="project-modal-tech-label">Tech</span>
                    <div className="project-modal-tags">
                      {selectedProject.tags?.map((tag, tagIndex) => (
                        <span key={tagIndex} className="project-modal-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={selectedProject.link}
                    className="project-modal-link-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>View project</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Project;