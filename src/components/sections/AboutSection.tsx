//import Image from "next/image";
import sections from "@/data/sections.json";

const AboutSection = () => {
  return (
    <section
      id="about"
      className=" bg-mainBcg py-6 sm:py-24 w-full justify-center items-center sm:items-end"
    >
      <h2 className="pl-48 mb-10 text-white/60 font-bold text-4xl leading-none font-bebas ">
        {sections.about.title}
      </h2>
      <div className="flex justify-center gap-6 mx-auto w-[1500px]">
        {/* <Image
          src="/images/about.jpg"
          alt="про нас"
          width={800}
          height={337}
          className="shadow-lg shadow-slate-950 rounded-lg"
        /> */}
        <div className="ml-auto mr-48 w-[700px] text-xl text-white/60 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In est
          facilis cum sequi, necessitatibus deserunt molestias, tenetur incidunt
          vitae explicabo labore dicta consectetur, hic voluptates animi? Modi
          molestiae deleniti suscipit voluptate inventore numquam fuga rerum?
          Illo velit iste assumenda amet. Nesciunt non, obcaecati, quam ipsam
          itaque, vero accusantium enim magni velit nemo in distinctio saepe.
          Soluta illum possimus, ab molestiae dolor odit provident porro cum
          repellendus qui iusto fugiat impedit pariatur accusamus aperiam. Nihil
          repellat iusto dignissimos praesentium pariatur. Possimus aliquid
          sunt, neque vel similique quo inventore non quae qui mollitia nihil
          odit deserunt amet, nostrum cum reiciendis, porro quis?
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
