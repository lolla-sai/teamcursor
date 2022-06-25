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
                    className={`flex items-center space-x-10 ${
                        reverse ? "flex-row-reverse space-x-reverse" : ""
                    }`}
                >
                    <div
                        className="basis-1/2 max-w-xl mx-auto my-4 block"
                        data-aos="fade"
                    >
                        <Image src={imageLink} width={width} height={height} />
                    </div>
                    <div
                        className={`basis-1/2 ${
                            reverse ? "text-left" : "text-right"
                        }`}
                    >
                        <h3 className="text-5xl font-bold mb-12">{heading}</h3>
                        <p className="text-lg max-w-prose my-4">{textBody}</p>
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
