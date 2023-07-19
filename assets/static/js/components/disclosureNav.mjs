import { dom } from "../utilities/index.js";

/*
 *   This content is adapted from the www.w3.org Disclosure Navigation pattern.
 *
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   Supplemental JS for the disclosure menu keyboard behavior
 */

const disclosureNav = (baseNode) => {
  let _openIndex = null;
  let _useArrowKeys = true;
  const _baseNode = baseNode;
  const _controlledNodes = [];
  const _topLevelNodes = [
    ..._baseNode.querySelectorAll(
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
    let menuContainsFocus = _baseNode.contains(event.relatedTarget);
    if (!menuContainsFocus && _openIndex !== null) {
      toggleExpand(_openIndex, false);
    }
  };

  const onButtonClick = (event) => {
    let button = event.target;
    let buttonIndex = _topLevelNodes.indexOf(button);
    let buttonExpanded = button.getAttribute("aria-expanded") === "true";
    toggleExpand(buttonIndex, !buttonExpanded);
  };

  const onButtonKeyDown = (event) => {
    let targetButtonIndex = _topLevelNodes.indexOf(document.activeElement);
    if (event.key === "Escape") {
      toggleExpand(_openIndex, false);
    } else if (
      _useArrowKeys &&
      _openIndex === targetButtonIndex &&
      event.key === "ArrowDown"
    ) {
      event.preventDefault();
      _controlledNodes[_openIndex].querySelector("a").focus();
    } else if (_useArrowKeys) {
      controlFocusByKey(event, _topLevelNodes, targetButtonIndex);
    }
  };

  const onLinkKeyDown = (event) => {
    let targetLinkIndex = _topLevelNodes.indexOf(document.activeElement);
    if (_useArrowKeys) {
      controlFocusByKey(event, _topLevelNodes, targetLinkIndex);
    }
  };

  const onMenuKeyDown = (event) => {
    if (_openIndex === null) {
      return;
    }
    let menuLinks = Array.prototype.slice.call(
      _controlledNodes[_openIndex].querySelectorAll("a"),
    );
    let currentIndex = menuLinks.indexOf(document.activeElement);
    // close on escape
    if (event.key === "Escape") {
      _topLevelNodes[_openIndex].focus();
      toggleExpand(_openIndex, false);
    }
    // handle arrow key navigation within menu links, if set
    else if (_useArrowKeys) {
      controlFocusByKey(event, menuLinks, currentIndex);
    }
  };

  const toggleExpand = (index, expanded) => {
    // close open menu, if applicable
    if (_openIndex !== index) {
      toggleExpand(_openIndex, false);
    }
    // handle menu at called index
    if (_topLevelNodes[index]) {
      _openIndex = expanded ? index : null;
      _topLevelNodes[index].setAttribute("aria-expanded", expanded);
      toggleMenu(_controlledNodes[index], expanded);
    }
  };

  const toggleMenu = (domNode, show) => {
    show ? dom.show(domNode) : dom.hide(domNode);
  };

  const updateKeyControls = (useArrowKeys) => {
    _useArrowKeys = useArrowKeys;
  };

  const _bindEvents = () => {
    _baseNode.addEventListener("focusout", onBlur.bind(this));
    _topLevelNodes.forEach((node) => {
      // handle button + menu
      if (
        node.tagName.toLowerCase() === "button" &&
        node.hasAttribute("aria-controls")
      ) {
        const menu = node.parentNode.querySelector("ul");
        if (menu) {
          // save ref controlled menu
          _controlledNodes.push(menu);
          // collapse menus
          node.setAttribute("aria-expanded", "false");
          toggleMenu(menu, false);
          // attach event listeners
          menu.addEventListener("keydown", onMenuKeyDown.bind(this));
          node.addEventListener("click", onButtonClick.bind(this));
          node.addEventListener("keydown", onButtonKeyDown.bind(this));
        }
      }
      // handle links
      else {
        _controlledNodes.push(null);
        node.addEventListener("keydown", onLinkKeyDown.bind(this));
      }
    });
  };

  _bindEvents();

  return { updateKeyControls };
};

export { disclosureNav };
