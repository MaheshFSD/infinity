const saveLogin = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

const loadData = (key) => {
    try {
        let data = localStorage.getItem(key);
        data = JSON.parse(data);
        return data;
    }
    catch {
        return false;
    }
}

const logout = () => {
    localStorage.clear();
}

export { loadData, saveLogin, logout };