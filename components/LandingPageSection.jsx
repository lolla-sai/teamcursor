import Image from "next/image";
import SectionHeader from "./SectionHeader";

function LandingPageSection({
    textContent: { title, heading, textBody },
    link: { linkHref, linkText },
    image: { imageLink, width, height },
    reverse = false,
}) {
    return (
        <section className={`px-4 py-8 ${reverse ? "bg-gray-50" : "bg-white"}`}>
            <div className="max-w-7xl mx-auto">
                <SectionHeader text={title} />
                <div
                    className={`lg:flex lg:items-center lg:space-x-10 ${
                        reverse ? "lg:flex-row-reverse lg:space-x-reverse" : ""
                    }`}
                >
                    <div
                        className="basis-1/2 max-w-xl lg:mx-0 mx-auto my-4 block text-center mb-8 lg:mb-0"
                        data-aos="fade"
                    >
                        <Image src={imageLink} width={width} height={height} />
                    </div>
                    <div
                        className={`lg:basis-1/2 text-center ${
                            reverse ? "lg:text-left" : "lg:text-right"
                        }`}
                    >
                        <h3 className="lg:text-5xl text-xl font-bold mb-4 lg:mb-12">
                            {heading}
                        </h3>
                        <p className="lg:text-lg max-w-prose mx-auto my-4">
                            {textBody}
                        </p>
                        <a
                            href={linkHref}
                            className="text-blue-600 inline-block my-2"
                            target="_blank"
                        >
                            {linkText}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LandingPageSection;
