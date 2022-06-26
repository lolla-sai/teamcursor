import Head from "next/head";
import Header from "../../components/Header";
import TeamMember from "../../components/TeamMember";
import CopyrightFooter from "../../components/CopyrightFooter";

import { client } from "../_app";

function TeamHome({ members, navLinks }) {
    console.log(members);
    return (
        <>
            <Head>
                <title>Team - teamcursor</title>
                <meta name="description" content="Cursor Council 2022" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header transparentOnTop={false} navLinks={navLinks} />
            <div className="pt-24 min-h-screen">
                <h1 className="md:text-6xl text-5xl font-bold text-gray-800 text-center mt-4 mb-4">
                    Meet the Team
                </h1>
                <p className="md:text-2xl text-xl font-light text-center mb-12">
                    The team is what teamcursor is made up of. Presenting before
                    you.... CURSOR 2022
                </p>
                <div className="mx-8 mb-8 flex gap-4 flex-wrap justify-center">
                    {members.map((member) => (
                        <TeamMember {...member} key={member.bio} />
                    ))}
                </div>
            </div>
            <CopyrightFooter />
        </>
    );
}

export default TeamHome;

export async function getStaticProps() {
    const members = await client.fetch(
        '*[_type == "teamMember"] { bio, instagram, linkedIn, email, "image": {"imageLink": coverImage.asset->url, "width": coverImage.asset->metadata.dimensions.width, "height": coverImage.asset->metadata.dimensions.height} }'
    );

    let navLinks = await client.fetch(
        "*[_type == 'navLink'] | order(rank) {link, linkText}"
    );

    return {
        props: {
            members,
            navLinks,
        },
    };
}
