// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import landingSection from "./landingSection";
import instaLinks from "./instaLink";
import hero from "./hero";
import teamMember from "./teamMember";
import navLink from "./navLink";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    name: "default",
    types: schemaTypes.concat([
        landingSection,
        instaLinks,
        hero,
        teamMember,
        navLink,
    ]),
});
