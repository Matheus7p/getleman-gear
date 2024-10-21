import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h1><span>Gentleman's Gear</span></h1>
      
        <div className={styles.links}>
          <h3>Home</h3>
          <h3><span>Products</span></h3>
          <h3>Gallery</h3>
          <h3>About</h3>    
        </div>
    </nav>
  );
};
