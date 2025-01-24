import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { memo } from "react";

export const projects = [
  {
    id: 1,
    title: "Address Record Book",
    description: "A web application designed to help users manage and store contact information efficiently with features for adding, editing, deleting, and searching contacts.",
    image: "/images/Project one/img3.png",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/prajwal-git-png/Address-Record-book",
    liveUrl: "https://prajwal-git-png.github.io/Address-Record-book/",
    features: [
      "Add new contacts with name, address, phone number, and email",
      "Edit existing contact information",
      "Delete contacts",
      "Search for contacts by name or other details",
      "User-friendly interface"
    ],
    longDescription: "The Address Record Book is a comprehensive contact management solution that allows users to efficiently organize their contacts. Built with vanilla JavaScript and modern web technologies, it provides a seamless experience for managing personal and professional connections.",
    techStack: {
      frontend: ["HTML5", "CSS3", "JavaScript"],
      tools: ["LocalStorage", "DOM Manipulation"]
    },
    screenshots: [
      {
        url: "/images/Project one/img3.png",
        caption: "Main Dashboard View"
      },
      {
        url: "/images/Project one/img1.png",
        caption: "Contact Management Interface"
      },
      {
        url: "/images/Project one/img2.png",
        caption: "Search and Filter Functionality"
      }
    ],
    installation: [
      "Clone the repository: git clone https://github.com/prajwal-git-png/Address-Record-book.git",
      "No npm installation needed - pure HTML/CSS/JS",
      "Open index.html in your browser to start using the app"
    ],
    usage: [
      "Click 'Add Contact' button and fill in contact details",
      "Use 'Edit' button next to contacts to update information",
      "Click 'Delete' button and confirm to remove contacts",
      "Use the search bar to find contacts by name or details"
    ],
    challenges: [
      "Implementing data persistence using LocalStorage",
      "Managing DOM updates efficiently",
      "Creating responsive design without frameworks",
      "Building search functionality in vanilla JavaScript"
    ],
    learnings: [
      "DOM manipulation best practices",
      "LocalStorage data management",
      "Vanilla JavaScript state management",
      "CSS layout and responsive design techniques"
    ],
    codeExamples: [
      {
        title: "Contact Form Handler",
        language: "javascript",
        code: `
function handleContactSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const contact = {
    id: Date.now(),
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    address: formData.get('address')
  };
  saveContact(contact);
  updateContactsList();
}`
      },
      {
        title: "Search Implementation",
        language: "javascript",
        code: `
function searchContacts(query) {
  const contacts = getAllContacts();
  return contacts.filter(contact => 
    contact.name.toLowerCase().includes(query.toLowerCase()) ||
    contact.email.toLowerCase().includes(query.toLowerCase())
  );
}`
      }
    ]
  },
  {
    id: 2,
    title: "AI Chatbot College Project",
    description: "A sophisticated AI chatbot built using Flask and Google's Gemini Pro API, featuring a ChatGPT-like interface with email-based authentication and real-time chat capabilities.",
    image: "/images/Project two/img4.png",
    tags: ["Python", "Flask", "Google Gemini Pro", "SQLAlchemy", "HTML/CSS/JS"],
    githubUrl: "https://github.com/prajwal-git-png/Ai-Bot-college-project",
    features: [
      "AI-powered responses using Google's Gemini Pro API",
      "Secure email-based authentication",
      "Interactive real-time chat interface",
      "Light/Dark theme support",
      "Chat management with save, rename, archive options",
      "Data import/export functionality",
      "Code syntax highlighting and Markdown support"
    ],
    longDescription: "A sophisticated AI chatbot that leverages Google's Gemini Pro API to provide intelligent responses. Built with Flask and featuring a modern ChatGPT-like interface, the project includes secure authentication, real-time chat capabilities, and comprehensive chat management features.",
    techStack: {
      frontend: ["HTML5", "CSS3", "JavaScript", "Prism.js"],
      backend: ["Python", "Flask", "Flask-Login"],
      database: ["SQLAlchemy"],
      ai: ["Google Gemini Pro API"]
    },
    screenshots: [
      {
        url: "/images/Project two/img4.png",
        caption: "Main Chat Interface"
      },
      {
        url: "/images/Project two/img1.png",
        caption: "Authentication Screen"
      },
      {
        url: "/images/Project two/img2.png",
        caption: "Chat Management Features"
      },
      {
        url: "/images/Project two/img3.png",
        caption: "Theme Toggle and Settings"
      }
    ],
    installation: [
      "Clone repository: git clone https://github.com/prajwal-git-png/Ai-Bot-college-project.git",
      "Create and activate virtual environment",
      "Install dependencies: pip install -r requirements.txt",
      "Set up environment variables for API keys",
      "Run Flask server: python app.py"
    ],
    usage: [
      "Register/Login with email",
      "Start new chat or continue existing conversation",
      "Type messages and receive AI responses",
      "Use theme toggle for light/dark mode",
      "Manage chats through sidebar options"
    ],
    challenges: [
      "Integrating Google's Gemini Pro API effectively",
      "Implementing secure authentication system",
      "Creating responsive real-time chat interface",
      "Managing chat history and user sessions",
      "Implementing data import/export functionality"
    ],
    learnings: [
      "Flask application architecture and best practices",
      "API integration and error handling",
      "User authentication and session management",
      "Real-time data handling in web applications",
      "Frontend-backend communication patterns"
    ],
    codeExamples: [
      {
        title: "Flask Route Handler",
        language: "python",
        code: `
@app.route('/chat', methods=['POST'])
@login_required
def chat():
    data = request.json
    user_message = data.get('message')
    
    try:
        response = gemini.generate_content(user_message)
        return jsonify({
            'response': response.text,
            'status': 'success'
        })
    except Exception as e:
        return jsonify({
            'error': str(e),
            'status': 'error'
        }), 500`
      },
      {
        title: "Chat Interface JavaScript",
        language: "javascript",
        code: `
async function sendMessage(message) {
  try {
    const response = await fetch('/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    });
    const data = await response.json();
    if (data.status === 'success') {
      displayMessage(data.response, 'bot');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}`
      }
    ]
  },
  {
    id: 3,
    title: "Bank Management System",
    description: "A comprehensive Java-based banking application that manages various banking operations including account creation, transactions, and account management.",
    image: "/images/Project three/img3.png",
    tags: ["Java", "MySQL", "JDBC", "Swing"],
    githubUrl: "https://github.com/prajwal-git-png/Resume-analyst",
    features: [
      "Account Creation with multi-step process",
      "Secure Deposits and Withdrawals",
      "Fast Cash feature for quick withdrawals",
      "Balance Inquiry functionality",
      "PIN Change capability",
      "Mini Statement for transaction history"
    ],
    longDescription: "The Bank Management System is a robust Java application designed to handle various banking operations. Built with Java Swing for the user interface and MySQL for data persistence, it provides a complete solution for managing bank accounts, transactions, and user data. The system features a multi-step account creation process, secure transaction handling, and comprehensive account management capabilities.",
    techStack: {
      frontend: ["Java Swing", "AWT"],
      backend: ["Java", "JDBC"],
      database: ["MySQL"],
      tools: ["NetBeans/Eclipse IDE"]
    },
    screenshots: [
      {
        url: "/images/Project three/img3.png",
        caption: "Main Dashboard Interface"
      },
      {
        url: "/images/Project three/img1.png",
        caption: "Account Creation Form"
      },
      {
        url: "/images/Project three/img2.png",
        caption: "Transaction Interface"
      }
    ],
    installation: [
      "Clone the repository",
      "Install MySQL and create database 'bankmanagementsystem'",
      "Configure database connection in Conn.java",
      "Compile and run Login.java to start the application"
    ],
    usage: [
      "Create new account through multi-step signup process",
      "Login with account credentials",
      "Perform transactions (deposit/withdrawal)",
      "Check balance and mini statements",
      "Change PIN when needed"
    ],
    challenges: [
      "Implementing secure database connections",
      "Managing complex user interface with Swing",
      "Handling concurrent transactions safely",
      "Creating intuitive multi-step forms",
      "Ensuring data consistency across operations"
    ],
    learnings: [
      "Java Swing UI development best practices",
      "Database design and JDBC implementation",
      "Transaction management in banking systems",
      "Multi-step form handling",
      "Security considerations in banking applications"
    ],
    codeExamples: [
      {
        title: "Database Connection",
        language: "java",
        code: `
public class Conn {
    Connection c;
    Statement s;
    public Conn() {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            c = DriverManager.getConnection("jdbc:mysql:///bankmanagementsystem", "root", "your_password");
            s = c.createStatement();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}`
      },
      {
        title: "Transaction Handler",
        language: "java",
        code: `
public void deposit(String accountNo, double amount) {
    try {
        String query = "UPDATE account SET balance = balance + ? WHERE account_no = ?";
        PreparedStatement pst = c.prepareStatement(query);
        pst.setDouble(1, amount);
        pst.setString(2, accountNo);
        pst.executeUpdate();
        
        // Log transaction
        String logQuery = "INSERT INTO transactions (account_no, type, amount) VALUES (?, 'DEPOSIT', ?)";
        pst = c.prepareStatement(logQuery);
        pst.setString(1, accountNo);
        pst.setDouble(2, amount);
        pst.executeUpdate();
    } catch (SQLException e) {
        e.printStackTrace();
    }
}`
      }
    ]
  },
  {
    id: 4,
    title: "Resume Analyst",
    description: "A modern web application that analyzes resumes against job requirements using Google's Gemini AI, providing detailed skill matching and scoring.",
    image: "/images/Project four/img1.png",
    tags: ["Python", "Flask", "Google Gemini AI", "SQLite", "HTML/CSS/JS"],
    githubUrl: "https://github.com/prajwal-git-png/Resume-analyst",
    liveUrl: "https://resume-analyst.vercel.app/",
    features: [
      "Match resumes against job requirements",
      "AI-powered analysis using Google's Gemini",
      "Detailed skill matching and scoring",
      "Experience and education evaluation",
      "Modern, responsive UI with glass morphism design",
      "Drag and drop file upload",
      "Real-time API key validation"
    ],
    longDescription: "A sophisticated resume analysis tool that leverages Google's Gemini AI to evaluate resumes against job requirements. The application provides detailed skill matching, experience evaluation, and comprehensive scoring, all wrapped in a modern, user-friendly interface with glass morphism design.",
    techStack: {
      frontend: ["HTML5", "CSS3", "JavaScript"],
      backend: ["Python", "Flask"],
      database: ["SQLite"],
      ai: ["Google Gemini AI"],
      deployment: ["Vercel"]
    },
    screenshots: [
      {
        url: "/images/Project four/img1.png",
        caption: "Main Dashboard with Resume Upload"
      },
      {
        url: "/images/Project four/img2.png",
        caption: "Analysis Results Interface"
      },
      {
        url: "/images/Project four/img3.png",
        caption: "Detailed Skill Matching View"
      }
    ],
    installation: [
      "Clone repository: git clone https://github.com/prajwal-git-png/Resume-analyst.git",
      "Install dependencies: pip install -r requirements.txt",
      "Set up Google API key in settings",
      "Run application: python app.py"
    ],
    usage: [
      "Click Settings and add Google API key",
      "Upload resumes (PDF, DOC, DOCX, or TXT)",
      "Enter job requirements",
      "Click 'Analyze Resumes'",
      "View detailed analysis results"
    ],
    challenges: [
      "Integrating Google's Gemini AI for accurate resume analysis",
      "Implementing efficient document parsing for multiple formats",
      "Creating an intuitive UI for complex analysis results",
      "Managing secure API key handling",
      "Optimizing analysis performance for multiple resumes"
    ],
    learnings: [
      "AI integration for document analysis",
      "Multi-format document processing",
      "Glass morphism UI design principles",
      "Secure API key management",
      "Deployment optimization on Vercel"
    ],
    codeExamples: [
      {
        title: "Resume Analysis Handler",
        language: "python",
        code: `
from flask import jsonify
import google.generativeai as genai

@app.route('/analyze', methods=['POST'])
def analyze_resume():
    try:
        resume_text = extract_text_from_resume(request.files['resume'])
        job_requirements = request.form['requirements']
        
        # Configure Gemini AI
        genai.configure(api_key=current_app.config['GEMINI_API_KEY'])
        model = genai.GenerativeModel('gemini-pro')
        
        # Analyze resume
        analysis = model.generate_content([resume_text, job_requirements])
        
        return jsonify({
            'status': 'success',
            'analysis': analysis.text,
            'match_score': calculate_match_score(analysis.text)
        })
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500`
      },
      {
        title: "File Upload Handler",
        language: "javascript",
        code: `
const dropZone = document.querySelector('.drop-zone');

dropZone.addEventListener('drop', async (e) => {
  e.preventDefault();
  const files = Array.from(e.dataTransfer.files);
  
  const formData = new FormData();
  files.forEach(file => {
    if (isValidFileType(file)) {
      formData.append('resume', file);
    }
  });
  
  try {
    const response = await fetch('/analyze', {
      method: 'POST',
      body: formData
    });
    const result = await response.json();
    displayAnalysisResults(result);
  } catch (error) {
    showError('Failed to analyze resume');
  }
});

function isValidFileType(file) {
  const validTypes = ['application/pdf', 'application/msword', 'text/plain'];
  return validTypes.includes(file.type);
}`
      }
    ]
  },
  {
    id: 5,
    title: "Modern Todo List Application",
    description: "A clean, modern, and user-friendly Todo List application built with vanilla JavaScript, featuring a beautiful UI with smooth animations and local storage persistence.",
    image: "/images/Project five/img1.png",
    tags: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
    features: [
      "Modern and responsive design",
      "Persistent storage using localStorage",
      "Mark tasks as complete/incomplete",
      "Delete individual tasks",
      "Clear all completed tasks",
      "Task counter",
      "Keyboard support (Enter to add tasks)",
      "Smooth animations and transitions"
    ],
    longDescription: "A sophisticated Todo List application that combines modern design principles with efficient functionality. Built using vanilla JavaScript, the application provides a seamless user experience with smooth animations and persistent data storage, all while maintaining a clean and intuitive interface.",
    techStack: {
      frontend: ["HTML5", "CSS3", "JavaScript"],
      styling: ["Font Awesome Icons"],
      storage: ["LocalStorage API"]
    },
    screenshots: [
      {
        url: "/images/Project five/img1.png",
        caption: "Main Application Interface"
      }
    ],
    installation: [
      "Clone or download the repository",
      "No installation required - pure HTML/CSS/JS",
      "Open index.html in your web browser",
      "Start managing your tasks!"
    ],
    usage: [
      "Type your task in the input field and press Enter or click + button",
      "Click checkbox to complete/uncomplete a task",
      "Click trash icon to delete a task",
      "Use 'Clear Completed' button to remove all completed tasks"
    ],
    challenges: [
      "Implementing smooth animations for better UX",
      "Managing state with localStorage",
      "Creating responsive design for all devices",
      "Handling keyboard events and accessibility",
      "Ensuring data persistence across sessions"
    ],
    learnings: [
      "Advanced CSS animations and transitions",
      "LocalStorage data management",
      "Event handling in vanilla JavaScript",
      "Modern UI/UX design principles",
      "Cross-browser compatibility considerations"
    ],
    codeExamples: [
      {
        title: "Task Management",
        language: "javascript",
        code: `
class TodoList {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    this.setupEventListeners();
    this.render();
  }

  addTask(text) {
    const task = {
      id: Date.now(),
      text,
      completed: false
    };
    this.tasks.push(task);
    this.saveToStorage();
    this.render();
  }

  toggleTask(id) {
    this.tasks = this.tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.saveToStorage();
    this.render();
  }

  saveToStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}`
      },
      {
        title: "UI Animation",
        language: "css",
        code: `
.task-item {
  opacity: 0;
  transform: translateY(20px);
  animation: slideIn 0.3s ease forwards;
}

.task-item.completed {
  animation: completeTask 0.3s ease forwards;
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes completeTask {
  to {
    background-color: var(--completed-bg);
    text-decoration: line-through;
  }
}`
      }
    ]
  },
  {
    id: 6,
    title: "Coming Soon",
    description: "A new  project is in development.",
    image: "/images/Project five/img1.png",
    tags: [],
    features: [
      "Project under development",
      "Innovative technologies",
      "Modern architecture",
      "Cutting-edge features"
    ],
    longDescription: "An  new project that comming soon.",
    techStack: {
      frontend: ["Next.js", "TailwindCSS"],
      backend: ["Node.js", "GraphQL"],
      cloud: ["AWS", "Docker"],
      ai: ["TensorFlow", "PyTorch"]
    },
    screenshots: [
      {
        url: "/images/Project five/img1.png",
        caption: "Project Preview"
      }
    ],
    installation: [
      "Project is currently under development",
      "Stay tuned for updates",
      "Coming soon..."
    ],
    usage: [
      "Project features will be announced soon",
      "Follow for updates",
      "Join the waiting list"
    ],
    challenges: [
      "Pushing the boundaries of modern web development",
      "Integrating cutting-edge AI capabilities",
      "Building scalable cloud infrastructure",
      "Creating intuitive user experiences"
    ],
    learnings: [
      "Latest web development trends",
      "Advanced AI/ML implementations",
      "Cloud architecture best practices",
      "Modern UI/UX principles"
    ],
    codeExamples: [
      {
        title: "Project Structure",
        language: "typescript",
        code: `
// Coming Soon
// Project structure will be revealed
// Stay tuned for updates...

interface FutureProject {
  innovation: boolean;
  excitement: number;
  comingSoon: Date;
}`
      }
    ]
  }
];

