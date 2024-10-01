class leafletmap{
    constructor(containerId,center, zoom){
   this.map = L.map.setView(center, zoom);
    this.initTileLayer();
}
initTileLayer(){

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        
    }).addTo(map);
}
addMarker(lat, long, message){
const marker = L.marker({lat, long}).addTo(this.map)
.bindPopup(message);
}





}
const Mymap = new leafletmap('map',[8.359735, 124.869206, 18]);

Mymap.addMarker(8.359735, 124.869206, 'CCS Laboratory 2');






































