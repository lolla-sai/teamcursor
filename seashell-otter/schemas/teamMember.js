export default {
    name: "teamMember",
    type: "document",
    title: "Team Member",
    fields: [
        {
            name: "bio",
            type: "string",
            title: "Bio",
        },
        {
            name: "coverImage",
            type: "image",
            title: "coverImage",
        },
        {
            name: "instagram",
            type: "url",
            title: "Instagram Profile URL",
        },
        {
            name: "linkedIn",
            type: "url",
            title: "LinkedIn Profile URL",
        },
        {
            name: "email",
            type: "email",
            title: "Mail",
        },
    ],
};
