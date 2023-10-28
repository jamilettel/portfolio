import AnimatedContainer from "@/components/animated-transitions/AnimatedContainer";
import AnimatedLink from "@/components/link/AnimatedLink";
import './Test.scss';

export default function Test() {
  return (
    <AnimatedContainer className="test-content">
      <div className="content">
        <h1>Test!</h1>
        <AnimatedLink href="/">Goto /</AnimatedLink>
      </div>
    </AnimatedContainer>
  );
}
