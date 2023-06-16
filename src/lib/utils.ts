interface IUser {
  e: any
  setLoading: any;
  setUsers: any;
  result: number
};

export const handleUsers = async ({e, setLoading, setUsers, result}:IUser) => {
  try {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(
      `https://randomuser.me/api?results=${result}`
    );
    const data = await response.json();
    setUsers(data.results);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    setLoading(false);
  }
};
