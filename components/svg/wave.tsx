import Image from "next/image";

export const Wave = () => {
  return (
    <Image
      src="images/wave.svg"
      alt="wave"
      width={1920}
      height={1080}
      layout="absolute"
      className="absolute top-0 left-0 w-full z-0 xs:hidden sm:block md:hidden lg:block xl:block"
    />
  );
};
