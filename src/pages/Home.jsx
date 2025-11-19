
import profile from '../assets/profile.jpg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
export default function Home(){
  return (
    <section className="hero container">
      <div className="hero-left">
        <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}}>Mohamed Irfan</motion.h1>
        <motion.p className="lead" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1}}>
          Transforming ideas into meaningful interfaces through research, strategy, and modern design.
        </motion.p>
        <div className="cta">
          <Link className="btn btn-primary" to="/projects">View Case Studies</Link>
          <a className="btn btn-outline" href="/Irfan-Resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
        </div>
      </div>
      <div className="hero-right">
        <motion.img src={profile} className="profile-img" alt="profile" initial={{scale:0.98}} animate={{scale:1}} transition={{duration:0.5}} />
      </div>
    </section>
  )
}
