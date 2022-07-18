import LogoBonuz from '../../Assets/Images/logoBonuz.png'
import LogoDistrito from '../../Assets/Images/logoDistrito.png'
import './styles.css'

const Navbar = () => {
    return (
        <nav>
            <div>
                <img src={LogoBonuz} alt="logo bonuz"/>
            </div>
            <div>
                <img src={LogoDistrito} alt="logo distrito"/>
            </div>
        </nav>
    )
}

export default Navbar