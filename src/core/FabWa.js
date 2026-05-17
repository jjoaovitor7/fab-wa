import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/base.css";

export default class FabWa {
  static init(options = {}) {
    this.config = {
      phone: options.phone,

      name: options.name,
      logo: options.logo || "",

      message: options.message || "Hi!",
      buttonText: options.buttonText,

      fabIcon: options.fabIcon || "bi bi-whatsapp",

      primaryColor: options.primaryColor || "#25D366",
      darkColor: options.darkColor || "#128C7E"
    };

    this.injectTheme();
    this.render();
    this.bind();
  }

  static isUrl(str) {
    return /^(https?:)?\/\//.test(str);
  }

  static injectTheme() {
    if (document.getElementById("fab-wa-style")) return;

    const style = document.createElement("style");
    style.id = "fab-wa-style";
    style.innerHTML = `.fab-wa {
  background: linear-gradient(135deg,
    ${this.config.primaryColor},
    ${this.config.darkColor}
  );
}

.fab-header {
  background: linear-gradient(135deg,
    ${this.config.primaryColor},
    ${this.config.darkColor}
  );
}

.fab-btn {
  background: ${this.config.primaryColor};
}`;
    document.head.appendChild(style);
  }

  static render() {
    const el = document.createElement("div");

    const avatar = this.config.logo
      ? `<img src="${this.config.logo}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
         <i class="bi-person"></i>`
      : `<i class="bi-person"></i>`;

    const fabContent = this.isUrl(this.config.fabIcon)
      ? `<img src="${this.config.fabIcon}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
         <i class="bi bi-whatsapp" style="display:none"></i>`
      : `<i class="${this.config.fabIcon}"></i>`;

    el.innerHTML = `<div class="fab-chat" id="fab-chat">
        <div class="fab-header">
          <div class="fab-avatar">
            ${avatar}
          </div>
          <div>${this.config.name}</div>
        </div>

        <div class="fab-body">
          <div class="fab-bubble">
            👋 Chat with us on WhatsApp
          </div>
        </div>

        <div class="fab-footer">
          <textarea class="fab-input" id="fab-msg">${this.config.message}</textarea>

          <button class="fab-btn" id="fab-send">
            ${this.config.buttonText}
          </button>
        </div>
      </div>

      <button class="fab-wa" id="fab-wa">
        ${fabContent}
      </button>`;
    document.body.appendChild(el);
  }

  static bind() {
    document.getElementById("fab-wa")
      .addEventListener("click", () => {
        document.getElementById("fab-chat").classList.toggle("show");
      });

    document.getElementById("fab-send")
      .addEventListener("click", () => {
        const msg = document.getElementById("fab-msg").value;
        window.open(
          `https://wa.me/${this.config.phone}?text=${encodeURIComponent(msg)}`,
          "_blank"
        );
      });
  }
}
