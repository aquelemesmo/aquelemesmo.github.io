import '../styles/Languages.css';

const languages = [
  { name: 'HTML5', duration: '2018 - Atual', logo: '/html.png', width: '120px', height: '120px' },
  { name: 'CSS3', duration: '2018 - Atual', logo: '/css.png', width: '120px', height: '120px' },
  { name: 'NextJS', duration: '2023 - Atual', logo: '/next.png', width: '120px', height: '120px' },
  { name: 'React', duration: '2023 - Atual', logo: '/react.png', width: '120px', height: '120px' },
  { name: 'Edição de vídeo', duration: '2023 - 2024', logo: '/premiere.png', width: '120px', height: '120px' },
]

function Languages() {
    return (
        <div className='Languages'>
        <div>
          <h2>Minhas habilidades</h2>
        </div>

        <div className='Languages-container'>
          {languages.map((lang, index) => {
            return (
              <div className='Language-item' key={index}>
                <img src={lang.logo} alt={`${lang.name} logo`} width={lang.width} height={lang.height} className="Language-logo"/>
                <p>{lang.name} ({lang.duration})</p>
              </div>
            )
          })}          
        </div>

      </div>
    )
}

export default Languages;