import '../styles/Footer.css'

const redesocial = [
  {link: "https://www.linkedin.com/in/lucas-costa-b8a233289/", logo: "/LinkedIn.svg", width: '50px', height: '50px'},
  {link: "https://api.whatsapp.com/send/?phone=5511988752599&text=Ol%C3%A1,%20eu%20quero%20um%20servi%C3%A7o!&type=phone_number&app_absent=0", logo: "/WhatsApp.svg", width: '50px', height: '50px'},
]

function Footer() {
    return (
        <footer className='Footer'>
        <div className='Footer-content'>
          <p>Site feito de <span role="img" aria-label="coração">❤️</span> por aquelejack</p>
          {redesocial.map((lang, index) => {
            return (
              <div className='Footer-item' key={index}>
                <a href={lang.link}>
                  <img src={lang.logo} alt={`${lang.name} logo`} width={lang.width} height={lang.height} className="Footer-logo"/>
                </a>
              </div>
            )
          })}
        </div>
      </footer>
    )
}

export default Footer;