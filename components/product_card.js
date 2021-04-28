class ProductCards extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return ["img", "thename", "price", "description"];
  }
  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === "img") {
      this.img = newVal;
    }
    if (attr === "thename") {
      this.thename = newVal;
    }
    if (attr === "price") {
      this.price = newVal;
    }
    if (attr === "description") {
      this.description = newVal;
    }
  }
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
    ${this.getStyles()}
    <div class="card">
        <div class="card_inner product1">
          <!--Card's Front-face-->
          <div class="card_face card_face-front">
            <!--Adding Products Buttom-->
            <div class="msgAdded">
              <h5>Agregado al carrito</h5>
            </div>
            <div class="addBtn" id="msg1">
              <img class="plus" src="./img/plus-solid.svg" alt="boton añadir" />
            </div>
              <img src="./img/${this.img}" alt="arepa" />
            <div class="card_description">
              <h3 class="product_name">${this.thename}</h3>
              <p class="product_price">Precio: $${this.price}</p>
            </div>
          </div>
          <!--Card's Back-face-->
          <div class="card_face card_face-back">
            <p class="card_caption">
              ${this.description}
            </p>
          </div>
        </div>
      </div>

    `;
    return template;
  }
  getStyles() {
    return `
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Kalam&display=swap');

    p, h1, h2, h3, h4, h5, a, input, textarea, button, li, ul{
      font-family: "Kalam", cursive;
    }
      .card {
        width: 270px;
        height: 370px;
        border-radius: 20px;
        margin: auto;
        -webkit-perspective: 1000px;
                perspective: 1000px;
      }
      .card .flipped {
         -webkit-transform: rotateY(180deg);
          transform: rotateY(180deg);
      }
      .card .card_inner {
        position: relative;
        width: 100%;
        height: 100%;
        -webkit-transform-style: preserve-3d;
                transform-style: preserve-3d;
        -webkit-transition: all 1.5s ease;
        transition: all 1.5s ease;
        cursor: pointer;
      }
      .card .card_inner .card_face {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
        overflow: hidden;
        border-radius: 20px;
        -webkit-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
      .card .card_inner .card_face-front {
        background-color: #fff;
        position: relative;
      }
      .card .card_inner .card_face-front .msgAdded {
        position: absolute;
        top: 7px;
        right: 12px;
        color: #fff;
        background-color: #253713;
        overflow: hidden;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        /*Change the next 3 properties to animation*/
        width: 0;
        padding: 0;
        border: 0;
      }
      .card .card_inner .card_face-front .msgAdded h5 {
        font-weight: 300;
      }
      .card .card_inner .card_face-front .addBtn {
        position: absolute;
        top: 3px;
        right: 3px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
            -ms-flex-direction: row;
                flex-direction: row;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        color: #f3f3f3;
        border: 1px solid #fff;
        background-color: #2bce28;
      }
      .card .card_inner .card_face-front .addBtn .plus {
        width: 80%;
        height: 80%;
        margin: auto;
      }
      .card .card_inner .card_face-front .card_description {
        height: 90px;
        padding-top: 10px;
      }
      .card .card_inner .card_face-front .card_description .product_name {
        font-size: 24px;
        font-weight: 300;
        margin: 0;
        text-align: center;
      }
      .card .card_inner .card_face-front .card_description .product_price {
        font-size: 14px;
        text-align: center;
      }
      .card .card_inner .card_face-back {
        -webkit-transform: rotateY(180deg);
                transform: rotateY(180deg);
        background-color: #fff;
      }

    </style>
    `;
  }
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
  disconnectedCallback() {}
}

customElements.define("product-card", ProductCards);
