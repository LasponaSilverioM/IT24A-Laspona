class LeafletMap {

    constructor(containerId, center, zoom) {
        this.map = L.map(containerId).setView(center, zoom);
        this.initTileLayer();

        this.attendanceCountSC = 0;
        this.attendanceCountBA = 0;
        this.attendanceCountLab1 = 0;

    }
    }















