abstract class UIElement {
  constructor(protected id: string) { }
    abstract render(): string;
}
class Input extends UIElement {
  constructor(id: string, private type: string, private placeholder: string) {
    super(id);
  }

  render(): string {
    return `<input id="${this.id}" type="${this.type}" placeholder="${this.placeholder}">`;
  }
}
class Button extends UIElement {
  constructor(
    id: string,
    private label: string,
  ) {
    super(id);
  }

  render() {
    return `<button id="${this.id}">${this.label}</button>`;
  }
}


class Form extends UIElement {
  private children: UIElement[] = [];

  appendChild(child: UIElement) {
    this.children.push(child);
  }

  render() {
    const childrenHTML = this.children
      .map((child) => child.render())
      .join("\n ");

    return `<form id="${this.id}" style="border: 1px solid #ccc; padding: 20px; display: flex; flex-direction: column; max-width:300px; border-radius:10px; gap:5px;">\n ${childrenHTML} \n</form>`;
  }
}
const formElement = new Form("login-form");
const nameInput = new Input("name", "text", "Enter your name");
const emailInput = new Input("email", "email", "Enter your email");
const passwordInput = new Input("pass", "password", "Enter your password");
const submitButton = new Button("submit-btn", "Submit");


formElement.appendChild(nameInput);
formElement.appendChild(emailInput);
formElement.appendChild(passwordInput);
formElement.appendChild(submitButton);
console.log(formElement.render())


const getId = document.getElementById('root');
if (getId) {
  getId.innerHTML = formElement.render();
}
