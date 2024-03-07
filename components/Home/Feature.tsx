import {
  ArrowsPointingOutIcon,
  InformationCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import AssoInfo from "./AssoInfo";
import Benefits from "./Benefits";

const features = [
  {
    name: "Événements",
    description: "Organiser les déplacement aux événements à coûts amoindris",
    href: "#",
    icon: ArrowsPointingOutIcon,
  },
  {
    name: "Viewing party",
    description:
      "Organisation de viewing party partout en France pour rassembler les fans !",
    href: "#",
    icon: UserGroupIcon,
  },
  {
    name: "Spam report",
    description:
      "Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.",
    href: "#",
    icon: InformationCircleIcon,
  },
];

export default function Example() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 md:px-28 sm:px-28">
      <div className="bg-white py-16 sm:py-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
          Nos objectifs
        </h2>
        <div className="mx-auto mt-2 max-w-2xl sm:mt-20 lg:mt-4 lg:max-w-none">
          <section className="relative overflow-hidden py-6">
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap">
                <Benefits
                  icon={
                    <ArrowsPointingOutIcon className="h-6 w-6 text-white" />
                  }
                  title="Événements"
                  description="Organiser les déplacement aux événements à coûts amoindris"
                />
                <Benefits
                  icon={<UserGroupIcon className="h-6 w-6 text-white" />}
                  title="Viewing party"
                  description="Organiser les déplacement aux événements à coûts amoindris"
                />
                <Benefits
                  icon={
                    <InformationCircleIcon className="h-6 w-6 text-white" />
                  }
                  title="Événements"
                  description="Organiser les déplacement aux événements à coûts amoindris"
                />
                <Benefits
                  icon={
                    <ArrowsPointingOutIcon className="h-6 w-6 text-white" />
                  }
                  title="Événements"
                  description="Organiser les déplacement aux événements à coûts amoindris"
                />
              </div>
            </div>
          </section>
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
                        <span>??</span>
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
          <AssoInfo />
        </div>
      </div>
    </div>
  );
}
