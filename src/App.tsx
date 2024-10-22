import { useState } from "react";
import styles from "./App.module.css";
import { Navbar } from './components/navbar.component';

function App() {
  const [bid, setBid] = useState(''); 
  const [errorMessage, setErrorMessage] = useState(''); 
  const [successMessage, setSuccessMessage] = useState(''); 
  const minBid = 5000; 

  const handleBidChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBid(e.target.value);
  };

  const handleSubmit = () => {
    const bidValue = parseFloat(bid);
    if (isNaN(bidValue) || bidValue < minBid) {
      setErrorMessage(`O lance deve ser no mínimo R$${minBid}.`);
      setSuccessMessage('');
    } else {
      setSuccessMessage(`Lance de R$${bidValue} recebido com sucesso!`);
      setErrorMessage('');
    }
  };

  return (
    <>
      <Navbar />
      <section className={styles.section}>
        <div className={styles.form}>
          <h2><span>Rolex</span></h2>
          <p className={styles.description}>
            Um ícone de luxo e precisão, o Rolex é conhecido mundialmente por sua excelência e elegância atemporais.
          </p>
          <div className={styles.bar}></div>

          
          <label htmlFor="bid" className={styles.bidLabel}>Insira o valor do lance:</label>
          <input
            type="number"
            id="bid"
            value={bid}
            onChange={handleBidChange}
            className={styles.bidInput}
            placeholder={`Lance mínimo: R$${minBid}`}
          />
          
         
          <button onClick={handleSubmit} className={styles.bidButton}>Enviar Lance</button>

          
          {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
          {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
        </div>

        <div className={styles.img}>
          <img src="rolex.png" alt="rolex" />
        </div>
      </section>
    </>
  );
}

export default App;
