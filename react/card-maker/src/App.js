import styles from './app.module.css';
import Login from './components/login/Login';

export default function App({ authService }) {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Login authService={authService} />
      </div>
    </div>
  );
}
