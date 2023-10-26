import AnimatedContainer from "@/components/animated-transitions/AnimatedContainer";
import AnimatedLink from "@/components/link/AnimatedLink";

export default function Test() {
  return (
    <AnimatedContainer>
      <h1>Test!</h1>
      <AnimatedLink href="/">Goto /</AnimatedLink>
    </AnimatedContainer>
  );
}
