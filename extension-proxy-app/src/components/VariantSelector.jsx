const VariantSelector = ({ product }) => {
  return (
    <button
      type="button"
      className="relative h-14 w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      aria-haspopup="listbox"
      aria-expanded="true"
      aria-labelledby="listbox-label"
    >
      <label
        id="listbox-label"
        className="block text-xs font-medium text-gray-900 pb-1"
      >
        {product.options[0]}
      </label>
      <span className="flex items-center">
        <img
          src={product.featured_image}
          alt=""
          className="flex-shrink-0 h-6 w-6 rounded-full"
        />
        <span className="ml-3 block truncate">Small</span>
      </span>
      <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <svg
          className="h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </button>
  );
};

export default VariantSelector;
