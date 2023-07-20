// https://garden.bradwoods.io/notes/javascript/web-api/intersection-observer/table-of-contents
const SectionObserver = (sectionNode, tocNode) => {
  const links = tocNode.querySelectorAll("a");
  const sections = sectionNode.querySelectorAll("section[data-number]");
  const options = {
    root: null,
    rootMargin: "-50% 0px",
    threshold: 0,
  };
  const HIGHLIGHT_CLASS = "highlight";
  const tableOfContentsMap = [...sections].reduce(
    (acc, section, i) => ({
      ...acc,
      [section.id]: links[i],
    }),
    {},
  );

  let selectedId = sections[0].id;

  const removeHighlight = (id) => {
    tableOfContentsMap[id].classList.remove(HIGHLIGHT_CLASS);
  };
  const addHighlight = (id) => {
    tableOfContentsMap[id].classList.add(HIGHLIGHT_CLASS);
  };

  const onObserve = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const { id } = entry.target;
        removeHighlight(selectedId);
        addHighlight(id);
        selectedId = id;
      }
    });
  };

  const init = () => {
    const observer = new IntersectionObserver(onObserve, options);
    sections.forEach((section) => {
      observer.observe(section);
    });
  };

  return { init };
};

export default SectionObserver;
