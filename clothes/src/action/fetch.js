export const fetchData = {
  async getData({url})  {
    const res = await fetch(`${url}`);
    if (res.ok) return res.json();
  }
}