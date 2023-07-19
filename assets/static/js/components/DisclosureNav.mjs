import { DOM } from "../utilities/index.js";

/*
 *   This content is adapted from the www.w3.org Disclosure Navigation pattern.
 *
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   Supplemental JS for the disclosure menu keyboard behavior
 */

const DisclosureNav = (baseNode) => {
  let openIndex = null;
  const controlledNodes = [];
  const topLevelNodes = [
    ...baseNode.querySelectorAll(
      "a[role=menuitem], button[aria-controls][aria-expanded]",
    ),
  ];

  const controlFocusByKey = (keyboardEvent, nodeList, currentIndex) => {
    switch (keyboardEvent.key) {
      case "ArrowUp":
      case "ArrowLeft":
        keyboardEvent.preventDefault();
        if (currentIndex > -1) {
          let prevIndex = Math.max(0, currentIndex - 1);
          nodeList[prevIndex].focus();
        }
        break;
      case "ArrowDown":
      case "ArrowRight":
        keyboardEvent.preventDefault();
        if (currentIndex > -1) {
          let nextIndex = Math.min(nodeList.length - 1, currentIndex + 1);
          nodeList[nextIndex].focus();
        }
        break;
      case "Home":
        keyboardEvent.preventDefault();
        nodeList[0].focus();
        break;
      case "End":
        keyboardEvent.preventDefault();
        nodeList[nodeList.length - 1].focus();
        break;
    }
  };

  const onBlur = (event) => {
    let menuContainsFocus = baseNode.contains(event.relatedTarget);
    if (!menuContainsFocus && openIndex !== null) {
      toggleExpand(openIndex, false);
    }
  };

  const onButtonClick = (event) => {
    let button = event.target;
    let buttonIndex = topLevelNodes.indexOf(button);
    let buttonExpanded = button.getAttribute("aria-expanded") === "true";
    toggleExpand(buttonIndex, !buttonExpanded);
  };

  const onButtonKeyDown = (event) => {
    let targetButtonIndex = topLevelNodes.indexOf(document.activeElement);
    if (event.key === "Escape") {
      toggleExpand(openIndex, false);
    } else if (openIndex === targetButtonIndex && event.key === "ArrowDown") {
      event.preventDefault();
      controlledNodes[openIndex].querySelector("a").focus();
    } else {
      controlFocusByKey(event, topLevelNodes, targetButtonIndex);
    }
  };

  const onLinkKeyDown = (event) => {
    let targetLinkIndex = topLevelNodes.indexOf(document.activeElement);
    controlFocusByKey(event, topLevelNodes, targetLinkIndex);
  };

  const onMenuKeyDown = (event) => {
    if (openIndex === null) {
      return;
    }
    let menuLinks = Array.prototype.slice.call(
      controlledNodes[openIndex].querySelectorAll("a"),
    );
    let currentIndex = menuLinks.indexOf(document.activeElement);
    // close on escape
    if (event.key === "Escape") {
      topLevelNodes[openIndex].focus();
      toggleExpand(openIndex, false);
    }
    // handle arrow key navigation within menu links, if set
    else {
      controlFocusByKey(event, menuLinks, currentIndex);
    }
  };

  const toggleExpand = (index, expanded) => {
    if (openIndex !== index) {
      toggleExpand(openIndex, false);
    }
    if (topLevelNodes[index]) {
      openIndex = expanded ? index : null;
      topLevelNodes[index].setAttribute("aria-expanded", expanded);
      toggleMenu(controlledNodes[index], expanded);
    }
  };

  const toggleMenu = (domNode, show) => {
    show ? DOM.show(domNode) : DOM.hide(domNode);
  };

  const bindEvents = () => {
    baseNode.addEventListener("focusout", onBlur.bind(this));
    topLevelNodes.forEach((node) => {
      if (
        node.tagName.toLowerCase() === "button" &&
        node.hasAttribute("aria-controls")
      ) {
        const menu = node.parentNode.querySelector("ul");
        if (menu) {
          controlledNodes.push(menu);
          node.setAttribute("aria-expanded", "false");
          toggleMenu(menu, false);
          menu.addEventListener("keydown", onMenuKeyDown.bind(this));
          node.addEventListener("click", onButtonClick.bind(this));
          node.addEventListener("keydown", onButtonKeyDown.bind(this));
        }
      }
      // handle links
      else {
        controlledNodes.push(null);
        node.addEventListener("keydown", onLinkKeyDown.bind(this));
      }
    });
  };

  bindEvents();
};

export default DisclosureNav;
