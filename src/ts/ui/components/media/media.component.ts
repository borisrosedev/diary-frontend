import figureComponent from "../figure/figure.component";

interface mediaComponentProps {
    title: string
    src?: string
    url?: string 
    alt?: string 
    name?: string 
    subtitle?: string
    classNames?: string
    figureId: string

}


function mediaComponent ({ figureId, title, subtitle, src, url, alt, name, classNames }: mediaComponentProps) {
    return(
        `
            <div class="media">
                <div class="media-left">
                    ${figureComponent({
                        id: figureId,
                        classNames: (classNames ?? 'is-48x48'),
                        alt: (alt ?? name),
                        src: (src ?? url)
                    })}     
                </div>
                <div class="media-content">
                    <p class="title is-4">${title}</p>
                    <p class="subtitle is-6">@${subtitle}</p>
                </div>
            </div>
        
        `
    );
}


export default mediaComponent;