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
}