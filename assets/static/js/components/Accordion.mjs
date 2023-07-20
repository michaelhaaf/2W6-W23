import { DOM } from "../utilities/index.js";

const Accordion = (buttonNode) => {

  const toggleExpand = () => {
    DOM.toggleAttribute(buttonNode, "aria-expanded");
  };
  buttonNode.addEventListener("click", toggleExpand.bind(this));

};

export default Accordion;
