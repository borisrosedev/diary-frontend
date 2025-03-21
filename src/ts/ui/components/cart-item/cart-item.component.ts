import figureComponent from "../figure/figure.component";
import mediaComponent from "../media/media.component";

interface CartItemProps {
    id: string
    content: string
    title: string
    subtitle: string
    figureId: string
    figureClassNames: string
    mediaClassNames: string
    createdAt: string | Date
    tag: {
        href: string
        textContent: string
    } 
    url?: string
    src?: string
    alt?: string
    name?: string
    classNames?: string
}

function cartItem ({ figureId, title, subtitle, tag, content, id, url, src, alt, name, figureClassNames, mediaClassNames, createdAt }: CartItemProps ) {

    return(
        `
            <article id="${id}" class="card">
                <section class="card-image">
                 ${figureComponent({ id: figureId, url, src, alt, name, classNames: figureClassNames ?? '' })}
                </section>
                <section class="cart-content">
                    ${mediaComponent({ figureId, title, subtitle, src, url, alt, name, classNames: mediaClassNames ?? ''})}
                  <div class="content">
                    ${content}<a =${tag.href}>@${tag.textContent}</a>               
                    <br />
                    <time datetime="${createdAt ?? ''}">${createdAt  ?? ''}</time>
                  </div>
                </section>
            </article>
        `    
    );
}


export default cartItem;

