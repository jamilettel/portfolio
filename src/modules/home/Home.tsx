import Link from "next/link";
import styles from "./Home.module.scss";
import AnimatedContainer from "@/components/animated-transitions/AnimatedContainer";

function HomeContent() {
  return (
    <main className={styles.test}>
      <h1>Hello!</h1>
      <Link href="/test">Goto /test</Link>
    </main>
  );
}

export default function Home() {
  return (
    <AnimatedContainer>
      <HomeContent />
    </AnimatedContainer>
  );
}
