interface IHeader {
  title: string;
  subtitle: string;
  result: number;
  setResult: any;
  onClick: any;
}

const Header = ({ title, subtitle, setResult, result, onClick }: IHeader) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-300">
      <div className="p-4">
        <h1 className="text-xl font-bold text-gray-900">{title}</h1>
        <p className="text-sm font-semi-bold text-gray-500">{subtitle}</p>
      </div>
      <div className="p-4">
        <div className="w-full flex md:justify-center lg:justify-end  gap-2">
          <input
            type="number"
            min={0}
            onChange={(e: any) => `${setResult(e.target.value)}`}
            value={`${result}`}
            className="w-min h-full border-1 block px-4 py-2 border-gray-300 rounded-lg sm:text-sm"
          />

          <button
            onClick={onClick}
            className="p-2 bg-gray-800 hover:bg-gray-700  transition duration-500 rounded-md text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3ZM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8a124.95 124.95 0 0 1-124.8-124.8Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
