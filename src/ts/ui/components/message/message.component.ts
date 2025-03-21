function messageComponent ({ header, body}: { header: string, body: string }) {
    return(
        `
            <article class="message">
                <section class="message-header">${header}</section>
                <section class="message-body">${body}</section>            
            </article>
        `
    );
}

export default messageComponent;