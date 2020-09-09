//  sessionStorage

export function setSession(key, value) {
    return window.sessionStorage.setItem(key, value);
}

export function getSession(key) {
    return window.sessionStorage.getItem(key);
}