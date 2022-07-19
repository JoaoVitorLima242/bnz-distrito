import './styles.css'
import Img from '../../Assets/Images/img1.png'

const Container = () => {
    return (
        <div className="container view">
            <div className='card'>
                <div className='header'>
                    <h2>Ganhe R$400,00 em serviços jurídicos + call com advogado grátis!</h2>
                    <h3>Especial para Startups parceiras da Distrito</h3>
                </div>
                <div className='content'>
                    <div className='img-content'>
                        <img src={Img} alt="Mulher falando no celular enquanto uso o seu notebook"/>
                    </div>
                    <div>
                        <p>A Bonuz é um escritório jurídico digital, capaz de oferecer agilidade e custos de 30% a 50% mais acessíveis que escritórios convencionais, através de uma plataforma simples e intuitiva.</p>
                        <p>Você pode solicitar uma conversa com advogado para orientação trabalhista, tributária ou auxílio em outros assuntos, como:</p>
                        <ul>
                            <li>Revisão e elaboração de contrato de sócios e colaboradores</li>
                            <li>Contrato de Vesting</li>
                            <li>Registro de marca e patentes</li>
                            <li>Política de uso para aplicativos e sites.</li>
                        </ul>
                    </div>
                </div>
                <div className='footer'>
                    <h3>Cadastre-se na nossa plataforma e simplifique seu jurídico!</h3>
                    <a href='https://www.bonuz.it/juridico-familiar/' target='_blank' rel="noreferrer">
                        <button>Consulte nossos planos</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Container;