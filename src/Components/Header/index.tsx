import Logo from '../../assets/logo.svg'
import styles from './index.module.css'
// import { Container } from './styles';

const Header = () => {
  return (
    <header className={styles.header}>
        <img src={Logo} alt="Logo" />
    </header>
  )
}

export default Header;
