import Image from "next/image";

export default function ImageComp({ path, author, link, style }: Props) {
  return (
    <>
      <div className="relative">
        <Image
          src={path}
          alt="hero image"
          width={1920}
          height={1080}
          className={style}
        />
        <a
          className="hover:brightness-125 absolute bottom-2 left-2 bg-blue-asso text-white px-2 py-1 text-sm rounded"
          aria-disabled="false"
          target="_blank"
          rel="noopener noreferrer"
          href={link}
        >
          {author}
        </a>
      </div>
    </>
  );
}

export type Props = {
  path: string;
  author: string;
  link: string;
  style: string;
};
