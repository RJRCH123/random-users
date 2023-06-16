export interface IUserCard {
  name: {
    first: string;
    last: string;
  };
  login: {
    username: string;
  };
  email: string;
  gender: string;
  dob: {
    date: string;
    age: number;
  };
  phone: string;
  location: {
    country: string;
  };
  picture: {
    medium: string;
  };
}

interface IUserComponent {
  user: IUserCard;
}

const UserCard = ({ user }: IUserComponent) => {
  return (
    <div className="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl">
      <div className="px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full flex justify-center">
            <div className="relative flex justify-center">
              <img
                src={`${user?.picture?.medium}`}
                className="w-20 shadow-xl rounded-full align-middle border-none absolute -m-12 max-w-[150px]"
              />
            </div>
          </div>
          <div className="w-full text-center mt-8 mb-2">
            <div className="flex justify-center lg:pt-2 pt-8 pb-0">
              <div className="p-1 text-center">
                <h3 className="text-xl text-slate-700 font-bold leading-normal mb-1">
                  {user?.name?.first} {user?.name?.last}
                </h3>
                <p className="text-sm text-slate-400">
                  @{user?.login?.username}
                </p>
                <p className="text-sm text-slate-400">{user?.dob?.age} years</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 pt-2 pb-6 border-t border-slate-200 text-center">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-2 text-left text-sm">
              <p className="flex content-center items-center gap-2 font-light leading-relaxed text-slate-600 mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128a64 64 0 1 1 0-128z"
                  />
                </svg>
                {user?.location?.country}
              </p>
              <p className="flex content-center items-center gap-2 font-light leading-relaxed text-slate-600 mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64c0 247.4 200.6 448 448 448c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368c-70.4-33.3-127.4-90.3-160.7-160.7l49.3-40.3c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                  />
                </svg>{" "}
                {user?.phone}
              </p>
              <p className="flex content-center items-center gap-2 font-light leading-relaxed text-slate-600 mb-1 break-words">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44z"
                  />
                </svg>
                {user?.email}
              </p>
            </div>
          </div>
          <div className="pt-4 flex justify-center sm:space-x-6 sm:pl-0 sm:mt-0">
            <a
              href={`mailto:${user?.email}`}
              target="_blank"
              className="bg-gray-800 px-4 py-1 text-lg font-medium text-gray-100 transition-all
                  duration-200 hover:bg-gray-700 rounded-lg"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;