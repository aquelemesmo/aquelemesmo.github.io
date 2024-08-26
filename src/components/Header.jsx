import '../styles/Header.css';
import '../styles/Buttons.css'

function Header() {
    return (
      <div className='Header'>
        <div className='Header-texts'>
          <h1>Seja bem-vindo ao meu portfólio</h1>
          <p>
            Este portfólio é feito para compartilhar meus projetos e mostrar<br />
            um pouco o meu trabalho e compartilhar o meu conhecimento.
          </p>

          <div className="Buttons">
            <a className='SeePortfolio' href="">
              Veja meu portfólio
              <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                <rect width="100" height="100" fill="url(#pattern0_143_20)"/>
                <defs>
                <pattern id="pattern0_143_20" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use href="#image0_143_20" transform="scale(0.01)"/>
                </pattern>
                <image id="image0_143_20" width="100" height="100" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABu0lEQVR4nO3csUpbUQCH8VDQvoQO4lBxNIIIOncQUV9FF/sEIuKsm6jv0M51ru/SWh0MtJ9czFDUJmbIOf/cfD/IluHcfJx7b3JuTqcjSZIkSZIkSZIkSZIk6QVgC7gCvgGnwOLL96gA4ANwzmsPwLYRCgO+8H+PwI5RysX4CPwaEMQoJQHLQ2IYpXCQuXcGcaYUjPLDKEGAbv+OapSZslt73K0GbAC/R4jSM4pRpg/OlDwYJQ9GaU2UvdrjbjWMkgej5MEoeTBKHoySB6PkwSh5MEoeJjVKf+16qb/20LbXAfB3In66B2aAY+B+hAFPg16VKMB17SMP1qw8rpeM0UxnDXZTMkhzbtVgf4DZUkH2hwxGlA2y4ic+1PciMf6Jcjl8TFN9UV+rcdt7BNzVPvowdR8jas6TwKeAL3Hdqf5i2Hb4MEQOjJEDY+TAGDkwRg6MkQNj5AA2/e9ICIyRA2PkwBg5MEYOjJEDY+TAGDmAVTcOCALcjrC45HZNY44xb4wguD1TFp7X+n96mgoCHHrNyNsE8+yNKM0T+26CWTHMZ+AC+AqcAAvVBiNJkiRJkiRJkiRJkiR1xuEJnnjOF8Wm2UgAAAAASUVORK5CYII="/>
                </defs>
              </svg>
            </a>
            <a className='MakeOrder' href="https://api.whatsapp.com/send/?phone=5511988752599&text=Ol%C3%A1,%20eu%20quero%20um%20servi%C3%A7o!&type=phone_number&app_absent=0">Faça um pedido!</a>
          </div>
        </div>
      </div>
    )
}

export default Header;