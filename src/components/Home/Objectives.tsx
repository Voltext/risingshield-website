import {
  ArrowsPointingOutIcon,
  InformationCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Benefits from "./Benefits";

export default function Objectives() {
  return (
    <section className="relative overflow-hidden py-6">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap">
          <Benefits
            icon={<ArrowsPointingOutIcon className="h-6 w-6 text-white" />}
            title="Événements"
            description="Organiser les déplacement aux événements à coûts amoindris"
          />
          <Benefits
            icon={<UserGroupIcon className="h-6 w-6 text-white" />}
            title="Viewing party"
            description="Organiser les déplacement aux événements à coûts amoindris"
          />
          <Benefits
            icon={<InformationCircleIcon className="h-6 w-6 text-white" />}
            title="Événements"
            description="Organiser les déplacement aux événements à coûts amoindris"
          />
          <Benefits
            icon={<ArrowsPointingOutIcon className="h-6 w-6 text-white" />}
            title="Événements"
            description="Organiser les déplacement aux événements à coûts amoindris"
          />
        </div>
      </div>
    </section>
  );
}
