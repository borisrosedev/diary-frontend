interface figureComponentProps {
    id: string
    classNames?: string
    src?: string 
    alt?: string 
    url?: string
    name?: string
}

function figureComponent({id, classNames, src, url, alt, name }: figureComponentProps){

    return(
        `
            <figure id="${id}" class="image ${classNames ?? 'is-4by3'}">
                <img src="${src ?? url }" alt="${ alt ?? name}" />
            </figure>
        `
    );
}

export default figureComponent;