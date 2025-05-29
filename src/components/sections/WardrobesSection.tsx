import Gallery from "../Gallery";
import sections from "@/data/sections.json";
import data from "@/data/kitchens.json";

const WardrobesSection = () => {
  const textStyles =
    "mr-6 ml-20 md:ml-auto md:mr-10 xl:mr-24 2xl:mr-48 sm:max-w-[600px] md:max-w-[680px] md:text-base lg:text-xl text-white/60 ";
  return (
    <section
      id="wardrobes"
      className="bg-mainBcg py-6 sm:py-24 w-full justify-center items-center sm:items-end"
    >
      <h2 className="pl-48 mb-10 text-white/60 font-bold text-4xl leading-none font-bebas ">
        {sections.wardrobes.title}
      </h2>
      <div className="mx-auto px-6">
        <Gallery data={data} />
      </div>
      <div className={textStyles}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In est facilis
        cum sequi, necessitatibus deserunt molestias, tenetur incidunt vitae
        explicabo labore dicta consectetur, hic voluptates animi? Modi molestiae
        deleniti suscipit voluptate inventore numquam fuga rerum? Illo velit
        iste assumenda amet. Nesciunt non, obcaecati, quam ipsam itaque, vero
        accusantium enim magni velit nemo in distinctio saepe. Soluta illum
        possimus, ab molestiae dolor odit provident porro cum repellendus qui
        iusto fugiat impedit pariatur accusamus aperiam. Nihil repellat iusto
        dignissimos praesentium pariatur. Possimus aliquid sunt, neque vel
        similique quo inventore non quae qui mollitia nihil odit deserunt amet,
        nostrum cum reiciendis, porro quis?
      </div>
    </section>
  );
};

export default WardrobesSection;