const Projects = () => {
  return (
    <section 
      id="projects" 
      className="relative py-20 pt-28 min-h-screen scroll-mt-20"
    >
      {/* Gradient background container */}
      <div className="gradient-bg absolute inset-0 z-0 will-change-transform">
        <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
              <feColorMatrix 
                in="blur" 
                mode="matrix" 
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -6" 
                result="goo" 
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container opacity-50">
          <div className="g1 translate-z-0"></div>
          <div className="g2 translate-z-0"></div>
          <div className="g3 translate-z-0"></div>
          <div className="g4 translate-z-0"></div>
          <div className="g5 translate-z-0"></div>
          <div className="interactive translate-z-0"></div>
        </div>
      </div>

      {/* Content container */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = memo(({
  project,
  index,
}: {
  project: typeof projects[0];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.3) }}
    viewport={{ once: true, margin: "-50px" }}
    className={`group relative overflow-hidden cursor-pointer border border-white/20 rounded-2xl will-change-transform
      ${project.id === 6 
        ? 'bg-gradient-to-br from-primary/20 via-primary/10 to-background backdrop-blur-xl' 
        : 'bg-white/10 backdrop-blur-lg'}`}
  >
    <Link to={project.id === 6 ? '#' : `/project/${project.id}`} className="block">
      {project.id === 6 ? (
        <div className="aspect-video relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-background">
            <div className="absolute inset-0 bg-grid-white/10 bg-grid-16" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-background animate-pulse" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 backdrop-blur-sm">
            <div className="text-center transform transition-all duration-500 group-hover:scale-105">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 animate-ping bg-primary/20 rounded-full" />
                <div className="relative z-10 w-16 h-16 rounded-full border-2 border-primary/50 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 animate-pulse" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-3 relative">
                Coming Soon
                <span className="absolute -top-1 -right-2 text-xs bg-primary/20 px-2 py-1 rounded-full animate-bounce">
                  New
                </span>
              </h3>
              <p className="text-white/70 max-w-[250px] mx-auto leading-relaxed">
                Something exciting is brewing !
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="aspect-video relative bg-white/5">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-foreground/70 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.id !== 6 && (
          <span className="inline-flex items-center gap-2 text-primary group-hover:underline">
            View Details
            <ArrowUpRight size={16} />
          </span>
        )}
      </div>
    </Link>
  </motion.div>
));

ProjectCard.displayName = "ProjectCard";

export default Projects;