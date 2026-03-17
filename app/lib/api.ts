
const API_BASE_URL = "http://localhost:5000";
function getToken() {
    if(typeof window === "undefined") return null;
    return localStorage.getItem("token")
}

async function request(endpoint: string, options: RequestInit = {}){
    const token = getToken();

    const res = await fetch(`${API_BASE_URL}${endpoint}`,{
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...(token && {Authorization: `Bearer ${token}`}),
            ...options.headers
        }
    });

    if(!res.ok){
        throw new Error("API request failed")
    }
    return res.json();
}

export const api = {
    get: (endpoint: string) => request(endpoint),
    post: (endpoint: string, data: any) => request(endpoint, {
        method: "POST",
        body: JSON.stringify(data)
    }),
    put: (endpoint: string, data: any) => request(endpoint, {
        method: "PUT",
        body: JSON.stringify(data)
    }),
    delete: (endpoint: string) => request(endpoint,{method: "DELETE"})
}