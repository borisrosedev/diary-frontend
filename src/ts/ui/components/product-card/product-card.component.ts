import figureComponent from "../figure/figure.component";

interface ProductCardComponentProps {
    id: string,
    src?: string,
    url?: string,
    alt?: string,
    name?: string
    figureId: string
}

export default function productCardComponent({ id, figureId, src, url, alt, name }: ProductCardComponentProps) {
    return(
        `
            <article id="${id}">
                <div class="card">
                    <div class="card-image">
                       ${figureComponent({ id: figureId , src, url, alt, name })}
                        </figure>
                    </div>
                </div>

            </article>
        `
    );
}