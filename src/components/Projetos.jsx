import '../styles/Projetos.css'

const projetos = [
  { name: "scriptsBotDiscord", link: "https://github.com/aquelemesmo/scriptsBotDiscord", logo: "/Code.svg", width: '120px', height: '120px'},
  { name: "DevRoom Desafio", link: "https://github.com/aquelemesmo/DevRoom-Challenge", logo: "/Code.svg", width: '120px', height: '120px'},
  { name: "(JK) COMUNIDADE", link: "https://discord.gg/ugGRcAezxN", logo: "/Code.svg", width: '120px', height: '120px'},
  { name: "Página de login", link: "https://github.com/aquelemesmo/facebook-login-page-2015", logo: "/Code.svg", width: '120px', height: '120px'},
]

function Projetos() {
    return (
        <div className='Projetos'>
        <div>
          <h2>Meus projetos</h2>
        </div>

        <div className='Projetos-container'>
          {projetos.map((lang, index) => {
            return (
              <div className='Projetos-item' key={index}>
                <a href={lang.link}>
                  <img src={lang.logo} alt={`${lang.name} logo`} width={lang.width} height={lang.height} className="Projetos-logo"/>
                </a>
                <p>{lang.name}</p>
              </div>
            )
          })}          
        </div>
      </div>
    )
}

export default Projetos;