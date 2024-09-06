const CreateTags = (music) => {

    const tagdiv = document.createElement("div");
    tagdiv.className = "tags-container";

    // Clean up the string by removing unwanted characters and splitting by specific delimiters
    const cleanedString = music.e.replace("(1)", "")
                                .replace(".mp3", "")
                                .replace(/[^\w-]+/g, '') // Remove any special characters except hyphens
                                .split(/(?:genre|mood|tempo)[-\u02c7]+/); // Split by genre-, mood-, tempo- tags

    // Filter out empty tags and add them to the container
    cleanedString.filter(tag => tag).forEach(tag => {
        const span = document.createElement("span");
        span.className = "tag";
        const capitalizedTag = tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase();
        span.innerHTML = capitalizedTag;
        span.style.border = `1px solid ${getRandomColorFromList()}`
        tagdiv.appendChild(span);
    });

    return tagdiv;
}
