class leafletmap{
    constructor(containerId,center, zoom){
   this.map = L.map.setView(center, zoom);
    this.initTileLayer();
}
}