import React, { useState } from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <header>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>
      <nav className="bg-black text-white">
        <div className="flex flex-wrap container justify-between mx-auto p-2">
          <Link to="/" className="flex items-center no-undeline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-17 0 483 483.02631"
              className="w-8"
            >
              <path
                fill="red"
                d="m194.492188 109.507812c2.523437 0 4.902343-1.191406 6.410156-3.214843 1.511718-2.023438 1.980468-4.636719 1.261718-7.058594-5.734374-19.582031-15.644531-37.6875-29.054687-53.0625-10.804687-11.496094-26.886719-16.417969-42.273437-12.9375-2.125.8125-3.800782 2.492187-4.613282 4.617187-.441406 1.195313-.769531 2.429688-.976562 3.6875-.246094 1.492188-.378906 3-.402344 4.511719v.128907c.097656 12.757812 5.238281 24.960937 14.304688 33.941406 15.375 13.398437 33.46875 23.304687 53.039062 29.035156.75.222656 1.523438.34375 2.304688.351562zm-44-40.714843c-3.175782-3.179688-5.667969-6.980469-7.328126-11.160157v-.078124c-.351562-.886719-.65625-1.777344-.917968-2.632813-.136719-.464844-.234375-.902344-.351563-1.359375-.121093-.457031-.226562-.800781-.304687-1.199219-.082032-.402343-.097656-.5625-.152344-.847656-.234375-1.195313-.398438-2.402344-.488281-3.617187 7.890625.597656 15.300781 4.003906 20.894531 9.601562 7.953125 8.992188 14.363281 19.238281 18.96875 30.328125-11.101562-4.621094-21.363281-11.054687-30.359375-19.035156zm0 0"
              />
              <path
                fill="red"
                d="m440.011719 115.027344h-123.488281c5.339843-3.648438 10.355468-7.753906 14.984374-12.265625 28.617188-28.703125 29.554688-72.222657 11.273438-90.503907s-61.785156-17.359374-90.519531 11.289063c-11.75 12.789063-21.296875 27.4375-28.25 43.351563-6.953125-15.925782-16.507813-30.582032-28.269531-43.375-28.703126-28.617188-72.21875-29.554688-90.503907-11.273438-18.289062 18.28125-17.34375 61.800781 11.277344 90.511719 4.632813 4.511719 9.648437 8.617187 14.984375 12.265625h-123.488281c-4.417969 0-8.0000002 3.582031-8.0000002 8v80c0 4.417968 3.5820312 8 8.0000002 8h16v232c.027343 22.078125 17.921875 39.972656 40 40h320c22.082031-.027344 39.976562-17.921875 40-40v-232h16c4.417969 0 8-3.582032 8-8v-80c0-4.417969-3.582031-8-8-8zm-176.429688-80.175782c22.992188-22.921874 56.527344-22.65625 67.894531-11.289062 11.367188 11.367188 11.640626 44.886719-11.28125 67.886719-10.496093 9.703125-22.480468 17.660156-35.496093 23.578125h-47.804688c0-.167969 0-.351563 0-.519532 0-1.824218-.136719-3.671874-.3125-5.53125-.066406-.613281-.136719-1.222656-.207031-1.847656-.183594-1.535156-.410156-3.066406-.683594-4.589844-.085937-.535156-.175781-1.074218-.269531-1.601562-.382813-1.992188-.800781-3.953125-1.28125-5.847656-.0625-.273438-.136719-.511719-.199219-.800782-.425781-1.65625-.863281-3.199218-1.3125-4.796874-.0625-.21875-.121094-.457032-.183594-.675782 6.554688-19.9375 17.15625-38.3125 31.136719-53.964844zm-7.570312 160.175782h-64v-64h64zm-128.175781-103.570313c-22.925782-23-22.65625-56.519531-11.285157-67.894531 11.367188-11.375 44.886719-11.640625 67.871094 11.265625 14.554687 16.304687 25.464844 35.53125 32 56.390625.902344 2.808594 1.597656 5.503906 2.253906 8.121094.183594.75.335938 1.476562.496094 2.214844.433594 1.953124.78125 3.816406 1.042969 5.601562.085937.605469.199218 1.230469.269531 1.820312.253906 1.996094.390625 4.007813.410156 6.019532h-57.570312c-13.007813-5.90625-24.988281-13.851563-35.488281-23.539063zm-111.824219 39.570313h160v64h-160zm24 312v-232h152v256h-128c-13.253907 0-24-10.746094-24-24zm168 24v-256h32v256zm200-24c0 13.253906-10.742188 24-24 24h-128v-256h152zm24-248h-160v-64h160zm0 0"
              />
              <path
                fill="red"
                d="m253.507812 109.53125c.769532 0 1.535157-.109375 2.273438-.328125 19.59375-5.726563 37.707031-15.652344 53.078125-29.089844 11.382813-10.886719 16.289063-26.902343 12.960937-42.296875-.804687-2.117187-2.480468-3.789062-4.597656-4.597656-15.394531-3.328125-31.410156 1.578125-42.296875 12.960938-13.433593 15.371093-23.359375 33.484374-29.089843 53.078124-.714844 2.421876-.25 5.039063 1.261718 7.058594 1.511719 2.023438 3.886719 3.214844 6.410156 3.214844zm32.730469-52.039062c5.601563-5.59375 13.019531-8.996094 20.910157-9.601563-.597657 7.894531-4.003907 15.316406-9.597657 20.917969-9 8.007812-19.277343 14.453125-30.402343 19.074218 4.625-11.125 11.078124-21.394531 19.089843-30.390624zm0 0"
              />
            </svg>
            <span className="ml-2 font-bold">{siteTitle}</span>
          </Link>
          <button
            className="block md:hidden border border-white flex items-center px-3 py-2"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <g>
                <rect fill="none" height="22" width="22" y="-1" x="-1" />
              </g>
              <g>
                <title>Menu</title>
                <line
                  y2="4.5"
                  x2="18.7426"
                  y1="4.5"
                  x1="1.54282"
                  strokeWidth="3.5"
                  stroke="red"
                  fill="none"
                />
                <line
                  y2="10"
                  x2="18.7426"
                  y1="10"
                  x1="1.54282"
                  strokeWidth="3.5"
                  stroke="green"
                  fill="none"
                />
                <line
                  y2="17.5"
                  x2="18.7426"
                  y1="17.5"
                  x1="1.54282"
                  strokeWidth="3.5"
                  stroke="yellow"
                  fill="none"
                />
              </g>
            </svg>
          </button>
          <div
            className={`${
              isExpanded ? "block" : "hidden"
            } md:block md:flex md:items-center w-full md:w-auto ml-auto`}
          >
            <div className="text-lg font-bold mt-3 md:m-0">
              <Link
                to="/"
                activeClassName="text-red-600 underline"
                className="block p-1 md:px-4 md:inline-block"
              >
                Home
              </Link>
              <Link
                to="/products"
                partiallyActive
                activeClassName="text-red-600 underline"
                className="block p-1 md:px-4 md:inline-block"
              >
                Products
              </Link>
              <button className="snipcart-checkout inline-block align-middle">
                <span className="shopping-cart inline-block align-middle">
                  <svg
                    className="w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="red"
                      d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"
                    />
                  </svg>
                </span>
                <span className="snipcart-items-count inline-block align-middle p-1"></span>
                <span className="snipcart-total-price inline-block align-middle p-1"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
