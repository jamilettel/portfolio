import AnimatedContainer from "@/components/animated-transitions/AnimatedContainer";
import Link from "next/link";

export default function Test() {
  return (
    <AnimatedContainer>
      <main>
        <h1>Test!</h1>
        <Link href="/">Goto /</Link>
      </main>
    </AnimatedContainer>
  );
}
