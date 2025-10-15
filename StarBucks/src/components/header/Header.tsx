import './header.scss'

function Header() {
    return (
        <header className='header'>
            <h1 className='Logo'>StarBucks</h1>
            <nav className='nav'>
                <ul className='nav__list'>
                    <li className='nav__item'><a className='nav__link'>Home</a></li>
                    <li className='nav__item'><a className='nav__link'>Selected</a></li>
                    <li className='nav__item'><a className='nav__link'>Shop</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
