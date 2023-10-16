export function HttpClient() {

    const API_URL = 'https://localhost:44377/api/';

    async function Get(endpoint) {
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

    async function Post(endpoint, body) {
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

    async function Put(endpoint, body) {

    }

    async function Delete(endpoint, body) {
        try {
            const response = await fetch(`${API_URL}${endpoint}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
            await response;
        } catch (error) {
            console.error(error);
        }
    }

    return { Get, Post, Put, Delete };

}