import { rubikMonoOne } from "@/utils/fonts";
import "./PageHeader.scss";
import AnimatedLink from "@/components/link/AnimatedLink";

export default function PageHeader({
  title,
  backgroundClassName,
  nextPageHref,
  nextPageTitle,
  previousPageHref,
  previousPageTitle,
}: {
  title: string;
  backgroundClassName: string;
  previousPageHref: string;
  previousPageTitle: string;
  nextPageHref: string;
  nextPageTitle: string;
}) {
  return (
    <div className="page-header">
      <div className={`page-header-background ${backgroundClassName}`}></div>
      <AnimatedLink className="page-header-button-left" href={previousPageHref}>
        {"< "}
        {previousPageTitle}
      </AnimatedLink>
      <h1 className={rubikMonoOne.className}>{title}</h1>
      <AnimatedLink className="page-header-button-right" href={nextPageHref}>
        {nextPageTitle}
        {" >"}
      </AnimatedLink>
      <AnimatedLink className="page-header-home-button" href="/">
        GO BACK
      </AnimatedLink>
    </div>
  );
}
