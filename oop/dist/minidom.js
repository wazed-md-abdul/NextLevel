class UIElement {
    id;
    constructor(id) {
        this.id = id;
    }
}
class Input extends UIElement {
    type;
    placeholder;
    constructor(id, type, placeholder) {
        super(id);
        this.type = type;
        this.placeholder = placeholder;
    }
    render() {
        return `<input id="${this.id}" type="${this.type}" placeholder="${this.placeholder}">`;
    }
}
class Button extends UIElement {
    label;
    constructor(id, label) {
        super(id);
        this.label = label;
    }
    render() {
        return `<button class="px-5 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 active:scale-95 transition cursor-pointer font-medium" id="${this.id}">${this.label}</button>`;
    }
}
class Button2 extends UIElement {
    label;
    constructor(id, label) {
        super(id);
        this.label = label;
    }
    render() {
        return `<button class="px-5 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 active:scale-95 transition cursor-pointer font-medium" id="${this.id}">${this.label}</button>`;
    }
}
class Form extends UIElement {
    children = [];
    appendChild(child) {
        this.children.push(child);
    }
    render() {
        const childrenHTML = this.children
            .map((child) => child.render())
            .join("\n");
        return `
      <form
        id="${this.id}"
        class="w-full max-w-sm mx-auto p-8 bg-white border border-gray-200 rounded-2xl shadow-lg flex flex-col gap-5"
      >
        ${childrenHTML}
      </form>
    `;
    }
}
const formElement = new Form("login-form");
const formId = document.getElementById('form-container');
if (formId) {
    formId.innerHTML = formElement.render();
}
console.log(formElement.render());
const button2 = new Button2("submit-btn", "Submit");
formElement.appendChild(button2);
const nameInput = new Input("name", "text", "Enter your name");
const emailInput = new Input("email", "email", "Enter your email");
const passwordInput = new Input("pass", "password", "Enter your password");
const submitButton = new Button("submit-btn", "Submit");
formElement.appendChild(nameInput);
formElement.appendChild(emailInput);
formElement.appendChild(passwordInput);
formElement.appendChild(submitButton);
const getIdWithForm = document.getElementById('root');
if (getIdWithForm) {
    getIdWithForm.innerHTML = formElement.render();
}
export {};
