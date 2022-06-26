export default {
    name: "navLink",
    type: "document",
    title: "Nav Link",
    fields: [
        {
            name: "link",
            type: "string",
            title: "URL",
        },
        {
            name: "linkText",
            type: "string",
            title: "Link Text",
        },
        {
            name: "rank",
            type: "number",
            title: "Rank (lowest rank means appears first)",
        },
    ],
};
