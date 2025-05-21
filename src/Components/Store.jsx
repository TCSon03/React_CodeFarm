
function Store() {
  return (
    <div className="bg-white">
  {/*
    Mobile menu

    Off-canvas menu for mobile, show/hide based on off-canvas menu state.
  */}
  <div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">
    {/*
Off-canvas menu backdrop, show/hide based on off-canvas menu state.

Entering: "transition-opacity ease-linear duration-300"
  From: "opacity-0"
  To: "opacity-100"
Leaving: "transition-opacity ease-linear duration-300"
  From: "opacity-100"
  To: "opacity-0"
    */}
    <div className="fixed inset-0 bg-black/25" aria-hidden="true" />
    <div className="fixed inset-0 z-40 flex">
      {/*
  Off-canvas menu, show/hide based on off-canvas menu state.

  Entering: "transition ease-in-out duration-300 transform"
    From: "-translate-x-full"
    To: "translate-x-0"
  Leaving: "transition ease-in-out duration-300 transform"
    From: "translate-x-0"
    To: "-translate-x-full"
*/}
      <div className="relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto bg-white shadow-xl">
        <div className="flex px-4 pt-5 pb-2">
          <button type="button" className="relative inline-flex items-center justify-center p-2 -m-2 text-gray-400 rounded-md">
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Close menu</span>
            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {/* Links */}
        <div className="mt-2">
          <div className="border-b border-gray-200">
            <div className="flex px-4 -mb-px space-x-8" aria-orientation="horizontal" role="tablist">
              {/* Selected: "border-indigo-600 text-indigo-600", Not Selected: "border-transparent text-gray-900" */}
              <button id="tabs-1-tab-1" className="flex-1 px-1 py-4 text-base font-medium text-gray-900 border-b-2 border-transparent whitespace-nowrap" aria-controls="tabs-1-panel-1" role="tab" type="button">Women</button>
              {/* Selected: "border-indigo-600 text-indigo-600", Not Selected: "border-transparent text-gray-900" */}
              <button id="tabs-1-tab-2" className="flex-1 px-1 py-4 text-base font-medium text-gray-900 border-b-2 border-transparent whitespace-nowrap" aria-controls="tabs-1-panel-2" role="tab" type="button">Men</button>
            </div>
          </div>
          {/* 'Women' tab panel, show/hide based on tab state. */}
          <div id="tabs-1-panel-1" className="px-4 pt-10 pb-8 space-y-10" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabIndex={0}>
            <div className="grid grid-cols-2 gap-x-4">
              <div className="relative text-sm group">
                <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg" alt="Models sitting back to back, wearing Basic Tee in black and bone." className="object-cover w-full bg-gray-100 rounded-lg aspect-square group-hover:opacity-75" />
                <a href="#" className="block mt-6 font-medium text-gray-900">
                  <span className="absolute inset-0 z-10" aria-hidden="true" />
                  New Arrivals
                </a>
                <p aria-hidden="true" className="mt-1">Shop now</p>
              </div>
              <div className="relative text-sm group">
                <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-02.jpg" alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees." className="object-cover w-full bg-gray-100 rounded-lg aspect-square group-hover:opacity-75" />
                <a href="#" className="block mt-6 font-medium text-gray-900">
                  <span className="absolute inset-0 z-10" aria-hidden="true" />
                  Basic Tees
                </a>
                <p aria-hidden="true" className="mt-1">Shop now</p>
              </div>
            </div>
            <div>
              <p id="women-clothing-heading-mobile" className="font-medium text-gray-900">Clothing</p>
              <ul role="list" aria-labelledby="women-clothing-heading-mobile" className="flex flex-col mt-6 space-y-6">
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">Tops</a>
                </li>
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">Dresses</a>
                </li>
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">Pants</a>
                </li>
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">Denim</a>
                </li>
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">Sweaters</a>
                </li>
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">T-Shirts</a>
                </li>
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">Jackets</a>
                </li>
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">Activewear</a>
                </li>
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">Browse All</a>
                </li>
              </ul>
            </div>
            <div>
              <p id="women-accessories-heading-mobile" className="font-medium text-gray-900">Accessories</p>
              <ul role="list" aria-labelledby="women-accessories-heading-mobile" className="flex flex-col mt-6 space-y-6">
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">Watches</a>
                </li>
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">Wallets</a>
                </li>
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">Bags</a>
                </li>
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">Sunglasses</a>
                </li>
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">Hats</a>
                </li>
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">Belts</a>
                </li>
              </ul>
            </div>
            <div>
              <p id="women-brands-heading-mobile" className="font-medium text-gray-900">Brands</p>
              <ul role="list" aria-labelledby="women-brands-heading-mobile" className="flex flex-col mt-6 space-y-6">
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">Full Nelson</a>
                </li>
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">My Way</a>
                </li>
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">Re-Arranged</a>
                </li>
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">Counterfeit</a>
                </li>
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">Significant Other</a>
                </li>
              </ul>
            </div>
          </div>
          {/* 'Men' tab panel, show/hide based on tab state. */}
          <div id="tabs-1-panel-2" className="px-4 pt-10 pb-8 space-y-10" aria-labelledby="tabs-1-tab-2" role="tabpanel" tabIndex={0}>
            <div className="grid grid-cols-2 gap-x-4">
              <div className="relative text-sm group">
                <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg" alt="Drawstring top with elastic loop closure and textured interior padding." className="object-cover w-full bg-gray-100 rounded-lg aspect-square group-hover:opacity-75" />
                <a href="#" className="block mt-6 font-medium text-gray-900">
                  <span className="absolute inset-0 z-10" aria-hidden="true" />
                  New Arrivals
                </a>
                <p aria-hidden="true" className="mt-1">Shop now</p>
              </div>
              <div className="relative text-sm group">
                <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-06.jpg" alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt." className="object-cover w-full bg-gray-100 rounded-lg aspect-square group-hover:opacity-75" />
                <a href="#" className="block mt-6 font-medium text-gray-900">
                  <span className="absolute inset-0 z-10" aria-hidden="true" />
                  Artwork Tees
                </a>
                <p aria-hidden="true" className="mt-1">Shop now</p>
              </div>
            </div>
            <div>
              <p id="men-clothing-heading-mobile" className="font-medium text-gray-900">Clothing</p>
              <ul role="list" aria-labelledby="men-clothing-heading-mobile" className="flex flex-col mt-6 space-y-6">
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">Tops</a>
                </li>
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">Pants</a>
                </li>
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">Sweaters</a>
                </li>
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">T-Shirts</a>
                </li>
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">Jackets</a>
                </li>
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">Activewear</a>
                </li>
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">Browse All</a>
                </li>
              </ul>
            </div>
            <div>
              <p id="men-accessories-heading-mobile" className="font-medium text-gray-900">Accessories</p>
              <ul role="list" aria-labelledby="men-accessories-heading-mobile" className="flex flex-col mt-6 space-y-6">
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">Watches</a>
                </li>
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">Wallets</a>
                </li>
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">Bags</a>
                </li>
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">Sunglasses</a>
                </li>
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">Hats</a>
                </li>
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">Belts</a>
                </li>
              </ul>
            </div>
            <div>
              <p id="men-brands-heading-mobile" className="font-medium text-gray-900">Brands</p>
              <ul role="list" aria-labelledby="men-brands-heading-mobile" className="flex flex-col mt-6 space-y-6">
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">Re-Arranged</a>
                </li>
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">Counterfeit</a>
                </li>
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">Full Nelson</a>
                </li>
                <li className="flow-root">
                  <a href="#" className="block p-2 -m-2 text-gray-500">My Way</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="px-4 py-6 space-y-6 border-t border-gray-200">
          <div className="flow-root">
            <a href="#" className="block p-2 -m-2 font-medium text-gray-900">Company</a>
          </div>
          <div className="flow-root">
            <a href="#" className="block p-2 -m-2 font-medium text-gray-900">Stores</a>
          </div>
        </div>
        <div className="px-4 py-6 space-y-6 border-t border-gray-200">
          <div className="flow-root">
            <a href="#" className="block p-2 -m-2 font-medium text-gray-900">Sign in</a>
          </div>
          <div className="flow-root">
            <a href="#" className="block p-2 -m-2 font-medium text-gray-900">Create account</a>
          </div>
        </div>
        <div className="px-4 py-6 border-t border-gray-200">
          <a href="#" className="flex items-center p-2 -m-2">
            <img src="https://tailwindcss.com/plus-assets/img/flags/flag-canada.svg" alt className="block w-5 h-auto shrink-0" />
            <span className="block ml-3 text-base font-medium text-gray-900">CAD</span>
            <span className="sr-only">, change currency</span>
          </a>
        </div>
      </div>
    </div>
  </div>
  <header className="relative bg-white">
    <p className="flex items-center justify-center h-10 px-4 text-sm font-medium text-white bg-indigo-600 sm:px-6 lg:px-8">Get free delivery on orders over $100</p>
    <nav aria-label="Top" className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="border-b border-gray-200">
        <div className="flex items-center h-16">
          {/* Mobile menu toggle, controls the 'mobileMenuOpen' state. */}
          <button type="button" className="relative p-2 text-gray-400 bg-white rounded-md lg:hidden">
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open menu</span>
            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          {/* Logo */}
          <div className="flex ml-4 lg:ml-0">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img className="w-auto h-8" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt />
            </a>
          </div>
          {/* Flyout menus */}
          <div className="hidden lg:ml-8 lg:block lg:self-stretch">
            <div className="flex h-full space-x-8">
              <div className="flex">
                <div className="relative flex">
                  {/* Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" */}
                  <button type="button" className="relative z-10 flex items-center pt-px -mb-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out border-b-2 border-transparent hover:text-gray-800" aria-expanded="false">Women</button>
                </div>
                {/*
            'Women' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100"
              To: "opacity-0"
          */}
                <div className="absolute inset-x-0 text-sm text-gray-500 top-full">
                  {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                  <div className="absolute inset-0 bg-white shadow top-1/2" aria-hidden="true" />
                  <div className="relative bg-white">
                    <div className="px-8 mx-auto max-w-7xl">
                      <div className="grid grid-cols-2 py-16 gap-x-8 gap-y-10">
                        <div className="grid grid-cols-2 col-start-2 gap-x-8">
                          <div className="relative text-base group sm:text-sm">
                            <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg" alt="Models sitting back to back, wearing Basic Tee in black and bone." className="object-cover w-full bg-gray-100 rounded-lg aspect-square group-hover:opacity-75" />
                            <a href="#" className="block mt-6 font-medium text-gray-900">
                              <span className="absolute inset-0 z-10" aria-hidden="true" />
                              New Arrivals
                            </a>
                            <p aria-hidden="true" className="mt-1">Shop now</p>
                          </div>
                          <div className="relative text-base group sm:text-sm">
                            <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-02.jpg" alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees." className="object-cover w-full bg-gray-100 rounded-lg aspect-square group-hover:opacity-75" />
                            <a href="#" className="block mt-6 font-medium text-gray-900">
                              <span className="absolute inset-0 z-10" aria-hidden="true" />
                              Basic Tees
                            </a>
                            <p aria-hidden="true" className="mt-1">Shop now</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 row-start-1 text-sm gap-x-8 gap-y-10">
                          <div>
                            <p id="Clothing-heading" className="font-medium text-gray-900">Clothing</p>
                            <ul role="list" aria-labelledby="Clothing-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Tops</a>
                              </li>
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Dresses</a>
                              </li>
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Pants</a>
                              </li>
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Denim</a>
                              </li>
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Sweaters</a>
                              </li>
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">T-Shirts</a>
                              </li>
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Jackets</a>
                              </li>
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Activewear</a>
                              </li>
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Browse All</a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p id="Accessories-heading" className="font-medium text-gray-900">Accessories</p>
                            <ul role="list" aria-labelledby="Accessories-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Watches</a>
                              </li>
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Wallets</a>
                              </li>
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Bags</a>
                              </li>
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Sunglasses</a>
                              </li>
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Hats</a>
                              </li>
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Belts</a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p id="Brands-heading" className="font-medium text-gray-900">Brands</p>
                            <ul role="list" aria-labelledby="Brands-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Full Nelson</a>
                              </li>
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">My Way</a>
                              </li>
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Re-Arranged</a>
                              </li>
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Counterfeit</a>
                              </li>
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Significant Other</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="relative flex">
                  {/* Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" */}
                  <button type="button" className="relative z-10 flex items-center pt-px -mb-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out border-b-2 border-transparent hover:text-gray-800" aria-expanded="false">Men</button>
                </div>
                {/*
            'Men' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100"
              To: "opacity-0"
          */}
                <div className="absolute inset-x-0 text-sm text-gray-500 top-full">
                  {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                  <div className="absolute inset-0 bg-white shadow top-1/2" aria-hidden="true" />
                  <div className="relative bg-white">
                    <div className="px-8 mx-auto max-w-7xl">
                      <div className="grid grid-cols-2 py-16 gap-x-8 gap-y-10">
                        <div className="grid grid-cols-2 col-start-2 gap-x-8">
                          <div className="relative text-base group sm:text-sm">
                            <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg" alt="Drawstring top with elastic loop closure and textured interior padding." className="object-cover w-full bg-gray-100 rounded-lg aspect-square group-hover:opacity-75" />
                            <a href="#" className="block mt-6 font-medium text-gray-900">
                              <span className="absolute inset-0 z-10" aria-hidden="true" />
                              New Arrivals
                            </a>
                            <p aria-hidden="true" className="mt-1">Shop now</p>
                          </div>
                          <div className="relative text-base group sm:text-sm">
                            <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-06.jpg" alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt." className="object-cover w-full bg-gray-100 rounded-lg aspect-square group-hover:opacity-75" />
                            <a href="#" className="block mt-6 font-medium text-gray-900">
                              <span className="absolute inset-0 z-10" aria-hidden="true" />
                              Artwork Tees
                            </a>
                            <p aria-hidden="true" className="mt-1">Shop now</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 row-start-1 text-sm gap-x-8 gap-y-10">
                          <div>
                            <p id="Clothing-heading" className="font-medium text-gray-900">Clothing</p>
                            <ul role="list" aria-labelledby="Clothing-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Tops</a>
                              </li>
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Pants</a>
                              </li>
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Sweaters</a>
                              </li>
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">T-Shirts</a>
                              </li>
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Jackets</a>
                              </li>
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Activewear</a>
                              </li>
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Browse All</a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p id="Accessories-heading" className="font-medium text-gray-900">Accessories</p>
                            <ul role="list" aria-labelledby="Accessories-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Watches</a>
                              </li>
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Wallets</a>
                              </li>
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Bags</a>
                              </li>
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Sunglasses</a>
                              </li>
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Hats</a>
                              </li>
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Belts</a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p id="Brands-heading" className="font-medium text-gray-900">Brands</p>
                            <ul role="list" aria-labelledby="Brands-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Re-Arranged</a>
                              </li>
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Counterfeit</a>
                              </li>
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Full Nelson</a>
                              </li>
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">My Way</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Company</a>
              <a href="#" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Stores</a>
            </div>
          </div>
          <div className="flex items-center ml-auto">
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</a>
              <span className="w-px h-6 bg-gray-200" aria-hidden="true" />
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">Create account</a>
            </div>
            <div className="hidden lg:ml-8 lg:flex">
              <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                <img src="https://tailwindcss.com/plus-assets/img/flags/flag-canada.svg" alt className="block w-5 h-auto shrink-0" />
                <span className="block ml-3 text-sm font-medium">CAD</span>
                <span className="sr-only">, change currency</span>
              </a>
            </div>
            {/* Search */}
            <div className="flex lg:ml-6">
              <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Search</span>
                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </a>
            </div>
            {/* Cart */}
            <div className="flow-root ml-4 lg:ml-6">
              <a href="#" className="flex items-center p-2 -m-2 group">
                <svg className="text-gray-400 size-6 shrink-0 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                <span className="sr-only">items in cart, view bag</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</div>

  )
}

export default Store