export function HttpClient() {

    const API_URL = 'https://localhost:44377/api/';

    async function get(endpoint) {
        try {
            const response = await fetch(`${API_URL}${endpoint}`, {
                method: 'GET'
            });
            const result = await response.json();
            return result;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async function post(endpoint, body) {
        try {
            const response = await fetch(`${API_URL}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
            const result = await response.json();
            return result;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    return { get, post };

}