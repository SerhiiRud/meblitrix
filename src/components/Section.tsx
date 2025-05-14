import Gallery from "./Gallery";
import data from "@/data/kitchens.json";

const Section = () => {
  return (
    <div className="w-[1200px] h-[600px] outline-red-700 outline-dotted">
      <Gallery data={data} />
    </div>
  );
};

export default Section;
