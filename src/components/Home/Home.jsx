import styles from './Home.module.css';

export default function Home() {
  return (
    <>
      <h1 className={styles.homeH1}>The Shop</h1>
      <div className={styles.homeDIV}>
        <div className={styles.homeIMGDIV}>
          <img
            className={styles.homeIMG}
            src='../../../public/images/storefront1.jpg'
            alt=''
          />
        </div>
        <div className={styles.homeIMGDIV}>
          <img
            className={styles.homeIMG}
            src='../../../public/images/open-sign.jpg'
            alt=''
          />
        </div>
        <div className={styles.homeIMGDIV}>
          <img
            className={styles.homeIMG}
            src='../../../public/images/storefront2.jpg'
            alt=''
          />
        </div>
      </div>
      <main>
        <h2 className={styles.homeH1}>
          You've arrived! Come in and check out what The Shop has to offer.
        </h2>
      </main>
    </>
  );
}
