import { NavLink } from "react-router-dom";

export const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;
  return (
    <li className="country-card list-none">
      <div className="container-card bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl">
        <img
          src={flags.svg}
          alt={flags.alt}
          className="w-full h-48 object-cover rounded-t-xl transition-all"
        />

        <div className="p-4">
          <p className="card-title text-lg font-semibold text-gray-800 dark:text-white truncate">
            {name.common.length > 10
              ? name.common.slice(0, 10) + "..."
              : name.common}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            <span className="font-medium">Population:</span>{" "}
            {population.toLocaleString()}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            <span className="font-medium">Region:</span> {region}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            <span className="font-medium">Capital:</span> {capital?.[0] || "N/A"}
          </p>

          <NavLink to={`/country/${name.common}`}>
            <button className="mt-4 w-full py-2 px-4 bg-blue-600 text-white rounded-md text-sm font-medium transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Read More
            </button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};
