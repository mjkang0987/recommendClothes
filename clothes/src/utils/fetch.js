export const fetchData = {
  async getData({url}) {
    try {
      const res = await fetch(`${url}`);
      return await res.json();
    } catch(err) {
      console.error(err);
    }
  }
}