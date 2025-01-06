const defaultLocale = "en"


function setLocaleHander() {
    const options = document.querySelectorAll(".dropdown__option");
    const label = document.querySelector(".dropdown__label");

    options.forEach((option) => {
        if (option.innerHTML === localStorage.locale) 
            [label.innerHTML, option.innerHTML] = [localStorage.locale, label.innerHTML]

        option.addEventListener("click", () => {
            localStorage.locale = option.innerHTML;

            window.location.reload();
        });
    });
}

async function getLocale() {
    const locale = localStorage.locale ?? defaultLocale
    try {
        const response = await fetch(`/locales/${locale}.json`)
        if (!response.ok) throw new Error(`Failed to load locale: ${locale}`)
        return response.json()
    } catch (error) {
        console.error('Failed to load locale:', error)
        // Fallback to embedded default translations
        return {
            projects: {
                trandev: {
                    name: "TranDev",
                    description: "B2B Sales and Project Management"
                },
                eventsbykylo: {
                    name: "Events by Kylo",
                    description: "B2C Sales and Event Management"
                }
                // ... other translations
            }
        }
    }
}

export default setLocaleHander;
export { getLocale }
