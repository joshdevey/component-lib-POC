import React from "react";

export const QuickLinks = (props) => {
  return (
    <div data-testid="quickLinks" className="bg-gray-100">
      <div className="max-w-2xl mx-auto pt-8 pb-10 px-4 sm:py-24 sm:px-6 lg:max-w-5xl lg:px-8">
        <h2 className="pt-8 text-center text-4xl font-bold text-gray-900 sm:pb-8 sm:text-5xl">
          Quick Links
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-2 gap-y-6 sm:grid-cols-2 sm:gap-y-8 lg:grid-cols-2">
          {props.quickLinks.map((product, key) => (
            <a data-testid="quickLinks-link" href="#" key={key}>
              <div className="group relative group px-2 ">
                <div
                  className="aspect-w-3 aspect-h-2 sm:aspect-w-4 sm:aspect-h-3 rounded-md overflow-hidden bg-gray-100 ">
                  <div className="bg-gray-300 object-center object-cover group-hover:opacity-75"/>
                  <div className="flex items-end pt-4 px-6">
                    <div className="w-full bg-white py-4 px-6 rounded-t text-left space-y-2">
                      <span className="text-2xl font-semibold text-gray-900" data-testid="quickLinks-link-title">
                        {product.fields.title}
                      </span>

                      <div className="hidden group-hover:block">
                        <span className="text-blue-500 underline">
                          Read more
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
