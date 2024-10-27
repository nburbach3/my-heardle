import styles from "@/app/page.module.css";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Header />
    </div>
  );
}
