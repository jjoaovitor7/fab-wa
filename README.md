<h1 align="center">fab-wa</h1>

<p align="center">
  <em>Unofficial WhatsApp FAB</em>
</p>

---

## Install
[![fab-wa](https://nodei.co/npm/fab-wa.png)](https://nodei.co/npm/fab-wa/)
```bash
# or pnpm i fab-wa
```
---

## Usage
### Vanilla JS
```html
<script type="module"
  import FabWa from "https://cdn.jsdelivr.net/npm/fab-wa@latest";
  FabWa.init({
    phone:        "5579999999999",
    name:         "fab-wa",
    message:      "Hi!",
    buttonText:   "Start chat",
    greeting:     "Chat with us on WhatsApp",
    fabIcon:      "bi bi-whatsapp",
    primaryColor: "#25D366",
    darkColor:    "#128C7E",
  });
</script>
```
---

### Angular
```ts
// main.ts
import "fab-wa";

// app/app.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // NG8001
  bootstrap: [AppComponent],
})
export class AppModule {}
```

```html
<!-- app/app.component.html -->
<fab-wa
  phone="5579999999999"
  name="fab-wa"
  greeting="Chat with us on WhatsApp"
  button-text="Start chat"
  message="Hi!"
  primary-color="#25D366"
  dark-color="#128C7E"></fab-wa>
```

```ts
// app/app.component.ts
import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  `,
})
export class AppComponent {}
```

### Web Component
```html
<script type="module">
  import "https://cdn.jsdelivr.net/npm/fab-wa@latest";
</script>

<fab-wa
  phone="5579999999999"
  name="fab-wa"
  greeting="Chat with us on WhatsApp"
  button-text="Start chat"
  message="Hi!"
  primary-color="#25D366"
  dark-color="#128C7E"></fab-wa>
```
---

## Options
| `FabWa.init()`  | HTML Attribute      | Type   | Default             | Description                                  |
|-----------------|---------------------|--------|---------------------|----------------------------------------------|
| `phone`         | `phone`             | string | **required**        | WhatsApp phone number (with country code)    |
| `name`          | `name`              | string | **required**        | Name displayed in the chat header            |
| `logo`          | `logo`              | string | `"bi bi-person"`    | Bootstrap Icons class or image URL           |
| `message`       | `message`           | string | `"Hi!"`             | Pre-filled message text                      |
| `buttonText`    | `button-text`       | string | `"Start chat"`      | Send button text                             |
| `greeting`      | `greeting`          | string | **required**        | Greeting bubble text                         |
| `fabIcon`       | `fab-icon`          | string | `"bi bi-whatsapp"`  | Bootstrap Icons class or image URL           |
| `primaryColor`  | `primary-color`     | string | `"#25D366"`       | Primary color                                |
| `darkColor`     | `dark-color`        | string | `"#128C7E"`       | Dark color (gradient)                        |
---

