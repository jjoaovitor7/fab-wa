import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/base.css";

function isUrl(str) {
  return /^(https?:)?\/\//.test(str);
}

function buildThemeCSS(config) {
  return `
.fab-wa {
  background: linear-gradient(135deg, ${config.primaryColor}, ${config.darkColor});
}
.fab-header {
  background: linear-gradient(135deg, ${config.primaryColor}, ${config.darkColor});
}
.fab-btn {
  background: ${config.primaryColor};
}`;
}

function buildHTML(config) {
  let avatar;
  if (isUrl(config.logo)) {
    avatar = `<img src="${config.logo}" class="fab-img" />
       <i class="bi-person d-none"></i>`;
  } else {
    avatar = `<i class="${config.logo}"></i>`;
  }

  let fabContent;
  if (isUrl(config.fabIcon)) {
    fabContent = `<img src="${config.fabIcon}" class="fab-img" />
       <i class="bi bi-whatsapp d-none"></i>`;
  } else {
    fabContent = `<i class="${config.fabIcon}"></i>`;
  }

  return `
    <div class="fab-chat" id="fab-chat">
      <div class="fab-header">
        <div class="fab-avatar">${avatar}</div>
        <div>${config.name}</div>
      </div>
      <div class="fab-body">
        <div class="fab-bubble">${config.greeting}</div>
        <textarea class="fab-input" id="fab-msg">${config.message}</textarea>
        <a class="fab-btn" id="fab-send" target="_blank">${config.buttonText}</a>
      </div>
    </div>
    <button class="fab-wa" id="fab-wa">${fabContent}</button>`;
}

function bindEvents(config, root = document) {
  const chat = root.querySelector("#fab-chat");
  const wa = root.querySelector("#fab-wa");
  const send = root.querySelector("#fab-send");
  const msg = root.querySelector("#fab-msg");

  wa.addEventListener("click", () => chat.classList.toggle("show"));
  send.addEventListener("click", e => {
    e.currentTarget.href = `https://wa.me/${config.phone}?text=${encodeURIComponent(msg.value)}`;
  });

  root.querySelectorAll(".fab-img").forEach(img => {
    img.addEventListener("error", () => {
      img.classList.add("d-none");
      const fb = img.nextElementSibling;
      if (fb) {
        fb.classList.remove("d-none");
      }
    });
  });
}

export function buildConfig(options = {}) {
  return {
    phone:        options.phone        || "",
    name:         options.name         || "",
    logo:         options.logo         || "bi bi-person",
    message:      options.message      || "Hi!",
    buttonText:   options.buttonText   || "Start chat",
    greeting:     options.greeting     || "",
    fabIcon:      options.fabIcon      || "bi bi-whatsapp",
    primaryColor: options.primaryColor || "#25D366",
    darkColor:    options.darkColor    || "#128C7E",
  };
}

export function injectTheme(config) {
  if (document.getElementById("fab-wa-style")) {
    return;
  }
  const style = document.createElement("style");
  style.id = "fab-wa-style";
  style.innerHTML = buildThemeCSS(config);
  document.head.appendChild(style);
}

export { buildThemeCSS, buildHTML, bindEvents };

const FabWa = {
  init(options = {}) {
    const config = buildConfig(options);
    injectTheme(config);
    const el = document.createElement("div");
    el.innerHTML = buildHTML(config);
    document.body.appendChild(el);
    bindEvents(config);
  },
};

export default FabWa;
