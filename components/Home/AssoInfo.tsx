import ImageComp from "../Utils/Image";

export default function AssoInfo() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-asso">
                Rejoins un groupe de passionnés
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Partage la même passion
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Un texte explicatif
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none"></dl>
            </div>
          </div>
          <ImageComp
            path="/images/Rising-shield.jpg"
            author="@YvanOchizuto"
            link="https://twitter.com/YvanOchizuto"
            style=""
          />
        </div>
      </div>
    </div>
  );
}
