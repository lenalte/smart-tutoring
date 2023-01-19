export const BASE_URL = "http://localhost:4000"

//http://127.0.0.1.4000

export function getToken() {
    return localStorage.getItem("token");
}

export function setToken(token) {
    localStorage.setItem("token", token ?? "");
}

export function validateToken() {
    return postRequestPromise("/validateToken");   //  "/auth" ?
}

export function buildQueryString(obj) {
    let str = [];
    for (let p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
}

export function convertToJson(response) {
    return response.json().then((json) => {
        if (!response.ok) {
            const error = {
                response: response,
                errorMessage: json,
            };
            return Promise.reject(error);
        }
        return json;
    });
}

export function buildURL(
    path
    // payload = undefined
) {
    return `${BASE_URL}${path}`;
}

export function getRequestPromise(
    path
    // payload = undefined
) {
    return fetch(buildURL(path), {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + getToken(),
        },
    }).then((response) => convertToJson(response));
}

export function postRequestPromise(path, body) {
    return fetch(buildURL(path), {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + getToken(),
        },
        body: JSON.stringify(body),
    }).then((response) => convertToJson(response));
}


// export function putRequestPromise(path, body) {
//     return fetch(buildURL(path), {
//         method: "PUT",
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             Authorization: "Bearer " + getToken(),
//         },
//         body: JSON.stringify(body),
//     }).then((response) => convertToJson(response));
// }

export function deleteRequestPromise(path, body
    // = undefined
) {
    // const payload = body ? JSON.stringify(body) : undefined;
    return fetch(buildURL(path), {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + getToken(),
        },
        body
        // : payload,
    }).then((response) => convertToJson(response));
}