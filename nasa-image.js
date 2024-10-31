import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class NasaImage extends DDDSuper(LitElement) {

  constructor() {
    super();
    this.title = '';
    this.source = '';
    this.owner = '';
  }

  static get properties() {
    return {
        source: { type: String },
        title: { type: String },
        owner: { type: String}
    };
  }

  static get styles() {
    return [css`
        :host {
        display: inline-flex;
        height: 270px;
        max-width: 240px;
        width: 240px;
        margin: 8px;
        font-family: var(--ddd-font-primary);
        background-color: var(--ddd-theme-default-nittanyNavy);
        font-weight: bold;
    }


    .image {
    display: inline-block;
    }

    .image div {
    max-width: 240px;
    font-size: 16px;
    font-weight: bold;
    background-color: var(--ddd-theme-default-nittanyNavy);
    }

    .image:hover {
      opacity: 50%;
    }

    .image img {
    display: block;
    width: 240px;
    height: auto;
    max-height: 200px;
    }

    `];
  }

  render() {
    return html`
    <div class="image">
        <img src="${this.source}" />
        <div>${this.title}</div>
        <div>${this.owner}</div>
    </div>
    `;
  }
  static get tag() {
    return "nasa-image";
  }
}
customElements.define(NasaImage.tag, NasaImage);