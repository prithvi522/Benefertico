import { useMemo, useState } from 'react';
import { ArrowRight, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products.js';

export default function ProductsPage() {
  const allProductsLabel = 'All Products';

  const [selectedFamily, setSelectedFamily] =
    useState(allProductsLabel);

  const [searchTerm, setSearchTerm] = useState('');

  // Get unique product families
  const productFamilies = useMemo(() => {
    return [
      ...new Set(
        products.map(
          (product) => product.family || product.category
        )
      ),
    ];
  }, []);

  // Filter products
  const visibleProducts = products.filter((product) => {
    const family = product.family || product.category;
    const query = searchTerm.trim().toLowerCase();

    const matchesFamily =
      selectedFamily === allProductsLabel ||
      family === selectedFamily;

    const matchesSearch =
      query === '' ||
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      family.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.benefit.toLowerCase().includes(query) ||
      product.cropSuitability.some((crop) =>
        crop.toLowerCase().includes(query)
      );

    return matchesFamily && matchesSearch;
  });

  const resetCatalog = () => {
    setSelectedFamily(allProductsLabel);
    setSearchTerm('');
  };

  return (
    <main className="min-h-screen bg-[#f6f8f4]">

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}
      <section className="px-4 pb-7 pt-28 sm:px-6 sm:pt-32 md:pt-36">
        <div className="mx-auto w-full max-w-[1050px]">

          <p
            className="
              text-[10px]
              font-extrabold
              uppercase
              tracking-[0.24em]
              text-[#356044]
            "
          >
            Fertilizer Collection
          </p>

          <h1
            className="
              mt-4
              max-w-[760px]
              font-[var(--font-display)]
              text-4xl
              font-black
              leading-[0.94]
              tracking-[-0.045em]
              text-[#17261d]
              sm:text-[3.7rem]
              md:text-[4.7rem]
            "
          >
            Fertilizers and plant
            <span className="block">
              nutrition products.
            </span>
          </h1>

          <p
            className="
              mt-5
              max-w-[700px]
              text-[14px]
              font-medium
              leading-7
              text-[#6b776f]
              md:text-[15px]
            "
          >
            Explore our fertilizer solutions across base
            nutrition, flowering, micronutrients, root
            development, and fertigation systems.
          </p>

        </div>
      </section>


      {/* =====================================================
          SEARCH + FILTERS
      ===================================================== */}
      <section className="px-4 pb-9 sm:px-6">
        <div className="mx-auto w-full max-w-[1050px]">

          {/* Search */}
          <div className="max-w-[545px]">

            <div
              className="
                flex
                h-[48px]
                items-center
                rounded-full
                border
                border-[#dce4dc]
                bg-white
                px-4
                shadow-[0_4px_18px_rgba(25,55,35,0.045)]
                transition-all
                focus-within:border-[#8ba891]
                focus-within:shadow-[0_7px_22px_rgba(25,55,35,0.08)]
              "
            >

              <Search
                size={17}
                className="shrink-0 text-[#7b867f]"
              />

              <input
                type="search"
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
                placeholder="Search products by name, category, or family"
                aria-label="Search products"
                className="
                  ml-3
                  min-w-0
                  w-full
                  border-0
                  bg-transparent
                  text-[12px]
                  font-medium
                  text-[#17261d]
                  outline-none
                  placeholder:text-[#909a94]
                "
              />

              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    text-[#718078]
                    transition
                    hover:bg-[#edf2ed]
                    hover:text-[#17261d]
                  "
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}

            </div>

          </div>


          {/* Product Family Filters */}
          <div className="mt-5 flex flex-wrap gap-2">

            {[allProductsLabel, ...productFamilies].map(
              (family) => {
                const isSelected =
                  selectedFamily === family;

                return (
                  <button
                    key={family}
                    type="button"
                    onClick={() =>
                      setSelectedFamily(family)
                    }
                    aria-pressed={isSelected}
                    className={`
                      rounded-full
                      border
                      max-w-full
                      px-3
                      py-2
                      text-[9px]
                      font-extrabold
                      transition-all
                      duration-200
                      focus:outline-none

                      ${
                        isSelected
                          ? `
                            border-[#244c36]
                            bg-[#244c36]
                            text-white
                            shadow-[0_4px_12px_rgba(36,76,54,0.16)]
                          `
                          : `
                            border-[#dce4dc]
                            bg-white
                            text-[#34473c]
                            hover:border-[#a8bbaa]
                            hover:bg-[#f0f5f0]
                          `
                      }
                    `}
                  >
                    {family}
                  </button>
                );
              }
            )}

          </div>


          {/* Count */}
          <div className="mt-6">

            <p
              className="
                text-[9px]
                font-extrabold
                uppercase
                tracking-[0.18em]
                text-[#7c8780]
              "
            >
              <span className="text-[#356044]">
                {visibleProducts.length}
              </span>{' '}
              / {products.length} Products
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          PRODUCT GRID
      ===================================================== */}
      <section className="px-4 pb-28 sm:px-6">
        <div className="mx-auto w-full max-w-[1050px]">

          <div
            className="
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {visibleProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="
                  group
                  flex
                  w-full
                  min-w-0
                  flex-col
                  overflow-hidden
                  rounded-[18px]
                  border
                  border-[#e1e7e1]
                  bg-white
                  p-3
                  shadow-[0_4px_18px_rgba(25,55,35,0.045)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#c6d6c9]
                  hover:shadow-[0_14px_30px_rgba(25,55,35,0.10)]
                  focus:outline-none
                  focus:ring-4
                  focus:ring-[#dce9df]
                "
              >

                {/* =========================================
                    PRODUCT IMAGE
                ========================================= */}
                <div
                  className="
                    relative
                    flex
                    h-[190px]
                    w-full
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-[14px]
                    bg-[#f2f5ed]
                    sm:h-[205px]
                  "
                >

                  {/* Category badge */}
                  <span
                    title={product.category}
                    className="
                      absolute
                      left-3
                      top-3
                      z-10
                      rounded-full
                      bg-white
                      px-2.5
                      py-1.5
                      text-[8px]
                      font-extrabold
                      uppercase
                      tracking-[0.13em]
                      text-[#356044]
                      shadow-[0_3px_10px_rgba(0,0,0,0.06)]
                      max-w-[45%]
                      truncate
                    "
                  >
                    {product.category}
                  </span>

                  {/* Product type */}
                  <span
                    title={product.productType}
                    className="
                      absolute
                      right-3
                      top-3
                      z-10
                      rounded-full
                      border
                      border-[#e1e7e1]
                      bg-white/90
                      px-2.5
                      py-1.5
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.1em]
                      text-[#718078]
                      max-w-[45%]
                      truncate
                    "
                  >
                    {product.productType}
                  </span>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      h-[165px]
                      w-[78%]
                      object-contain
                      transition-transform
                      duration-500
                      ease-out
                      group-hover:scale-[1.05]
                    "
                  />

                </div>


                {/* =========================================
                    PRODUCT INFORMATION
                ========================================= */}
                <div className="px-1.5 pb-1 pt-4">

                  {/* Crop + application */}
                  <p
                    className="
                      text-[8px]
                      font-extrabold
                      uppercase
                      tracking-[0.15em]
                      text-[#77837b]
                    "
                  >
                    {product.cropType}

                    <span className="mx-1.5 text-[#91aa96]">
                      /
                    </span>

                    {product.application}
                  </p>


                  {/* Product name */}
                  <h2
                    className="
                      mt-2
                      font-[var(--font-display)]
                      text-[20px]
                      font-black
                      leading-[1.08]
                      tracking-[-0.025em]
                      text-[#17261d]
                    "
                  >
                    {product.name}
                  </h2>


                  {/* Description */}
                  <p
                    className="
                      mt-2.5
                      line-clamp-2
                      min-h-[40px]
                      text-[11px]
                      font-medium
                      leading-5
                      text-[#748078]
                    "
                  >
                    {product.description}
                  </p>


                  {/* Bottom */}
                  <div
                    className="
                      mt-3
                      flex
                      items-center
                      justify-between
                      border-t
                      border-[#edf0ec]
                      pt-3
                    "
                  >

                    <span
                      className="
                        text-[9px]
                        font-extrabold
                        uppercase
                        tracking-[0.13em]
                        text-[#356044]
                      "
                    >
                      View details
                    </span>

                    <span
                      className="
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        bg-[#edf3ed]
                        text-[#356044]
                        transition-all
                        duration-300
                        group-hover:bg-[#356044]
                        group-hover:text-white
                      "
                    >
                      <ArrowRight size={14} />
                    </span>

                  </div>

                </div>

              </Link>
            ))}

          </div>


          {/* ===============================================
              NO RESULTS
          =============================================== */}
          {visibleProducts.length === 0 && (
            <div
              className="
                mx-auto
                mt-8
                max-w-[500px]
                rounded-[20px]
                border
                border-dashed
                border-[#ccd8cd]
                bg-white
                px-6
                py-14
                text-center
              "
            >

              <p
                className="
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[0.2em]
                  text-[#356044]
                "
              >
                No matching products
              </p>

              <h2
                className="
                  mt-3
                  font-[var(--font-display)]
                  text-3xl
                  font-black
                  tracking-[-0.03em]
                  text-[#18271e]
                "
              >
                Try a broader search.
              </h2>

              <p
                className="
                  mx-auto
                  mt-3
                  max-w-sm
                  text-sm
                  leading-6
                  text-[#738078]
                "
              >
                Clear your search or category filter to
                see the complete fertilizer collection.
              </p>

              <button
                type="button"
                onClick={resetCatalog}
                className="
                  mt-6
                  rounded-full
                  bg-[#244c36]
                  px-6
                  py-3
                  text-[11px]
                  font-extrabold
                  text-white
                  transition
                  hover:-translate-y-0.5
                  hover:bg-[#356044]
                "
              >
                Reset catalog
              </button>

            </div>
          )}

        </div>
      </section>

    </main>
  );
}
