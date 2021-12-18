import styles from './Button.module.css';

const Button = ({ onClick, image }) => (
  <button type="button" onClick={onClick} className={styles.Button}>
    Load more
  </button>
);

export default Button;
