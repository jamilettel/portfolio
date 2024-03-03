import { rubikMonoOne, shareTechMono } from "@/utils/fonts";
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
  previousPageHref?: string;
  previousPageTitle?: string;
  nextPageHref?: string;
  nextPageTitle?: string;
}) {
  return (
    <>
      <div className="content-mask" />
      <div className={`page-header ${shareTechMono.className}`}>
        <div className={`page-header-background ${backgroundClassName}`}></div>
        {previousPageHref && (
          <AnimatedLink
            className="page-header-button-left"
            href={previousPageHref}
          >
            {"< "}
            {previousPageTitle}
          </AnimatedLink>
        )}
        <h1 className={rubikMonoOne.className}>{title}</h1>
        {nextPageHref && (
          <AnimatedLink
            className="page-header-button-right"
            href={nextPageHref}
          >
            {nextPageTitle}
            {" >"}
          </AnimatedLink>
        )}
        <AnimatedLink className="page-header-home-button" href="/">
          GO BACK
        </AnimatedLink>
      </div>
    </>
  );
}
