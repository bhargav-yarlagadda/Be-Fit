export const fetchData = async <T>(url: string, options: RequestInit = {}): Promise<T> => {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data: T = await response.json();
    return data;
};
