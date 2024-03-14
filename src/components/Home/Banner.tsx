import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function Banner() {
  return (
    <section className="bg-blue-asso py-4 rounded-3xl lg:mt-8">
      <div className="container px-4 mx-auto">
        <div className="relative py-11 px-16 bg-coolGray-900 rounded-md overflow-hidden">
          <div className="relative z-20 flex flex-wrap items-center -m-3">
            <div className="w-full md:w-1/2 p-3">
              <h2 className="mb-6 text-4xl font-bold text-white tracking-tighter">
                Tu souhaites faire parti de l&apos;aventure ?
              </h2>
              <ul className="flex flex-wrap">
                <li className="flex items-center mr-6 text-sm text-coolGray-300 font-semibold text-white">
                  <CheckCircleIcon className="h-6 w-6 text-or-asso mr-2" />
                  <span>Accède à la billeterie en parcage</span>
                </li>
                <li className="flex items-center mr-6 text-sm text-coolGray-300 font-semibold text-white">
                  <CheckCircleIcon className="h-6 w-6 text-or-asso mr-2" />
                  <span>Accède à du merch exclusif à l&apos;asso</span>
                </li>
                <li className="flex items-center mr-6 text-sm text-coolGray-300 font-semibold text-white">
                  <CheckCircleIcon className="h-6 w-6 text-or-asso mr-2" />
                  <span>Intervient dans la vie de l&apos;asso</span>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 p-3 xs:mx-auto xs:text-center lg:text-right">
              <button className="inline-block lg:mt-auto px-7 py-4 font-medium text-lg text-white bg-or-asso hover:bg-yellow-500 rounded-md">
                Rejoindre l&apos;asso
              </button>
              <button className="inline-block px-7 py-4 font-medium text-lg text-white bg-transparent border border-white rounded-md xs:mt-4 lg:ml-8">
                Faire un don <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
