import {
  buildConfig,
  buildThemeCSS,
  buildHTML,
  injectTheme,
  bindEvents,
} from "./FabWa.js";

class FabWaElement extends HTMLElement {
  connectedCallback() {
    this.#render();
  }

  #getConfig() {
    return buildConfig({
      phone:        this.getAttribute("phone"),
      name:         this.getAttribute("name"),
      logo:         this.getAttribute("logo"),
      message:      this.getAttribute("message"),
      buttonText:   this.getAttribute("button-text"),
      greeting:     this.getAttribute("greeting"),
      fabIcon:      this.getAttribute("fab-icon"),
      primaryColor: this.getAttribute("primary-color"),
      darkColor:    this.getAttribute("dark-color"),
    });
  }

  #render() {
    const config = this.#getConfig();
    injectTheme(config);
    this.innerHTML = buildHTML(config);
    bindEvents(config, this);
  }
}

if (!customElements.get("fab-wa")) {
  customElements.define("fab-wa", FabWaElement);
}

export { FabWaElement };
