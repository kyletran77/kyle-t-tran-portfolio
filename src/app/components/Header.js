import { routes } from "@/consts";
import MediaIcon from "./MediaIcon";

const paths = ["/", "/projects", "/about-me"]

export default (t) => {
    return /*html*/ `
        <header class="header">
            <input class="hamburger" type="checkbox" aria-label="Menu" />

            <div class="media-header">
                <span class="media-header__line"></span>
                <div class="media-header__links">
                    ${["linkedin", "email", "twitter", "instagram", "discord"]
                        .map((name) => MediaIcon({ name }))
                        .join("")}
                </div>
            </div>


            <div class="container">

                <div class="header__inner">
                    <a class="logo" href="/">
                        <img class="logo__img" src="/images/kyle-logo.png" alt="Kyle's logo">
                        <span class="logo__name">Kyle T.</span>
                    </a>
                    <div class="header__links">
                        ${paths
                            .map(
                                (path) => /*html*/ `
                                <a href="${path}" class="header__link ${
                                    window.location.pathname === path
                                        ? "header__link_active"
                                        : ""
                                }">${t[routes[path].name]}</a>
                            `
                            )
                            .join("")}
                    </div>
                    <div class="dropdown">
                        <span class="dropdown__label">en</span>

                        <div class="dropdown__list">
                            <a href="/" class="dropdown__item dropdown__item_active">en</a>
                            <a href="/es" class="dropdown__item">es</a>
                        </div>
                    </div>

                </div>
            </div>
            

        </header>
    `;
};
