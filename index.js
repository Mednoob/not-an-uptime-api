const Axios = require("axios")
const BaseURL = "https://uptime.notadev.xyz/api/v1"

class SubmitResult {
    /**
     * @param {Object} data
     * @param {string} data.name
     * @param {string} data.url
     * @param {string} data.message
     */
    constructor(data = {}) {
        this.name = data.name;
        this.url = data.url;
        this.message = data.message;
    }
}

module.exports = {
    /**
     * @class Client
     */
    Client: class {
        constructor() {}
        /**
             * @param {string} Name
             * @param {string} Url
             * @param {string} Token
             * @returns {Promise<SubmitResult>} `Promise<SubmitResult>`
             */
        async submit(Name, Url, Token) {
            const Result = await Axios.post(BaseURL + "/submit", {
                name: Name,
                url: Url
            }, {
                headers: {
                    authorization: Token
                }
            });

            return {
                name: Name,
                url: Url,
                message: Result.data.message
            }
        }
    }
}