export function HttpClient() {

    const API_URL = 'https://localhost:44377/';

    async function get(endpoint) {
        try {
            const response = await fetch(`${API_URL}${endpoint}`, {
                method: 'GET'
            });
            const result = await response.json();
            return result;
        } catch (error) {
            console.error(error);
        }
    }

    return { get };

}