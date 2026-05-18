<h1 align="center">fab-wa</h1>

<p align="center">
  <em>Unofficial WhatsApp FAB</em>
</p>

---

[![fab-wa](https://nodei.co/npm/fab-wa.png)](https://nodei.co/npm/fab-wa/)

## Usage
```bash
pnpm i fab-wa  # or: npm i fab-wa
```
```html
<script type="module">
  import FabWa from "https://cdn.jsdelivr.net/npm/fab-wa@latest";
  FabWa.init({
    phone: "5579999999999",
    name: "My Site",
    message: "Hi! I'd like to know more.",
    buttonText: "Start chat",
    fabIcon: "bi bi-whatsapp",
    primaryColor: "#25D366"
  });
</script>
```

## Options
| Option         | Type     | Default            | Description                              |
|----------------|----------|--------------------|------------------------------------------|
| `phone`        | `string` | -                  | WhatsApp phone number (required)         |
| `name`         | `string` | —                  | Name in chat header (required)           |
| `logo`         | `string` | `""`               | Avatar image URL (fallback: `bi-person`) |
| `message`      | `string` | `"Hi!"`            | Pre-filled message                       |
| `buttonText`   | `string` | —                  | Send button text (required)              |
| `fabIcon`      | `string` | `"bi bi-whatsapp"` | Bootstrap Icons class or image URL       |
| `primaryColor` | `string` | `"#25D366"`      | Primary color                            |
| `darkColor`    | `string` | `"#128C7E"`      | Dark color (gradient)                    |

