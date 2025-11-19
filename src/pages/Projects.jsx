
const projects = [
  {title:"Agro — Waste Management App", desc:"Mobile UX/UI, 25+ screens", link:"https://www.behance.net/gallery/213989041/Agro-Waste-Management-App-UX-UI-Case-Study"},
  {title:"Vesto — Crypto Wallet App", desc:"Fintech UI, dashboards & charts", link:"https://www.behance.net/gallery/214234505/Vesto-Crypto-Wallet-App-UI-Case-Study"},
  {title:"AeroTech — Aviation Website", desc:"Web UI, landing & responsive", link:"https://www.behance.net/gallery/216875113/AeroTech-Aviation-Course-Website-UI"},
  {title:"Snaploom — Wedding Planner", desc:"Elegant web UI & portfolio", link:"https://www.behance.net/gallery/225732597/Snaploom-Wedding-Planner-Web-UI-Design"},
  {title:"Movigo — Movie Booking App", desc:"Dark UI, seat booking flows", link:"https://www.behance.net/gallery/231036407/Movigo-Movie-Booking-App-UI-UX-Design"}
];

export default function Projects(){
  return (
    <section className="section container">
      <h2>Case Studies</h2>
      <div className="project-grid" style={{marginTop:18}}>
        {projects.map(p=>(
          <a key={p.title} className="project-card" href={p.link} target="_blank" rel="noreferrer">
            <div className="project-title">{p.title}</div>
            <div className="project-desc" style={{color:'#6b7280', marginTop:6}}>{p.desc}</div>
          </a>
        ))}
      </div>
    </section>
  )
}
