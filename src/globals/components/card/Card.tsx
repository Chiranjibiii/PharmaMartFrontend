const Card = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md max-w-xs w-full">
      <img
        src="https://xalmeds.com/cdn/shop/files/Products-5_4d205b6c-c201-4241-9427-8403ec364d43_1500x.png?v=1753020416"
        alt="Product"
        className="rounded-t-lg p-4 h-48 w-full object-contain"
      />

      <div className="px-4 pb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Apple Watch Series 7
        </h3>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            $599
          </span>
          <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
