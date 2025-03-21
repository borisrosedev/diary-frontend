import figureComponent from "../components/figure/figure.component";

function headerLayout() {
    return(
        `
            <header class="tearoom-header">
                ${figureComponent({
                    id: "header-figure",
                    src:'/assets/images/logo.webp',
                    alt: 'Image du logo de l\'application TeaRoom'
                })}
                <nav id="tearoom-navbar"></nav>
            </header>
        `
    );
}