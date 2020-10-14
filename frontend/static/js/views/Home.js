import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");
    }

    async getHtml() {
        return `
            <h1>Welcome to my SPA</h1>
            <p>In order for this website to show you your location, please allow the browser to see your location</p>
            <p>
            <button><a href="/location" data-link>Location</a></button>
            </p>
        `;
    }
}