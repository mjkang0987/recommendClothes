export const fetchData = {
  async getData({url})  {
    const response = await fetch(`${url}`);
    return response.json();
  }
}