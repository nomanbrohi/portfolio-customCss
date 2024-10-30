import Image from "next/image";


export default function About() {
  return (
    <section className="aboutSection">
      <div className="container-width container">
        <div className="flexColumn">
          <div className="aboutHeader">
            <h1 className="aboutTitle">About</h1>
            <p className="aboutText">
              I am deeply passionate about web development and have a strong knowledge of various programming languages. I love exploring new features and technologies, and I pride myself on being a fast learner. My enthusiasm for the IT sector drives me to continuously enhance my skills and stay updated with industry trends, enabling me to tackle challenges effectively and contribute meaningfully to any project.
            </p>
          </div>
          <div className="experienceContainer">
            <div className="experienceItem">
              <ul className="listDisc">
                <li>
                  <h1 className="experienceTitle">Broadway Pizza</h1>
                  <h3 className="experienceRole">Customer Representative</h3>
                  <h3 className="experienceYear">2012-2014</h3>
                </li>
              </ul>
              <p className="experienceDescription">
                At Broadway Pizza, I took on a dual role as a customer representative and supervisor. I managed customer inquiries, handled orders, and provided guidance to team members. My supervisory responsibilities included training new team members, overseeing daily operations, and ensuring high customer service standards.
              </p>
            </div>

            <div className="experienceItem">
              <ul className="listDisc">
                <li>
                  <h1 className="experienceTitle">Food Panda</h1>
                  <h3 className="experienceRole">Vendor Representative</h3>
                  <h3 className="experienceYear">2016-2017</h3>
                </li>
              </ul>
              <p className="experienceDescription">
                In my role as a vendor representative at Foodpanda, I developed strong communication and problem-solving skills while assisting customers and vendors. I was responsible for managing inquiries, resolving issues, and ensuring a smooth operational flow. This experience enhanced my ability to work in a fast-paced environment and taught me the importance of customer service in the food delivery industry.
              </p>
            </div>
          </div>

          <div className="aboutSkillsContainer">
            <div className="aboutSkillsTitle">
              <h1>Skills</h1>
            </div>

            <div className="aboutSkillsRow">
              {["html", "css", "javascript", "python", "type", "nextjs"].map((skill, index) => (
                
                <div key={index} className="aboutSkillCard">
                  <Image
                    src={`/images/${skill}.png`}
                    width={80}
                    height={80}
                    alt={skill}
                  />
                  <h1 className="aboutSkillName">{skill.charAt(0).toUpperCase() + skill.slice(1)}</h1>
                </div>
                
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
