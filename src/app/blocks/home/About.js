export default (t) => {
    return /*html*/ `
        <section class="about" id="background">
            <div class="about__content">
                <h2 class="h2">${t.title}</h2>
                <div class="about__text">
                    ${t.description.map(
                        (text) =>
                            /*html*/ `<p class="about__description">${text}</p>`
                    ).join("")}
                </div>

                <a href="/about-me" class="button">${t.button} -></a>
            </div>
            <img src="/images/headshot.JPG" alt="" class="about__image">
        </section>
    `;
};
