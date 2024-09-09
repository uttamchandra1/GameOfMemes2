const handleClick = (id, className, parentClass) => {
  const selected = Array.from(document.querySelectorAll(`.${parentClass} .${className}`)).map(
    (item) => item.id
  );
  document.getElementById(id).classList.add(className);

  selected.forEach((item) => {
    if (item !== id) {
      const nonActiveOption = document.getElementById(item);
      nonActiveOption.classList.remove(className);
    }
  });
};

const TagContainer = (option) => {
  const container = document.createElement("div");
  container.className = "tag-container";

  const upperContainer = document.createElement("div");
  upperContainer.className = "uppercontainer";

  const lowerContainer = document.createElement("div");
  lowerContainer.className = "lowercontainer";
  lowerContainer.style.background = option.mainContainerBg;
  lowerContainer.style.borderBottom = option.mainContainerBorderColor;
  lowerContainer.style.height = option.mainContainerHeight;

  const topicContainer = document.createElement("div");
  topicContainer.className = "topiccontainer";
  topicContainer.style.background = option.topicContainerBg;

  const topicElement = document.createElement("div");
  topicElement.className = "topic";
  topicElement.innerHTML = option.topic;

  topicContainer.appendChild(topicElement);

  const gifContainer = document.createElement("div");
  gifContainer.className = "gifcontainer";

  const catGif = document.createElement("img");
  catGif.className = "catgif";
  catGif.src = option.gif;

  gifContainer.appendChild(catGif);
  upperContainer.appendChild(topicContainer);
  upperContainer.appendChild(gifContainer);

  const innerContainer = document.createElement("div");
  innerContainer.className = "innerContainer";
  innerContainer.style.borderBottom = option.innerContainerBorderColor;
  innerContainer.style.height = option.innerContainerHeight;

  const tagsContainer = document.createElement("div");
  tagsContainer.className = "tagsContainer";

  const tagsWrapperOne = document.createElement("div");
  tagsWrapperOne.className = "tags-wrapper";
  
  option.tags.forEach((tag, index) => {
    const tagElement = document.createElement("span");
    tagElement.id = tag;
    tagElement.className = `tag-class ${index === 0 ? option.tagActiveClass : ''}`;
    tagElement.innerHTML = tag;
    
    tagElement.addEventListener("click", () => handleClick(tag, option.tagActiveClass, "tags-wrapper"));
    
    tagsWrapperOne.appendChild(tagElement);
  });

  tagsContainer.appendChild(tagsWrapperOne);
  innerContainer.appendChild(tagsContainer);
  lowerContainer.appendChild(innerContainer);
  container.appendChild(upperContainer);
  container.appendChild(lowerContainer);
  
  return container;
};

const OPTIONS_CONTAINER = () => {
  const optionsContainer = document.createElement("div");
  optionsContainer.className = "options-container";

  MAKE_MUSIC_OPTIONS.forEach((option) => {
    const tagContainer = TagContainer(option);
    optionsContainer.appendChild(tagContainer);
  });

  return optionsContainer;
};
