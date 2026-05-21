import styles from './Home.module.css';

export default function Home() {
  return (
    <>
      <main>
        <h1 className={styles.homeH1}>The Shop</h1>
        <div className={styles.homeDIV}>
          <div className={styles.homeIMGDIV}>
            <img
              className={styles.homeIMG}
              src='../../../images/storefront1.jpg'
              alt='generic storefront'
            />
          </div>
          <div className={styles.homeIMGDIV}>
            <img
              className={styles.homeIMG}
              src='../../../images/open-sign.jpg'
              alt='open shop sign'
            />
          </div>
          <div className={styles.homeIMGDIV}>
            <img
              className={styles.homeIMG}
              src='../../../images/storefront2.jpg'
              alt="Bridie's storefront"
            />
          </div>
        </div>

        <h2 className={styles.homeH1}>
          You've arrived! Come in and check out what The Shop has to offer.
        </h2>
      </main>
    </>
  );
}
