import styles from './Preloader.module.css';

const Preloader = () => (
    <div className={styles.preloader}>
        <div className={styles.spinner} />
    </div>
);

export default Preloader;
