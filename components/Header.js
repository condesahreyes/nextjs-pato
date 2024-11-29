import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGem from '@fortawesome/fontawesome-free-regular/faGem'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            {/*<span className="icon fa-diamond"></span>*/}
            <FontAwesomeIcon icon={faGem} transform="grow-18" />
        </div>
        <div className="content">
            <div className="inner">
                <h1>PATO MARKETING</h1>
                <p>𝐈𝐝𝐞𝐧𝐭𝐢𝐝𝐚𝐝 𝐠𝐫𝐚́𝐟𝐢𝐜𝐚:
Define el aspecto visual de la marca, “todo lo que se ve”. La empresa tiene una identidad gráfica propia cuando identificamos fácilmente su presencia y la relacionamos con un logotipo / color / tipografía.

Nos lleva a trabajar con el 𝐁𝐫𝐚𝐧𝐝𝐢𝐧𝐠:
Fortalece la marca ya existente, sumando a la identidad gráfica sentimientos y experiencias que el público genera con la empresa.


𝐈𝐝𝐞𝐧𝐭𝐢𝐝𝐚𝐝 𝐠𝐫𝐚́𝐟𝐢𝐜𝐚:
Precio único: $4500

Incluye: 
-̞ Logo.
-̞ Tipografía.
-̞ Palea de colores.
-̞ Piezas para avatar y perfil de Instagram
-̞ Estilo de ilustración.
-̞ Íconos.


𝐂𝐨𝐧𝐭𝐞𝐧𝐢𝐝𝐨 𝐩𝐚𝐫𝐚 𝐫𝐞𝐝𝐞𝐬:
𝘗𝘢𝘤𝘬 𝘮𝘦𝘯𝘴𝘶𝘢𝘭 𝘥𝘦 𝘥𝘪𝘴𝘦ñ𝘰 𝘥𝘦 𝘱𝘪𝘦𝘻𝘢𝘴 𝘷𝘪𝘴𝘶𝘢𝘭𝘦𝘴
Precio mensual: US$160.

Incluye:
-̞ 8 a 10 postes.
-̞ 12 a 16 estores.
-̞ Redacción para posts..</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
