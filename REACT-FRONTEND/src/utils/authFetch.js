const apiUrl = import.meta.env.VITE_BACKEND_API_URL || "http://localhost:6004";


let refreshPromise = null;


export async function authFetch(url, options = {}) {

    let token = localStorage.getItem("token");

    const makeRequest = (accessToken) => {

        return fetch(url, {

            ...options,
            credentials: "include",

            headers: {

                ...options.headers,
                Authorization: `Bearer ${accessToken}`

            }

        });

    };


    let response = await makeRequest(token);


    // If access token expires
    if (response.status === 401) {

        try {

            // Prevent multiple simultaneous refresh requests
            if (!refreshPromise) {

                refreshPromise = fetch(
                    `${apiUrl}/api/auth/refresh`,
                    {
                        method: "POST",
                        credentials: "include"
                    }
                )
                    .then(async (res) => {

                        if (!res.ok) {
                            throw new Error("Refresh failed");
                        }

                        return await res.json();

                    })
                    .finally(() => {

                        refreshPromise = null;

                    });

            }

            const data = await refreshPromise;

            token = data.token;

            if (!token) {
                throw new Error("New access token missing");
            }

            localStorage.setItem("token", token);


            // Retry original request
            response = await makeRequest(token);


        } catch (error) {

            console.error("Authentication refresh failed:", error);

            localStorage.removeItem("token");
            localStorage.removeItem("user");

            window.dispatchEvent(
                new Event("auth:expired")
            );

            throw error;

        }

    }

    return response;

}