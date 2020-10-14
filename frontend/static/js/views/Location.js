import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Location");
    }

    async getHtml() {
        return `
            
                
                <h1>This is your location</h1>
                <p>Please wait for coordinates to appear...</p>

                <p>Latitude: <span id="latitude"></span>&deg;<br>
                </p>
                <p>Longitude: <span id="longitude"></span>&deg;
                </p>
            
                <a href="https://www.gps-coordinates.net/" target="_blank"><button>Was it correct?</button></a>
            
                    
        `;
    }
}

// For latitude longitude location
if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition( position => {

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    document.getElementById('latitude').textContent = lat;
    document.getElementById('longitude').textContent = lon;
        });
} else {
    window.confirm('No location available');
}
