export default class MicroblogApiClient {
    static BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

    constructor() {
        this.base_url = MicroblogApiClient.BASE_API_URL + "/api";
    }

    async request(options) {
        let query = new URLSearchParams(options.query || {}).toString();

        // Add question mark 
        if (query !== "") {
            query = "?" + query;
        }

        let response;

        // Execute
        try {
            response = await fetch(this.base_url + options.url, {
                method: options.method,
                headers: {
                    "Content-Type": "application/json",
                    ...options.headers,
                },
                body: options.body ? JSON.stringify(options.body) : null,
            });
        } 
        catch (error) {
            response = {
                ok: false,
                status: 500,
                json: async () => {
                    return {
                        code: 500,
                        message: "The server is unresponsive",
                        description: error.toString(),
                    }
                }
            }
        }

        return {
            ok: response.ok,
            status: response.status,
            body: response.status !== 204 ? await response.json() : null,
        }
    }

    async get(url, query, options) {
        
        return this.request({ method: "GET", url, query, ...options });
    }

    async post(url, body, options) {

        return this.request({ method: "POST", url, body, ...options });
    }

    async put(url, body, options) {
        
        return this.request({ method: "PUT", url, body, ...options });
    }

    async delete(url, options) {
        
        return this.request({ method: "DELETE", url, ...options });
    }
}