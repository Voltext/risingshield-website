import ImageComp from "../Utils/Image";

export default function Hero() {
  return (
    <section>
      <div className="relative isolate">
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 sm:pt-16 lg:px-8 lg:pt-16">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="mx-auto relative basis-40 w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight uppercase text-gray-800 sm:text-6xl xs:text-center sm:text-center md:text-center lg:text-left">
                  Rising Shield
                </h1>
                <h1 className="text-2xl tracking-tight uppercase pt-2 text-or-asso sm:text-2xl xs:text-center sm:text-center md:text-center lg:text-left xs:text-lg">
                  Association sous loi 1901
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-800 xs:text-center sm:text-center md:text-center lg:text-left xs:text-base">
                  Rising Shield est une association non affilié, regroupant les
                  supporters de la Team Aegis. Créee en 2023, son objectif est
                  de permettre aux fans de s&apos;organiser pour les
                  déplacements lors d&apos;événements offline autour d&apos;une
                  passion commune.
                </p>
                <div className="mt-10 flex items-center gap-x-6 xs:justify-center sm:justify-center md:justify-center lg:justify-normal">
                  <a
                    href="#"
                    className="rounded-md bg-blue-asso px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Rejoindre l&apos;asso
                  </a>
                  <a
                    href="#"
                    className="rounded-md bg-or-asso px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Faire un don <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 sm:hidden md:hidden lg:flex xs:hidden">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <ImageComp
                      path="/images/home6.jpg"
                      author="@Michaelbtss_"
                      link="https://twitter.com/michaelbtss_"
                      style="rounded-xl bg-gray-900/5 object-cover shadow-lg sm:hidden md:hidden lg:block xs:hidden"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <ImageComp
                      path="/images/home8.jpg"
                      author="@Michaelbtss_"
                      link="https://twitter.com/michaelbtss_"
                      style="rounded-xl bg-gray-900/5 object-cover shadow-lg sm:hidden md:hidden lg:block xs:hidden"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <ImageComp
                      path="/images/home2.jpg"
                      author="@Michaelbtss_"
                      link="https://twitter.com/michaelbtss_"
                      style="rounded-xl bg-gray-900/5 object-cover shadow-lg sm:hidden md:hidden lg:block xs:hidden"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <ImageComp
                      path="/images/home3.jpg"
                      author="@Michaelbtss_"
                      link="https://twitter.com/michaelbtss_"
                      style="rounded-xl bg-gray-900/5 object-cover shadow-lg sm:hidden md:hidden lg:block xs:hidden"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <ImageComp
                      path="/images/home7.jpg"
                      author="@Michaelbtss_"
                      link="https://twitter.com/michaelbtss_"
                      style="rounded-xl bg-gray-900/5 object-cover shadow-lg sm:hidden md:hidden lg:block xs:hidden"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
