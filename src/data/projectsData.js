export const projects = [
  {
    title: "AI Project",
    items: [
      {
        links: [
          { label: "Docker Image", url: "https://hub.docker.com/r/alyelbadry/disaster-prediction-api" },
          { label: "GitHub", url: "https://github.com/Aly-EL-Badry/DisasterPrediction" },
        ],
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1771711582/1756504675321_cd6x1g.jpg",
        alt: "Disaster Detection",
        main: "Disaster Detection Project",
        sub: "Detects and classifies natural disasters from social media data",
        tags: ["Python", "Mlops", "Deep Learning", "Machine learning", "Docker", "Zenml", "mlflow", "DVC", "Pipeline Development", "FastAPI", "CI/CD"],
        images: [
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1771711582/1756504675321_cd6x1g.jpg",
          'https://res.cloudinary.com/dqktuc5ej/image/upload/v1771723379/1756504674549_kvxvfx.jpg',
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1771723379/1756504675811_wvtrhc.jpg",
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1771723379/1756504673868_tlns2z.jpg",
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1771723379/1756504673465_dkndm8.jpg",
        ],
        details: {
          problem: `Natural disasters, including earthquakes, floods, hurricanes, and wildfires, strike unexpectedly and often cause widespread damage, affecting millions of people globally. Rapid identification and response are critical for saving lives, minimizing damage, and mobilizing emergency services efficiently. Social media platforms such as Twitter have become vital sources of real-time information during disasters, but manually monitoring and analyzing thousands of posts is impossible. Furthermore, images shared online can provide immediate visual evidence of the disaster, yet categorizing and validating this information quickly is challenging. Without an automated system, authorities risk delays, miscommunication, and inefficient resource allocation.`,
          solution: `The Disaster Detection Project addresses this challenge by building an AI model that can automatically detect and classify disaster-related information from social media. The system ingests real-time posts and images, cleans and preprocesses the textual data, and applies deep learning models to determine whether a post is relevant to a disaster event. Images are analyzed using convolutional neural networks to identify visual evidence of damage or hazards. The project then categorizes the disaster type, generates alerts, and compiles actionable insights for first responders and emergency teams. By automating the monitoring process, it enables faster decision-making, improves situational awareness, and enhances the ability to respond to crises effectively. This project combines Python, TensorFlow, Keras, OpenCV, and NLP libraries like NLTK to create an end-to-end solution that transforms raw social media data into actionable intelligence.`
        }
      },
      {
        links: [
          { label: "View Ml and mlops", url: "https://github.com/Aly-EL-Badry/Flight-Delay-Prediction-MLops" },
          { label: "view Backend", url: "https://github.com/Aly-EL-Badry/FlightPrediction-Backend" },
          { label: "view Frontend", url: "https://github.com/Aly-EL-Badry/Flight-delay-prediction-Front-End" },
        ],
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1771711584/1770334911378_mf9yre.jpg",
        alt: "Flight Delay Prediction",
        main: "Flight Delay Prediction",
        sub: "Predicts flight delays using historical flight data",
        tags: ["Python", "Machine Learning", "Deep Learning", "Mlops", "Docker", "Zenml", "mlflow", "DVC", "Pipeline Development", "FastAPI", "CI/CD", "React", "Django", "Fast API", "Database", "Tailwind", "System Architecture"],
        images: [
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1771723766/1770334908825_lp5e7b.jpg",
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1771723766/1770334909585_erqell.jpg",
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1771711582/1770334910381_m8ot2u.jpg",
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1771711582/1770334910280_sszgak.jpg",
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1771711582/1770334910552_n0se5o.jpg",
        ],
        details: {
          problem: `Flight delays are one of the most common and frustrating issues faced by passengers and airlines alike. Unpredictable delays can lead to missed connections, increased travel costs, dissatisfied customers, and operational inefficiencies for airlines. Delays often result from multiple complex factors, including weather conditions, air traffic congestion, technical issues, and scheduling conflicts. Traditional methods for predicting delays are limited and often reactive, relying on historical patterns without adapting to new, dynamic variables. As flights increase worldwide, there is a growing need for a proactive, data-driven approach that accurately forecasts delays to improve customer experience and operational efficiency.`,
          solution: `The Flight Delay Prediction Project tackles this problem by leveraging historical flight data to build predictive models capable of estimating the likelihood and duration of flight delays. The project collects and preprocesses data such as flight schedules, airline routes, weather conditions, and historical delays, and applies feature engineering to highlight patterns that correlate with delays. Machine learning models, including regression and classification algorithms, are trained to predict potential delays and provide probabilistic forecasts. The solution allows passengers to plan more effectively and helps airlines optimize scheduling, manage resources, and minimize disruption. Technologies like Python, Scikit-Learn, Pandas, NumPy, Matplotlib, and Seaborn are used to clean, analyze, visualize, and model the data, ensuring the predictions are interpretable and actionable. By offering a predictive approach, the project transforms reactive flight management into a proactive strategy.`
        }
      },
      {
        link: "https://github.com/Aly-EL-Badry/Chat-MD",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1771711584/Gemini_Generated_Image_ak0dsaak0dsaak0d_yjpha4.png",
        alt: "Chat MD - Star Union Edition",
        main: "Chat MD",
        sub: "Internal AI architect for Star Union’s weekly content and task structuring",
        tags: ["Django", "LLM", "Prompt Engineering", "Star Union", "Workflow Automation", "Gemini", "AI Architect", "Markdown", "Content Engineering"], 
        details: {
          problem: `Managing the weekly flow of content and tasks within Star Union often leads to communication gaps. When raw project ideas and weekly assignments aren't properly structured, members can struggle to understand their specific responsibilities, leading to inconsistent execution and lost time. Manual formatting of these complex weekly updates is a bottleneck that prevents the team from moving quickly from planning to action.`,
          solution: `Chat MD serves as the structural backbone for Star Union's internal operations. It specifically transforms raw weekly goals and content ideas into highly organized, professional Markdown documentation. By automating the creation of clear task lists, structured content skeletons, and member-focused guides, it ensures every team member knows exactly what to do. This specialized tool bridges the gap between high-level planning and member clarity, ensuring Star Union's output remains consistent, readable, and perfectly formatted every week.`
        }
      },
      {
        link: "https://github.com/Aly-EL-Badry/Email-Automation-System",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1771711583/1769892935201_hum8hu.jpg",
        alt: "HR Email Classification Automation",
        main: "HR-Email-Classification-Automation",
        sub: "A Rule-Based Automation System for HR Email Sorting and Workflow Management",
        tags: ["Automation", "Python", "Workflow Optimization", "Email Management", "Real-World Problem"],
        details: {
          problem: `HR departments handle a continuous stream of emails daily, including job applications, leave requests, payroll inquiries, interview scheduling, employee documentation, and general questions. Manually reading, categorizing, and forwarding each email consumes significant time and increases the risk of delays or misrouting. As the organization grows, this repetitive administrative workload reduces efficiency and slows down HR operations. There is a strong need for a structured automation system that can streamline email handling without relying on manual intervention.`,
      
          solution: `The HR Email Classification Automation project delivers a fully rule-based automation system designed to automatically sort, label, and route HR-related emails to the appropriate folders or personnel. The system operates using predefined keyword rules, sender filters, subject-line matching, and structured logic workflows to determine the correct category for each email. Built using Python and email automation libraries (such as IMAP/SMTP integrations), the solution continuously monitors the inbox, applies classification rules, and triggers automated actions such as forwarding, tagging, or generating structured responses. By eliminating repetitive manual sorting tasks, this automation system improves response time, enhances organizational efficiency, reduces operational errors, and provides a scalable workflow management solution for HR teams.`
        }
      },
      {
        link: "https://github.com/Aly-EL-Badry/Pothole-Detection",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745155110/pothole_detection_1_nqaolw.webp",
        alt: "pothole Detection",
        main: "Pothole-Detection",
        sub: "A Object Detection Model For Potholes in the Streets",
        tags: ["YOLO", "Computer Vision", "Deep Learning", "Object Detection", "Real-Problem"],
        details: {
          problem: `Potholes represent a critical and persistent challenge across urban and rural road networks worldwide. They pose significant safety risks to drivers and pedestrians, contribute to vehicle damage such as tire and suspension failure, and increase traffic congestion and accident rates. For municipalities and infrastructure authorities, timely detection and prioritization of pothole repairs remains a complex operational problem. Traditional inspection methods rely heavily on manual surveys, which are labor-intensive, costly, time-consuming, and susceptible to human oversight. Moreover, these approaches lack real-time monitoring capabilities, delaying response times to emerging road hazards. With expanding cities and rising traffic density, there is an urgent demand for an intelligent, automated, and scalable solution capable of continuously monitoring road conditions and detecting potholes with high accuracy.`,
        
          solution: `The Pothole Detection project introduces an AI-powered solution that leverages advanced computer vision and deep learning techniques to automatically identify and localize potholes from road imagery. Built using the YOLO (You Only Look Once) object detection framework, the system processes images captured from vehicle-mounted cameras or drones in real time, ensuring rapid and accurate detection. The model is trained on a diverse dataset encompassing various road types, lighting conditions, and pothole characteristics to ensure robustness and generalization. Detected potholes can be geotagged and mapped, enabling authorities to prioritize maintenance based on severity, frequency, and location. By minimizing reliance on manual inspections, this solution enhances road safety, reduces operational costs, and supports proactive infrastructure management. The system is developed using Python, OpenCV, TensorFlow, and YOLO, delivering a scalable and production-ready tool for smart city road monitoring.`
        }
      },
      {
        link: "https://github.com/Aly-EL-Badry/NY-Taxi-DashBoard",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745155108/ny-taxi_mfu1iz.webp",
        alt: "NY Taxi",
        main: "New york Taxi Dashboard",
        sub: "Dashboard That Show analysis for Taxi Target in NewYork",
        tags: ["Data Visualization", "Dash", "Plotly", "Data Analysis", ""],
        details: {
          problem: `New York City operates one of the largest taxi fleets in the world, with millions of trips occurring each year. For taxi operators, drivers, and policymakers, understanding trends in ride demand, peak hours, geographic hotspots, and revenue generation is critical. However, the raw taxi trip data is massive, often containing millions of records with timestamps, pickup/dropoff locations, fares, and passenger counts. Analyzing this data manually is impractical, time-consuming, and prone to errors. Without a clear visualization, it is difficult to identify patterns, monitor driver performance, optimize routes, or make data-driven business decisions. This lack of insight can lead to inefficiencies, reduced profitability, and poor customer satisfaction.`,
          
          solution: `The New York Taxi Dashboard project solves this problem by creating an interactive data visualization platform that provides actionable insights from large-scale taxi trip data. The dashboard aggregates and visualizes key metrics such as trip counts, revenue, passenger distribution, and geographic hotspots on an interactive map of New York City. Users can filter data by date, time, or location to analyze trends and identify peak demand areas. Advanced visualizations such as line charts, heatmaps, and bar plots are used to display temporal and spatial patterns clearly. Built with Python, Dash, and Plotly, the dashboard allows real-time interaction and responsive exploration of the data. By converting raw trip records into visual insights, this project enables taxi companies and operators to optimize driver allocation, improve service efficiency, plan promotions, and ultimately enhance the customer experience. The solution transforms complex, large datasets into a comprehensible and actionable tool for decision-making in urban transportation.`
        }
      },
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
