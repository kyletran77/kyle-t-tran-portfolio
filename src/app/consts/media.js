import proxy from "../proxies/media"

const media = {
    discord: {
        id: "slipperysticker",
        tag: "slipperysticker#7608",
    },
    linkedin: "kyletran01",
    email: "kyle7tran@gmail.com",
    website: "trandev.net"
}

export default new Proxy(media, proxy);

