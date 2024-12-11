export async function useFetch(url) {
    const response = await fetch(url);
    return response.json();
}