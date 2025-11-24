import img1 from "../../../assets/image/about.png"
import img2 from "../../../assets/image/about-2.png"
import img3 from "../../../assets/image/about-3.png"
import SectionHeading from "../../../Components/SharedComponents/SectionHeading";

const AboutHero = () => {
    return (
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-24 my-12">
            <div className="flex flex-wrap items-center ">
                <div className="flex items-center gap-4 w-full md:w-1/2">
                    <img className="w-1/2 rounded-md" src={img1} alt="" />
                    <div className="flex flex-col gap-4 w-1/2">
                        <img className="w-full rounded-md" src={img2} alt="" />
                        <img className="w-full rounded-md " src={img3} alt="" />
                    </div>
                </div>
                <div className="w-full md:w-1/2 md:pl-12 mt-8 md:mt-0">
                    <SectionHeading heading={"Who "} colorHeading={"We Are?"}></SectionHeading>
                    <h3 className="uppercase text-lg sm:text-xl font-semibold  my-4 text-gray-600">We’re here to serve only the best products for you. Enriching your homes with the best essentials.</h3>
                    <p className="tp">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        <br />
                        Lorem Ipsum has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        <br />
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutHero;