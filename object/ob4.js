function extractUserData(user) {
    const {
        id: userId,
        profile: {
            name: fullName,
            email,
            address: {
                street,
                city,
                zipCode
            }
        },
        preferences: {
            theme,
            language
        }
    } = user;

    if (
        userId === undefined ||
        !fullName ||
        !email ||
        !street ||
        !city ||
        !zipCode ||
        !theme ||
        !language
    ) {
        throw new Error("Data user tidak lengkap");
    }

    return {
        userId,
        fullName,
        email,
        location: `${street}, ${city} ${zipCode}`,
        settings: {
            theme,
            language
        }
    };
}