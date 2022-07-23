<template>
    
    <div class="wrap_map">
        <div id="map"></div>
    </div>

</template>

<script>
import L from 'leaflet'
import '@/assets/plugins/leaflet/leaflet.css'

export default {
    name: 'MapLeaflet',
    mounted() {
        const map = L.map("map").setView([49.81984911958817, 24.02887643356052], 12);
        // Google Streets:
        L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
            // maxZoom: 13,
            subdomains: ["mt0", "mt1", "mt2", "mt3"]
        }).addTo(map);
        const pinIcon = L.icon({
            iconUrl: "images/pin.png",
            iconSize: [50, 65],
            iconAnchor: [25, 65],
            popupAnchor: [0, -65],
        });
        L.marker([49.83084911958817, 24.041876433560518], { icon: pinIcon }).addTo(map)
            .bindPopup(`
            <div class="popup">
                <img class="popup_img" src="images/logo-bird-gorshenko.svg">
                <h2>Графік роботи:</h2>
                <p>ПН-ПТ: 09:00-18:00</p>
                <p>СБ-НД: 11:00-16:00</p>
                <span></span>
            </div>
            `);
    },
    
}
</script>