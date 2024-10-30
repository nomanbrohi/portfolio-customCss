import Project from "@/app/components/projects";
import Image from "next/image";
// import './styles.css'; // Ensure you import your custom CSS file

export default function About() {
  return (
    // About Section
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-header">
            <h1 className="about-title">About</h1>
            <p className="about-description">
              I am deeply passionate about web development and have a strong knowledge of various programming languages. I love exploring new features and technologies, and I pride myself on being a fast learner. My enthusiasm for the IT sector drives me to continuously enhance my skills and stay updated with industry trends, enabling me to tackle challenges effectively and contribute meaningfully to any project.
            </p>
          </div>

          <div className="skills-section">
            <h1 className="skills-title">Skills</h1>

            <div className="skills-container">
              <div className="skill-card">
                <Image
                  src="/images/html.png"
                  width={80}
                  height={80}
                  alt="HTML"
                />
                <h1 className="skill-name">HTML</h1>
              </div>
              <div className="skill-card">
                <Image src="/images/css.png" width={80} height={80} alt="CSS" />
                <h1 className="skill-name">CSS</h1>
              </div>
              <div className="skill-card">
                <Image
                  src="/images/javascript.png"
                  width={80}
                  height={80}
                  alt="JavaScript"
                />
                <h1 className="skill-name">JavaScript</h1>
              </div>
            </div>

            <div className="skills-container">
              <div className="skill-card">
                <Image
                  src="/images/python.png"
                  width={80}
                  height={80}
                  alt="Python"
                />
                <h1 className="skill-name">Python</h1>
              </div>
              <div className="skill-card">
                <Image
                  src="/images/type.png"
                  width={80}
                  height={80}
                  alt="TypeScript"
                />
                <h1 className="skill-name">TypeScript</h1>
              </div>
              <div className="skill-card">
                <Image
                  src="/images/nextjs.png"
                  width={80}
                  height={80}
                  alt="Next.js"
                />
                <h1 className="skill-name">Next.Js</h1>
              </div>
            </div>
          </div>
        </div>

        <section>
          <Project />
        </section>

        <section>
          <div className="contact-section">
            <div className="contact-header">
              <h1 className="contact-title">Contact</h1>
            </div>
            <div className="contact-content">
              <div className="contact-info">
                <h1 className="contact-subtitle">Reach out to me</h1>
                <div>
                <h3 className="contact-phone">+92 346 285003</h3>
                <h3 className="contact-email">nomanbrohi9@gmail.com</h3>
                </div>
                <p className="contact-address">
                  10st Abd EL Aziz Al Soud, 05th Floor, Manial,
                  Roda, Cairo, Egypt.
                </p>
              </div>
              <div className="contact-form-container">
                <form className="contact-form">
                  {/* First Line: Name and Email */}
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  {/* Second Line: Message */}
                  <div className="form-field">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="form-input"
                      required
                    />
                  </div>

                  {/* Third Line: Attach File */}
                  <div className="file-upload">
                    <label htmlFor="file" className="file-upload-label">
                      Attach File
                    </label>
                    <input type="file" id="file" name="file" className="file-upload-input" />
                  </div>

                  {/* Fourth Line: Submit Button */}
                  <div>
                    <button type="submit" className="submit-button">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
