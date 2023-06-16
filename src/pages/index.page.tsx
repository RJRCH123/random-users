import { useState } from "react";
import { handleUsers } from "@/lib/utils";
import { Header, Loader, UserCard } from "@/components";
import { IUserCard } from "@/components/userCard";


export async function getServerSideProps() {
  const response = await fetch("https://randomuser.me/api");
  const data = await response.json();

  return {
    props: {
      usersInitial: data.results,
    },
  };
}

interface IHomePage {
  usersInitial: IUserCard[];
}

const HomePage = ({ usersInitial }: IHomePage) => {
  const [users, setUsers] = useState<IUserCard[]>(usersInitial);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(1);

  return (
    <section className="p-12 bg-slate-200 h-screen overflow-auto">
      <Header
        title={"User list"}
        subtitle={"Write the number of users you want to display in the list"}
        setResult={setResult}
        result={result}
        onClick={(e: any) => handleUsers({ e, setLoading, setUsers, result })}
      />

      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 justify-items-center gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-14">
          {users.map((user: IUserCard, index) => (
            <UserCard user={user} key={index} />
          ))}
        </div>
      )}
    </section>
  );
};

export default HomePage;
