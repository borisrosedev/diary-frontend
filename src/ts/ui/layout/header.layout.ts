import figureComponent from "../components/figure/figure.component";

function headerLayout() {
    return(
        `
            <header class="diary-header">
                ${figureComponent({
                    id: "header-figure",
                    src:'/assets/images/logo.webp',
                    alt: 'Image du logo de l\'application diary'
                })}
                <nav id="diary-navbar"></nav>
            </header>
        `
    );
}

export default headerLayout;