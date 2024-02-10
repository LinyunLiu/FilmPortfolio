function getRidOfHTML_index(){
    cs_home = cs_home.replace(".html", "")
    film_home = film_home.replace(".html", "")
}
function getRidOfHTML_proj_demos(){
    const anchor = document.getElementById("github");
    let href = anchor.getAttribute("href");
    href = href.replace(".html", "");
    anchor.setAttribute("href", href);

}
const IDs = ["frame__prev", "link-1","link-2","link-3"]
function getRidOfHTML(){
    for (const id of IDs ) {
        const anchor = document.getElementById(id);
        let href = anchor.getAttribute("href");
        href = href.replace(".html", "");
        anchor.setAttribute("href", href);
    }
}