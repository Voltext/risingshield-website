export default function Benefits({ icon, title, description }: Props) {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
      <div className="mb-3 mx-auto bg-or-asso w-12 h-12 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <p className="text-rhino-700 text-sm font-medium text-center mb-2">
        {title}
      </p>
      <p className="text-rhino-300 text-sm text-center">{description}</p>
    </div>
  );
}

export type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
};
