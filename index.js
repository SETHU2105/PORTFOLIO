import React from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';

const Navigation = () => (
    <nav className="nav">
        <div className="container nav-content">
            <h1 className="glow-text">Portfolio</h1>
            <div className="nav-links">
                <a href="#home" className="nav-link">Home</a>
                <a href="#about" className="nav-link">About</a>
                <a href="#skills" className="nav-link">Skills</a>
                <a href="#hobbies" className="nav-link">Hobbies</a>
                <a href="#projects" className="nav-link">Projects</a>
                <a href="#contact" className="nav-link">Contact</a>
            </div>
        </div>
    </nav>
);

const Hero = () => (
    <section id="home" className="hero">
        <div className="container hero-content">
            <h1 className="hero-title glow-text">Hi, I'm John Doe</h1>
            <p className="hero-subtitle">Computer Science Student & Web Developer</p>
            <button className="hover-glow">View My Projects</button>
        </div>
    </section>
);

const About = () => (
    <section id="about" className="about reveal">
        <div className="container">
            <h2 className="section-title glow-text">About Me</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>Hello! I'm a passionate Computer Science student with a strong focus on web development and software engineering. Currently pursuing my degree at XYZ University, I specialize in creating modern web applications and user interfaces.</p>
                    <p>With a deep interest in technology and programming, I spend my time learning new technologies and working on exciting projects. I believe in writing clean, efficient code and creating user-friendly applications that make a difference.</p>
                    <p>I'm constantly exploring new technologies and frameworks to stay up-to-date with the latest trends in web development. My goal is to become a full-stack developer and contribute to innovative projects that push the boundaries of what's possible on the web.</p>
                </div>
            </div>
        </div>
    </section>
);

const ProjectCard = ({ title, description, technologies }) => (
    <div className="project-card hover-glow">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="technologies">
            {technologies.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
            ))}
        </div>
    </div>
);

const Skills = () => (
    <section id="skills" className="skills reveal">
        <div className="container">
            <h2 className="section-title glow-text">Skills & Expertise</h2>
            <div className="skills-grid">
                <SkillItem skill="HTML5/CSS3" level={90} />
                <SkillItem skill="JavaScript" level={85} />
                <SkillItem skill="React.js" level={80} />
                <SkillItem skill="Python" level={75} />
                <SkillItem skill="Java" level={70} />
                <SkillItem skill="SQL" level={65} />
                <SkillItem skill="Git" level={80} />
                <SkillItem skill="UI/UX Design" level={75} />
            </div>
        </div>
    </section>
);

const Hobbies = () => (
    <section id="hobbies" className="hobbies reveal">
        <div className="container">
            <h2 className="section-title glow-text">Hobbies & Interests</h2>
            <div className="hobbies-grid">
                <div className="hobby-item hover-glow">
                    <h3>💻 Coding</h3>
                    <p>Building personal projects and learning new technologies</p>
                </div>
                <div className="hobby-item hover-glow">
                    <h3>📚 Reading</h3>
                    <p>Technical books and science fiction novels</p>
                </div>
                <div className="hobby-item hover-glow">
                    <h3>🎮 Gaming</h3>
                    <p>Strategy games and coding challenges</p>
                </div>
                <div className="hobby-item hover-glow">
                    <h3>🎵 Music</h3>
                    <p>Playing guitar and creating digital music</p>
                </div>
                <div className="hobby-item hover-glow">
                    <h3>✈️ Traveling</h3>
                    <p>Exploring new places and cultures</p>
                </div>
                <div className="hobby-item hover-glow">
                    <h3>🏃‍♂️ Fitness</h3>
                    <p>Regular exercise and staying active</p>
                </div>
            </div>
        </div>
    </section>
);

const Projects = () => (
    <section id="projects" className="projects reveal">
        <div className="container">
            <h2 className="section-title glow-text">Featured Projects</h2>
            <div className="projects-grid">
                <ProjectCard
                    title="Student Management System"
                    description="A comprehensive system for managing student records, attendance, and grades using React and Node.js."
                    technologies={['React', 'Node.js', 'MongoDB', 'Express']}
                />
                <ProjectCard
                    title="Weather Dashboard"
                    description="Real-time weather application with location tracking and forecast visualization."
                    technologies={['JavaScript', 'Weather API', 'Chart.js']}
                />
                <ProjectCard
                    title="Task Manager"
                    description="A full-stack task management application with user authentication and real-time updates."
                    technologies={['React', 'Firebase', 'Material-UI']}
                />
            </div>
        </div>
    </section>
);

const SkillItem = ({ skill, level }) => (
    <div className="skill-item hover-glow">
        <h4>{skill}</h4>
        <div className="skill-level" style={{ '--level': `${level}%` }}></div>
    </div>
);

const Contact = () => (
    <section id="contact" className="contact reveal">
        <div className="container">
            <h2 className="section-title glow-text">Get In Touch</h2>
            <div className="contact-content">
                <div className="contact-info">
                    <div className="contact-item hover-glow">
                        <h3>📧 Email</h3>
                        <p>john.doe@email.com</p>
                    </div>
                    <div className="contact-item hover-glow">
                        <h3>📱 Phone</h3>
                        <p>+1 (234) 567-8900</p>
                    </div>
                    <div className="contact-item hover-glow">
                        <h3>📍 Location</h3>
                        <p>New York, United States</p>
                    </div>
                    <div className="contact-item hover-glow">
                        <h3>💼 LinkedIn</h3>
                        <p>linkedin.com/in/johndoe</p>
                    </div>
                    <div className="contact-item hover-glow">
                        <h3>💻 GitHub</h3>
                        <p>github.com/johndoe</p>
                    </div>
                </div>
                <form className="contact-form hover-glow">
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Message" required></textarea>
                    <button type="submit" className="hover-glow">Send Message</button>
                </form>
            </div>
        </div>
    </section>
);

const App = () => (
    <>
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Hobbies />
        <Projects />
        <Contact />
    </>
);

ReactDOM.render(<App />, document.getElementById('root')); 