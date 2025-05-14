import Image from "next/image";

export type CardProps = {
  title: string;
  image: string;
};

const Card: React.FC<CardProps> = ({ title, image }) => {
  return (
    <div className="p-2 hover:scale-103 transition-all duration-350 ease-in-out ">
      <Image
        src={image}
        alt={title}
        width={1024}
        height={683}
        className="shadow-lg shadow-slate-950 rounded-lg"
      />
      <div className="ml-10 text-white/60 text-2xl">{title}</div>
    </div>
  );
};
export default Card;
