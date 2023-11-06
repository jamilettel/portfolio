import AnimatedContainer from "@/components/animated-transitions/AnimatedContainer";
import Terminal from "@/components/terminal/Terminal";
import "./Layout.scss";

export default function Layout({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <AnimatedContainer className={`layout-content ${className}`}>
      <div className="content">{children}</div>
      <Terminal />
    </AnimatedContainer>
  );
}
