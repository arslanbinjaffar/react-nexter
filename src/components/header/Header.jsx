import React from 'react'
import { Button, Heading1, Heading3 } from '../../globalstyles/typography'
import Style from './style'
import logobbc from '../../assets/logo-bbc.png'
import logobi from '../../assets/logo-bi.png'
import logoforbes from '../../assets/logo-forbes.png'
import logotechcrunch from '../../assets/logo-techcrunch.png'
import logo from '../../assets/logo.png'
const Header = () => {
  return (
    <Style>
      <img src={logo} alt="Nexter Logo" className="header__logo" />
      <Heading3>Your own house</Heading3>
      <Heading1>The ultimate personal freedom</Heading1>
      <Button className='header__btn'>view our properties</Button>
      <div className="header__seenon-text">seen on</div>
      <div className="header__seenon-logos">
        <img src={logobbc} alt={"seen on logo 1"} />
        <img src={logoforbes} alt={"seen on logo 2"} />
        <img src={logotechcrunch} alt={"seen on logo 3"} />
        <img src={logobi} alt={"seen on logo 4"} />
      </div>
    </Style>
  )
}

export default Header