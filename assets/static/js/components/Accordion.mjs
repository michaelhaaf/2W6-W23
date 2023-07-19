import { DOM } from "../utilities/index.js";

/*
 *   This content is adapted from the www.w3.org Disclosure Navigation pattern.
 *
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   File:   disclosure-button.js
 *
 *   Desc:   Disclosure button widget that implements ARIA Authoring Best Practices
 */

const Accordion = (buttonNode) => {
  const _buttonNode = buttonNode;
  const _contentId = _buttonNode.getAttribute("aria-controls");
  const _contentNode = document.getElementById(_contentId);

  const toggleExpand = () => {
    DOM.toggleAttribute(_contentNode, "aria-expanded");
  };

  const addFocus = () => {
    _buttonNode.classList.add("focus");
  };

  const removeFocus = () => {
    _buttonNode.classList.remove("focus");
  };

  _buttonNode.addEventListener("click", toggleExpand.bind(this));
  _buttonNode.addEventListener("focus", addFocus.bind(this));
  _buttonNode.addEventListener("blur", removeFocus.bind(this));
};

export default Accordion;
