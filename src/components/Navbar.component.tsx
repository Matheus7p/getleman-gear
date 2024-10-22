import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h1><span>Gentleman's Gear</span></h1>
      
        <div className={styles.links}>
          <h3>Início</h3>
          <h3><span>Produto</span></h3>
          <h3>Galeria</h3>
          <h3>Sobre</h3>    
        </div>
    </nav>
  );
};
