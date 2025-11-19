
import profile from '../assets/profile.jpg'
export default function About(){
  return (
    <section className="section container">
      <div className="about-grid">
        <img src={profile} alt="profile" />
        <div>
          <h2>About Me</h2>
          <p>I’m <strong>Mohamed Irfan</strong>, a UX/UI Designer passionate about crafting clean, modern, and intuitive digital experiences. I work across mobile and web to create products that solve real user problems.</p>
          <p>My approach blends user research, thoughtful interaction design, and polished visual systems to build interfaces that are both usable and delightful.</p>

          <div style={{marginTop:18}}>
            <div className="card">
              <h3>Skills</h3>
              <div className="skills">
                <div className="skill">UX Research</div>
                <div className="skill">Wireframing</div>
                <div className="skill">UI Design</div>
                <div className="skill">Prototyping</div>
                <div className="skill">Design Systems</div>
                <div className="skill">Interaction Design</div>
                <div className="skill">Responsive Design</div>
              </div>
            </div>

            <div style={{height:18}}></div>

            <div className="card">
              <h3>Tools</h3>
              <div style={{marginTop:10}} className="skills">
                <div className="skill">Figma</div>
                <div className="skill">Adobe XD</div>
                <div className="skill">FigJam</div>
                <div className="skill">Framer</div>
                <div className="skill">Maze</div>
                <div className="skill">Notion</div>
                <div className="skill">GitHub</div>
                <div className="skill">ChatGPT</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
