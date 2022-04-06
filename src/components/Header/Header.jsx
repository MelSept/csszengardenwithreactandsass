import styles from "./Header.module.scss";

const Header = () => (
  <header className={ styles.container}>
    <div className="img-header">
      <h1>CSS Zen Garden</h1>
      <h2>The Beauty of CSS Design</h2>
    </div>
  </header>
);

export default Header;
