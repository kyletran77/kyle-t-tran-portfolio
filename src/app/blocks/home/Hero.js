import Dots from "@/components/Dots";

export default (t) => {
    return /*html*/ `
        <section class="hero">
            <div class="hero__content">
                <h1 class="hero__title">${t.title}</h1>
                <div class="hero__description">${t.description}</div>
                <a class="button button__primary" href="https://www.linkedin.com/in/kyletran01/">${t.button} =></a>
            </div>
            <div class="hero__illustrations">
                <img src="/images/KTs_new_profile_pic.JPEG" alt="Kyle" class="hero__image">
            </div>
        </section>
    `;
};
