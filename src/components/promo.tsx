import { useEffect, useState } from "react";
import { Tweet } from "react-tweet";

function Promo() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <section className="px-8 space-y-10 lg:space-y-20 lg:px-[6rem] lg:text-center">
      <div className="space-y-2 lg:space-y-3">
        <div className="flex gap-8 w-max lg:mx-auto pb-6">
          <a target="_blank" href="https://t.me/ECHODEX_CHANNEL">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              className="text-brand"
              viewBox="0 0 24 24"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M19.777 4.43a1.5 1.5 0 0 1 2.062 1.626l-2.268 13.757c-.22 1.327-1.676 2.088-2.893 1.427c-1.018-.553-2.53-1.405-3.89-2.294c-.68-.445-2.763-1.87-2.507-2.884c.22-.867 3.72-4.125 5.72-6.062c.785-.761.427-1.2-.5-.5c-2.302 1.738-5.998 4.381-7.22 5.125c-1.078.656-1.64.768-2.312.656c-1.226-.204-2.363-.52-3.291-.905c-1.254-.52-1.193-2.244-.001-2.746z"
                />
              </g>
            </svg>
          </a>
          <a
            target="_blank"
            href="https://x.com/EchoDex_Project?t=It3yesFILAcH6DglCUdlFw&s=09"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              className="text-brand"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M22 5.8a8.5 8.5 0 0 1-2.36.64a4.13 4.13 0 0 0 1.81-2.27a8.2 8.2 0 0 1-2.61 1a4.1 4.1 0 0 0-7 3.74a11.64 11.64 0 0 1-8.45-4.29a4.16 4.16 0 0 0-.55 2.07a4.09 4.09 0 0 0 1.82 3.41a4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4a4 4 0 0 1-1.1.17a5 5 0 0 1-.77-.07a4.11 4.11 0 0 0 3.83 2.84A8.22 8.22 0 0 1 3 18.34a8 8 0 0 1-1-.06a11.57 11.57 0 0 0 6.29 1.85A11.59 11.59 0 0 0 20 8.45v-.53a8.4 8.4 0 0 0 2-2.12"
              />
            </svg>
          </a>
          <a target="_blank" href="https://t.me/echodexproject">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              className="text-brand"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 14c1.381 0 2.631-.56 3.536-1.465C16.44 11.631 17 10.381 17 9s-.56-2.631-1.464-3.535C14.631 4.56 13.381 4 12 4s-2.631.56-3.536 1.465C7.56 6.369 7 7.619 7 9s.56 2.631 1.464 3.535A5 5 0 0 0 12 14m8 1a2.495 2.495 0 0 0 2.5-2.5c0-.69-.279-1.315-.732-1.768A2.5 2.5 0 0 0 20 10a2.495 2.495 0 0 0-2.5 2.5A2.496 2.496 0 0 0 20 15m0 .59c-1.331 0-2.332.406-2.917.968C15.968 15.641 14.205 15 12 15c-2.266 0-3.995.648-5.092 1.564C6.312 15.999 5.3 15.59 4 15.59c-2.188 0-3.5 1.09-3.5 2.182c0 .545 1.312 1.092 3.5 1.092c.604 0 1.146-.051 1.623-.133l-.04.27c0 1 2.406 2 6.417 2c3.762 0 6.417-1 6.417-2l-.02-.255c.463.073.995.118 1.603.118c2.051 0 3.5-.547 3.5-1.092c0-1.092-1.373-2.182-3.5-2.182M4 15c.69 0 1.315-.279 1.768-.732A2.5 2.5 0 0 0 6.5 12.5A2.495 2.495 0 0 0 4 10a2.496 2.496 0 0 0-2.5 2.5A2.495 2.495 0 0 0 4 15"
              />
            </svg>
          </a>
        </div>
        <h3 className="text-4xl lg:text-7xl text-left lg:text-center leading-tight">
          A blink and you miss out
        </h3>
        <p className="items-center text-xs lg:text-base lg:w-[70%] mx-auto ">
          Our presale is going fast and we coming quick so do well not to miss
          out on any of our activites. Follow us on all our socials now!!!
        </p>
      </div>

      {isClient && (
        <div className="flex flex-col text-left  lg:flex-row gap-10 mx-auto w-max">
          <div className="w-[80vw] mx-auto lg:w-[30rem]">
            <Tweet id="1899122583867462062" />
          </div>
          <div className="w-[80vw] mx-auto lg:w-[30rem]">
            <Tweet id="1892882631936635171" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Promo;
