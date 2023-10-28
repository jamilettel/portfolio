export function getIdFromPathname(pathname: string) {
    if (pathname === "/") return "index";
    let path = pathname;
    if (pathname[0] === "/")
        path = path.slice(1);

    return path.replace("/", "--");
}