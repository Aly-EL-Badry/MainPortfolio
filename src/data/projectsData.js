export const projects = [
  {
    title: "AI Project",
    items: [
      {
        period: "One Week",
        team: {
          name: "AI Zatoona Team",
          leader: false,
          members: [
            { name: "Maryam Ahmed", role: "Ai Engineer", github: "https://github.com/maryamahmedadel365-bit", linkedin: "https://www.linkedin.com/in/maryam-ahmed-298875327/" },
          ],
        },
        highlights: [],
        links: [
          { icon: "mobile", label: "Application", url: "https://github.com/Aly-EL-Badry/AI-Zatoona-app" },
          { icon: "brain", label: "Backend & AI", url: "https://github.com/maryamahmedadel365-bit/Research-AI-Agent-" },
        ],
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1790255753/logo_pxeptv.jpg",
        alt: "AI Zatoona",
        main: "AI Zatoona",
        sub: "Application that Summarizes AI Research Papers and Extracts important information using LLMs",
        tags: ['LangGraph', 'React Native', 'FastAPI', 'Python', 'LLMs', 'Agentic Systems', 'Docker', 'Notion API', 'NLP', 'Prompt Engineering', 'RESTful API', 'System Design', 'Mobile App Development', 'Git & GitHub'],
        images: [
          "https://www.youtube.com/embed/j3ALV9pQepQ",
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1790255372/1_xqadkx.jpg",
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1790255372/2_wlp35p.jpg",
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1790255372/3_usopmy.jpg",
        ],
        details: {
          concept: "The name 'AI Zatoona' comes from the Egyptian Arabic slang word 'زتونة' (zatóona), which means getting straight to the core of the subject or boiling something down to its essence. It captures the idea of cutting through the noise and extracting the most important information, which is exactly what the application does.",
          problem: `The academic publishing ecosystem is overflowing. Every day, hundreds of new AI research papers are posted on arXiv — dense, technical, and difficult to keep up with. Students and researchers struggle to stay current with the latest advancements, often spending hours reading lengthy papers only to forget the key details later. Valuable insights get lost in the flood of information, and building a consistent reading habit becomes a constant battle against overwhelm.`,
          solution: `AI Zatoona is an intelligent academic assistant that streamlines the research process. Built with LangGraph, FastAPI, and React Native, it automates the extraction of core methods, experiments, datasets, and limitations from AI papers. Summaries are automatically synced to Notion, creating a persistent knowledge base. The mobile app provides quick triaging on the go, while streak tracking keeps researchers motivated. It transforms daunting research into manageable, daily insights — helping you stay on top of AI innovation effortlessly.`,
          features: [
            { title: "Agentic Paper Triaging", desc: "Multi-agent LangGraph pipelines autonomously analyze arXiv preprints, extracting methods, experiments, datasets, and hidden limitations.", icon: "brain" },
            { title: "Automated Notion Sync", desc: "Structured summaries and citations are seamlessly exported into organized personal Notion research databases for long-term reference.", icon: "database" },
            { title: "Daily Reading Streaks", desc: "Gamified streak mechanics and habit tracking keep researchers consistent, turning sporadic reading into a disciplined daily practice.", icon: "streak" },
            { title: "Cross-Platform Mobile App", desc: "React Native interface for instant arXiv browsing, summary cards, and on-the-go research triaging from anywhere.", icon: "mobile" }
          ]
        }
      },
      {
        period: "1 Month",
        team: {
          name: "Solo Project",
        },
        highlights: [
          { type: "featured", text: "Full-Stack Project with a scalable MLOps pipeline for deployment and full mentoring" },
        ],
        links: [
          { icon: "docker", label: "Docker", url: "https://hub.docker.com/r/alyelbadry/disaster-prediction-api" },
          { icon: "github", label: "GitHub", url: "https://github.com/Aly-EL-Badry/DisasterPrediction" },
        ],
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1771711582/1756504675321_cd6x1g.jpg",
        alt: "Disaster Detection",
        main: "Disaster Detection",
        sub: "Detects and classifies natural disasters from social media data",
        tags: ["Python", "MLOps", "Deep Learning", "Machine Learning", "Computer Vision", "NLP", "ZenML", "MLflow", "DVC", "Docker", "FastAPI", "CI/CD", "CNN", "Data Preprocessing", "Pipeline Development", "RESTful API"],
        images: [
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1771711582/1756504675321_cd6x1g.jpg",
          'https://res.cloudinary.com/dqktuc5ej/image/upload/v1771723379/1756504674549_kvxvfx.jpg',
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1771723379/1756504675811_wvtrhc.jpg",
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1771723379/1756504673868_tlns2z.jpg",
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1771723379/1756504673465_dkndm8.jpg",
        ],
        details: {
          overview: "A production-grade MLOps system that ingests multimodal social media feeds during emergency events. It combines NLP text classification and computer vision to filter out noise, verify damage in real time, and deliver rapid situational awareness for first responders.",
          problem: `Natural disasters like earthquakes, floods, and hurricanes require immediate, minute-by-minute response. While social media platforms host massive volumes of real-time eyewitness posts and photos, manual triage is impossible amidst the flood of rumors, duplicate reports, and irrelevant chatter. Emergency coordination teams struggle to quickly verify authentic distress signals, quantify on-the-ground damage, and deploy life-saving resources before communication channels collapse.`,
          solution: `The Disaster Detection platform solves this bottleneck through an automated, end-to-end MLOps pipeline. The system ingests live posts and imagery, processing text with deep learning NLP models and validating visual damage with convolutional neural networks. Built on ZenML, MLflow, and DVC for full experiment reproducibility and pipeline orchestration, the entire service is containerized with Docker and served via FastAPI—enabling low-latency predictions, reliable disaster classification, and rapid alert generation for emergency teams.`,
          features: [
            { title: "Multimodal Deep Learning", desc: "Dual NLP and CNN architecture that cross-references text distress signals with visual damage validation to filter false alarms.", icon: "brain" },
            { title: "Orchestrated MLOps Pipelines", desc: "Automated, reproducible data preprocessing and model training workflows powered by ZenML and DVC data versioning.", icon: "pipeline" },
            { title: "Experiment Tracking & Registry", desc: "Comprehensive metric, parameter, and model lineage tracking with MLflow to ensure verifiable, production-ready releases.", icon: "database" },
            { title: "Containerized FastAPI Service", desc: "Packaged as a lightweight Docker container exposing high-throughput REST APIs for real-time inference and seamless CI/CD.", icon: "docker" }
          ]
        }
      },
      {
        period: "3 Months",
        team: {
          name: "FlightPredict Team",
          leader: true,
          members: [
            { name: "Maryam Ahmed", role: "Ai Engineer", github: "https://github.com/maryamahmedadel365-bit", linkedin: "https://www.linkedin.com/in/maryam-ahmed-298875327/" },
            { name: "Rawan Ahmed", role: "Full-Stack Engineer", github:"https://github.com/rawan2088", linkedin: "https://www.linkedin.com/in/rawan-ahmed-493896178/"}
          ],
        },
        highlights: [
          { type: "star", text: "Full end-to-end MLOps pipeline with CI/CD and docker Deployed in Full-Stack Website" },
        ],
        links: [
          { icon: "brain", label: "MLOps", url: "https://github.com/Aly-EL-Badry/Flight-Delay-Prediction-MLops" },
          { icon: "server", label: "Backend", url: "https://github.com/Aly-EL-Badry/FlightPrediction-Backend" },
          { icon: "desktop", label: "Frontend", url: "https://github.com/Aly-EL-Badry/Flight-delay-prediction-Front-End" },
        ],
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1771711584/1770334911378_mf9yre.jpg",
        alt: "Flight Delay Prediction",
        main: "Flight Delay Prediction",
        sub: "Predicts flight delays using historical flight data",
        tags: ["Python", "Machine Learning", "Deep Learning", "MLOps", "ZenML", "MLflow", "DVC", "Docker", "FastAPI", "Django", "React", "Tailwind CSS", "CI/CD", "Feature Engineering", "Data Visualization", "System Architecture", "RESTful API", "Scikit-learn", "Database"],
        images: [
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1771723766/1770334908825_lp5e7b.jpg",
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1771723766/1770334909585_erqell.jpg",
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1771711582/1770334910381_m8ot2u.jpg",
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1771711582/1770334910280_sszgak.jpg",
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1771711582/1770334910552_n0se5o.jpg",
        ],
        details: {
          overview: "An enterprise full-stack machine learning platform engineered to predict commercial flight delays with high accuracy. Powered by production-grade MLOps pipelines using ZenML, MLflow, and DVC, the system serves probabilistic delay forecasts through FastAPI and Django, surfaced via an intuitive React dashboard.",
          problem: `Commercial flight delays cost the global aviation industry over $30 billion annually while causing cascading travel disruptions for millions of passengers. Airline schedules are vulnerable to complex interdependent factors—including severe weather, air traffic control congestion, late-arriving aircraft, and carrier turnaround bottlenecks. Traditional dispatching and forecasting systems rely on static lookups or reactive rules, leaving passengers and flight coordinators unable to anticipate disruptions until after delays have already compounded.`,
          solution: `FlightPredict transforms reactive disruption management into proactive planning. The system processes extensive historical flight and meteorological datasets, engineering predictive features across routes, seasonal patterns, and turnaround metrics. Machine learning models generate real-time probability distributions for delay occurrence and duration. The solution is fully operationalized with automated ZenML pipelines, MLflow experiment tracking, and DVC versioning, containerized in Docker, and exposed through high-speed APIs to an interactive React & Tailwind web interface.`,
          features: [
            { title: "Predictive ML & Delay Estimation", desc: "Trained classification and regression models on extensive flight records to calculate delay probabilities and anticipated duration.", icon: "brain" },
            { title: "Automated MLOps & ZenML Pipeline", desc: "End-to-end data ingestion, preprocessing, validation, and reproducible training pipelines orchestrated with ZenML and DVC.", icon: "pipeline" },
            { title: "Model Registry & Tracking", desc: "Full experiment logging, hyperparameter optimization, and model artifact management powered by MLflow for auditability.", icon: "database" },
            { title: "Full-Stack Web Architecture", desc: "Interactive React and Tailwind user interface integrated with Django and FastAPI microservices, containerized for cloud deployment.", icon: "desktop" }
          ]
        }
      },
      {
        period: "2 Weeks",
        team: {
          name: "FCAI Team",
          leader: false,
          members: [
            { name: "Mahammed Gafour", role: "Ai Engineer", github: "https://github.com/MohammadG4", linkedin: "https://www.linkedin.com/in/mohammadgafour/" },
            { name: "Nour Maged", role: "Ai Engineer", github: "https://github.com/nourmaged0o0", linkedin: "https://www.linkedin.com/in/nourelmaghraby/" },
            { name: "Fatma Gad", role: "Ai Engineer", github: "https://github.com/fatmagad0o0", linkedin: "" },
          ],
        },
        highlights: [],
        links: [
          { icon: "github", label: "GitHub", url: "https://github.com/Aly-EL-Badry/Face_Morphing_App" },
        ],
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1790259539/result_d4e319e8d7e8499a9e13769a59d781a3_vhhblb.gif",
        alt: "Face Morphing",
        main: "Face Morphing",
        sub: "A web application that morphs from face to face",
        tags: ["Computer Vision", "Python", "OpenCV", "Flask", "Dlib", "Facial Landmark Detection", "Delaunay Triangulation", "Affine Transformations", "Image Processing", "NumPy", "Frontend", "Backend", "RESTful API"],
        images: [
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1790259539/result_d4e319e8d7e8499a9e13769a59d781a3_vhhblb.gif",
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1790259604/Screenshot_2026-09-24_171740_tf7e7n.png"
        ],
        details: {
          overview: "A computer vision web application that generates seamless, photorealistic morphing transitions between two faces using Dlib 68-point facial landmark detection and Delaunay triangulation warping.",
          problem: `Creating smooth facial transitions between different individuals without visual artifacts, ghosting, or misalignment is a major computer vision challenge. Basic image cross-fading produces unnatural blended overlays because facial features like eyes, noses, and jawlines do not align spatially across different subjects. Realistic morphing demands precise geometry-aware mesh alignment and piecewise transformation.`,
          solution: `The Face Morphing App solves this by detecting 68 facial landmark anchor points on both input faces using Dlib. The pipeline constructs a dynamic Delaunay triangulation mesh across the interpolated facial geometry for each transition step. Using OpenCV, piecewise affine transformations warp corresponding triangular patches between the source and target faces before blending, producing artifact-free morphing sequences rendered as looping animated transitions in a modern Flask web interface.`,
          features: [
            { title: "68-Point Facial Landmarks", desc: "Extracts precise facial contours, eyes, nose, and jaw anchors using Dlib's pretrained facial shape predictor.", icon: "brain" },
            { title: "Delaunay Triangulation", desc: "Constructs optimal triangular meshes over landmark points to guide distortion-free spatial coordinate warping.", icon: "code" },
            { title: "Piecewise Affine Warping", desc: "Calculates affine matrices for each triangle to warp and alpha-blend intermediate frames with OpenCV.", icon: "bolt" },
            { title: "Flask Web Interface", desc: "Interactive web dashboard enabling users to upload face pairs, customize transition frames, and view real-time animated GIF outputs.", icon: "desktop" }
          ]
        }
      },
      {
        period: "1 Week",
        team: {
          name: "Solo Project",
        },
        highlights: [],
        links: [
          { icon: "github", label: "GitHub", url: "https://github.com/Aly-EL-Badry/Pothole-Detection" }
        ],
        link: "https://github.com/Aly-EL-Badry/Pothole-Detection",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745155110/pothole_detection_1_nqaolw.webp",
        alt: "Pothole Detection",
        main: "Pothole Detection",
        sub: "An Object Detection Model For Potholes in the Streets",
        tags: ["YOLO", "Computer Vision", "Deep Learning", "Object Detection", "Python", "OpenCV", "PyTorch", "Video Processing", "Real-Time Inference", "Data Annotation", "Model Evaluation"],
        images: [
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745155110/pothole_detection_1_nqaolw.webp",
        ],
        details: {
          overview: "An automated road-safety computer vision system powered by YOLO deep learning architectures to detect and localize potholes in real time from dashcam or drone video feeds.",
          problem: `Potholes and road degradation cause billions of dollars in vehicle damage each year and present severe hazards to drivers and pedestrians. Municipalities struggle with road maintenance because traditional inspection relies on slow, costly, and manual street surveys that miss developing hazards. Without continuous automated detection, dangerous asphalt failures go unaddressed until costly accidents occur.`,
          solution: `The Pothole Detection model automates infrastructure surveillance by integrating YOLO (You Only Look Once) object detection with OpenCV frame processing pipelines. Trained on diverse asphalt surfaces under varying lighting, shadows, and weather conditions, the system detects, classifies, and tracks road hazards with high inference speeds. The output delivers actionable bounding boxes and severity metrics that can be geotagged to streamline municipal road repair workflows.`,
          features: [
            { title: "Real-Time YOLO Detection", desc: "High-throughput object detection architecture optimized for low-latency bounding box localization on video streams.", icon: "brain" },
            { title: "Diverse Surface Training", desc: "Robust generalization across various asphalt textures, wet roads, deep shadows, and changing daylight conditions.", icon: "database" },
            { title: "OpenCV Video Pipeline", desc: "Automated video frame ingestion, preprocessing, and bounding box rendering built for dashcams and mobile camera rigs.", icon: "bolt" },
            { title: "Smart City Infrastructure Ready", desc: "Designed for automated geotagging and defect cataloging to help public works departments prioritize urgent maintenance.", icon: "rocket" }
          ]
        }
      },
    ],
  },
  {
    title: "Web Development",
    items: [
      {
        period: "1 Month",
        team: {
          name: "Solo Project"
        },
        highlights: [
          { type: "freelance", text: "Freelance client project" },
          { type: "star", text: "Live production website" },
        ],
        links: [
          { icon: "globe", label: "Website", url: "https://alkamalcenter.com/" }
        ],
        link: "https://alkamalcenter.com/",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1750289036/Screenshot_2025-06-19_022311_qwoivs.png",
        alt: "Al-Kamal Center",
        main: "Al-Kamal Center",
        sub: "E-Commerce Website for Al-Kamal Center",
        tags: ["React", "Tailwind CSS", "JavaScript", "Database Integration", "E-Commerce", "Responsive Web Design", "State Management", "RESTful API", "UI/UX Design", "Component Architecture", "Full-Stack Development"],
        images: [
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1750289036/Screenshot_2025-06-19_022311_qwoivs.png",
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1790265946/Screenshot_2026-09-24_190448_ok6zpb.png",
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1790265947/Screenshot_2026-09-24_190416_iuqf19.png"
        ],
        details: {
          concept: "Al-Kamal Center is a real-world freelance project delivered for a commercial trading center in Egypt. The client needed a professional digital presence to showcase their product catalog online, replace manual phone-based ordering, and reach customers beyond their physical storefront. This was a paid engagement from requirements gathering through deployment on a custom domain.",
          description: `Built a responsive, production-ready e-commerce storefront using React and Tailwind CSS with full database integration. The site features organized product categories with image galleries, a streamlined browsing experience optimized for mobile and desktop, and a backend system for the client to manage products, pricing, and incoming orders. Deployed live at alkamalcenter.com and actively serving real customers.`
        }
      },
      {
        period: "1 Week",
        team: {
          name: "Green Loop Team",
          leader: true,
          members: [
            { name: "Maryam Ahmed", role: "Ai Engineer", github: "https://github.com/maryamahmedadel365-bit", linkedin: "https://www.linkedin.com/in/maryam-ahmed-298875327/" },
            { name: "Rawan Ahmed", role: "Full-Stack Engineer", github:"https://github.com/rawan2088", linkedin: "https://www.linkedin.com/in/rawan-ahmed-493896178/"}
          ],
        },
        highlights: [
          { type: "star", text: "Carbon footprint calculator with real science data" },
          { type: "star", text: "Participated in Climate Smart Youth Event" },
        ],
        links: [
          { icon: "github", label: "GitHub", url: "https://github.com/Aly-EL-Badry/Green-Loop" },
          { icon: "globe", label: "Website", url: "https://green-loop-three.vercel.app/" }
        ],
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1790266798/Screenshot_2026-09-24_191853_stqbiq.png",
        alt: "Green Loop",
        main: "Green Loop",
        sub: "Calculate your daily contribution in carbon footprint in less than seconds",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Data Visualization", "Environmental Science", "Algorithms & Calculations", "Responsive Web Design", "Front-End", "UI/UX Design", "Vercel"],
        images: [
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1790266798/Screenshot_2026-09-24_191909_ddudis.png",
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1790266798/Screenshot_2026-09-24_191921_xv19ww.png",
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1790266798/Screenshot_2026-09-24_191941_oxzdtn.png"
        ],
        details: {
          concept: "Green Loop was born from a simple question: what if people could see their personal environmental impact in under 10 seconds? Most carbon calculators are bloated with dozens of form fields and confusing jargon. This project distills peer-reviewed emissions data into a fast, visual, guilt-free experience that actually makes people curious about their footprint.",
          features: [
            { title: "Instant Carbon Calculator", desc: "Calculates daily carbon footprint from transport, diet, and energy inputs using peer-reviewed emission factor datasets — results in under 10 seconds.", icon: "bolt" },
            { title: "Science-Backed Data Engine", desc: "Emission coefficients sourced from published environmental studies, ensuring accuracy beyond typical online calculators.", icon: "brain" },
            { title: "Visual Impact Dashboard", desc: "Translates raw CO₂ numbers into relatable equivalents — trees needed, driving miles, flights — for instant comprehension.", icon: "desktop" },
            { title: "Next.js & TypeScript Stack", desc: "Server-rendered pages with type-safe data flows for fast load times, SEO discoverability, and maintainable codebase.", icon: "code" }
          ]
        }
      },
      {
        period: "1 Month",
        team: {
          name: "FCAI Team",
          leader: true,
          members: [
            { name: "Yousef El-Ebiary", role: "Full-Stack Engineer", github: "", linkedin: "" },
            { name: "Malak Mohammed", role: "Full-Stack Engineer", github: "", linkedin: "" },
            { name: "Rana Tarek", role: "Full-Stack Engineer", github: "", linkedin: "" },
            { name: "Fatema El-fiky", role: "Full-Stack Engineer", github: "", linkedin: "" }
          ]
        },
        highlights: [
          { type: "star", text: "Full-stack with AI-powered recipe chatbot" },
        ],
        links: [
          { icon: "github", label: "GitHub", url: "https://github.com/Aly-EL-Badry/RecipeHub" }
        ],
        link: "https://github.com/Aly-EL-Badry/RecipeHub",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1748179221/screenshot_euiznx.png",
        alt: "RecipeHub",
        main: "RecipeHub",
        sub: "A Full-Stack Website Supplied With AI Chat Bot",
        tags: ["Django", "Python", "MySQL", "AI Chatbot", "Cloudinary", "JavaScript", "Bootstrap", "HTML5", "CSS3", "Database Design", "User Authentication", "RESTful API", "Full-Stack Development"],
        images: [
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1748179221/screenshot_euiznx.png",
        ],
        details: {
          problem: `Finding the right recipe online means scrolling through endless blogs, ads, and SEO filler. Users can't easily ask follow-up questions like "can I substitute butter for oil?" or "make this dairy-free" — they're stuck reading static pages. There's no conversational way to explore, tweak, or personalize recipes on the fly.`,
          solution: `RecipeHub pairs a full-stack recipe database with an AI-powered chatbot that lets users search, discover, and modify recipes through natural conversation. Built with Django and MySQL for robust data management, Cloudinary for optimized recipe imagery, and an integrated AI assistant that understands ingredient swaps, dietary restrictions, and cooking technique questions in real time.`
        }
      },
      {
        period: "1 Week",
        team: {
          name: "Solo Project"
        },
        highlights: [],
        links: [
          { icon: "github", label: "GitHub", url: "https://github.com/Aly-EL-Badry/Fashion-Corner" }
        ],
        link: "https://github.com/Aly-EL-Badry/Fashion-Corner",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745155111/fasion_twfrhh.webp",
        alt: "Fashion Corner",
        main: "Fashion Corner",
        sub: "E-commerce Clothes Shop",
        tags: ["React", "JavaScript", "Bootstrap", "CSS3", "Responsive Web Design", "E-Commerce UI", "State Management", "SPA Architecture", "UI/UX Design", "Front-End Development"],
        images: [
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745155111/fasion_twfrhh.webp",
        ],
        details: {
          description: `A sleek, component-driven fashion e-commerce interface built with React and Bootstrap. Features a categorized product gallery with filter-by-type and price sorting, an interactive shopping cart with live item count and total calculation, detailed product pages with size selectors and image zoom, and a fully responsive layout that adapts from mobile to widescreen. Designed as a front-end showcase for modern React SPA patterns and reusable UI components.`
        }
      },
      {
        period: "1 Week",
        team: {
          name: "Solo Project"
        },
        highlights: [],
        links: [
          { icon: "github", label: "GitHub", url: "https://github.com/Aly-EL-Badry/My-House/" }
        ],
        link: "https://github.com/Aly-EL-Badry/My-House/",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745155109/house_e6vgxj.webp",
        alt: "My House",
        main: "My House",
        sub: "E-Commerce Website for Furniture",
        tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "DOM Manipulation", "LocalStorage", "Responsive Web Design", "E-Commerce UI", "Web Fundamentals", "Front-End Development"],
        images: [
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745155109/house_e6vgxj.webp",
        ],
        details: {
          description: `A multi-page furniture e-commerce storefront hand-coded with vanilla HTML, CSS, JavaScript, and Bootstrap — no frameworks. Features room-by-room product navigation (living room, bedroom, office), an animated hero carousel, product quick-view modals, add-to-cart interactions with localStorage persistence, and a pixel-perfect responsive grid that works across all breakpoints. Built as an early deep dive into raw front-end fundamentals before moving to component frameworks.`
        }
      },
      {
        period: "1 Week",
        team: {
          name: "Solo Project"
        },
        highlights: [],
        links: [
          { icon: "github", label: "GitHub", url: "https://github.com/Aly-EL-Badry/E-Learn-Website" }
        ],
        link: "https://github.com/Aly-EL-Badry/E-Learn-Website",
        img: "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745155108/e-learn_zxtz5m.webp",
        alt: "e-learn",
        main: "E-Learn Template",
        sub: "E-Learning Website",
        tags: ["HTML5", "CSS3", "CSS Grid", "Flexbox", "Responsive Web Design", "CSS Animations", "Semantic HTML", "Web Design", "UI/UX Layouts"],
        images: [
          "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745155108/e-learn_zxtz5m.webp",
        ],
        details: {
          description: `A pure HTML & CSS e-learning landing page template — zero JavaScript, zero dependencies. Features a course catalog grid with hover-reveal descriptions, an instructor spotlight section, a testimonial carousel built entirely with CSS animations, a sticky navigation bar, and a mobile-first responsive layout. Created as a foundational exercise in semantic HTML structure, CSS Grid/Flexbox mastery, and clean visual hierarchy without relying on any framework or library.`
        }
      }
    ]
  },
];
