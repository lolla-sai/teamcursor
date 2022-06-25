import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Header from "../components/Header";
import coverPic from "../public/static/DSC_6152.jpg";
import newsClip from "../public/static/The GEC Times.png";
import sponsorsPic from "../public/static/Sponsors/Sponsors pic.png";

import homeStyles from "../styles/Home.module.css";
import SectionHeader from "../components/SectionHeader";
import LandingPageSection from "../components/landingPageSection";
import { InstagramEmbed } from "react-social-media-embed";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>Home - teamcursor</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <section
                id="sect1"
                className="min-h-screen w-full flex items-center p-4 relative"
            >
                <Image
                    src={coverPic}
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                    className={`brightness-50 ${homeStyles.heroImage}`}
                />
                <h1 className="font-bold xl:text-9xl text-7xl text-gray-50 lg:w-1/2 w-auto mx-auto text-center drop-shadow-lg">
                    The best of minds, are born here
                </h1>
            </section>

            <LandingPageSection
                textContent={{
                    title: "Winners of Tandav Xii",
                    heading:
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    textBody:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eius laborum quis in, nostrum, ullam id, officiis odio aliquam dolorem doloribus dolor! Repudiandae eos rerum magni cupiditate, esse iure! Quibusdam tempore suscipit quam dolorem praesentium omnis excepturi. Unde rerum facilis, alias ducimus fugiat corrupti neque maiores tenetur quaerat distinctio pariatur!",
                }}
                link={{
                    linkHref:
                        "https://photos.google.com/share/AF1QipNYb472z2MXgzwBvJ6YcOwfNFvePpSpeNajmDNA2SljHVJP61VRFhgPn8xjuprEYQ?key=T28wZ1Etb3pDOFdhN2E0YU9lT05sYXEyeTc5WXV3",
                    linkText: "View the Tandav Photos here",
                }}
                image={{
                    imageLink:
                        "https://i.picsum.photos/id/328/1080/920.jpg?hmac=XOQxL3Y89_v5Yr_TIrzH7hOeJsUFv6beb7qGm3ycmsE",
                    width: 1080,
                    height: 920,
                }}
            />

            <LandingPageSection
                textContent={{
                    title: "Technix 2022",
                    heading:
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    textBody:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eius laborum quis in, nostrum, ullam id, officiis odio aliquam dolorem doloribus dolor! Repudiandae eos rerum magni cupiditate, esse iure! Quibusdam tempore suscipit quam dolorem praesentium omnis excepturi. Unde rerum facilis, alias ducimus fugiat corrupti neque maiores tenetur quaerat distinctio pariatur!",
                }}
                link={{
                    linkHref: "https://photos.app.goo.gl/ThKMyiKfK2S5kVBP7",
                    linkText: "View the Technix Photos here",
                }}
                image={{
                    imageLink:
                        "https://lh3.googleusercontent.com/iOtXDGjhYUk8pS_m7m5SxSDX4_1BT9Hm0dSLVsr8d_TVPRmlz5P2424hpsU_GOhdLOEPMzXZYr9uT4-J6wkz0uIrChN8XTNKciKzj5pZXxteaICAplt-uqAIsZzT9NWjRBdAZYXh6w=w2400",
                    width: 1080,
                    height: 720,
                }}
                reverse={true}
            />

            <LandingPageSection
                textContent={{
                    title: "Our Sponsors",
                    heading:
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    textBody:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eius laborum quis in, nostrum, ullam id, officiis odio aliquam dolorem doloribus dolor! Repudiandae eos rerum magni cupiditate, esse iure! Quibusdam tempore suscipit quam dolorem praesentium omnis excepturi. Unde rerum facilis, alias ducimus fugiat corrupti neque maiores tenetur quaerat distinctio pariatur!",
                }}
                link={{
                    linkHref: "./sponsors",
                    linkText: "Know more about our sponsors",
                }}
                image={{
                    imageLink:
                        "https://i.picsum.photos/id/705/500/500.jpg?hmac=8LnfL2R-2-z-3SsB0yQU69qZ8hFqb7w8th6KuHaTOOQ",
                    width: 500,
                    height: 500,
                }}
            />

            <section id="sect5" className="bg-gray-50 px-4 py-8">
                <div className="p-4 max-w-7xl mx-auto">
                    <SectionHeader text="Follow @teamcursor" />
                    <div className="flex items-center gap-8 overflow-x-auto scrollbar-hide md:scrollbar-default scrollbar-thin scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-500 p-4">
                        {[
                            "https://www.instagram.com/p/Cb1lqDNj_SJ/?utm_source=ig_web_copy_link",
                            "https://www.instagram.com/p/CeTtu8ath12/?utm_source=ig_web_copy_link",
                            "https://www.instagram.com/p/CdzyWevJsga/?utm_source=ig_web_copy_link",
                            "https://www.instagram.com/reel/CdtBg1sD5CN/?utm_source=ig_web_copy_link",
                            "https://www.instagram.com/reel/CdTieYwJL7k/?utm_source=ig_web_copy_link",
                        ].map((postLink) => (
                            <div className="shrink-0">
                                <InstagramEmbed
                                    url={postLink}
                                    key={postLink}
                                    width={328}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
