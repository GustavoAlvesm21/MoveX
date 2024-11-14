import logo from '../../images/logo01.svg'
import './style.css'

function Logo() {
    return (
        <div className='App-logo'>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Just+Me+Again+Down+Here&display=swap');
            </style>
            <img src={logo} className='Logo-img'></img>
            <p className='just-me-again-down-here-regular'><strong>MoveX</strong></p>
        </div>
    )
}

export default Logo;