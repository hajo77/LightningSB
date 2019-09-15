({
	onBoatClick : function(component, event, helper) {
		
        console.log('On Boat Clicked');
        var boat = component.get('v.boat'); 
        var boatSelectEvent = component.getEvent('boatSelect');
        boatSelectEvent.setParams( {"boatId" : boat.Id} ); 
        boatSelectEvent.fire();
        
        var boatSelectedEvent = $A.get("e.c:BoatSelected");
        boatSelectedEvent.setParams({"boat": boat});
        boatSelectedEvent.fire();
        
        var plotMapMarkerEvent = $A.get("e.c:PlotMapMarker");
        plotMapMarkerEvent.setParams({
            "lat"   : boat.Geolocation__Latitude__s,
            "long"  : boat.Geolocation__Longitude__s,
            "label" : boat.Name,
            "SObjectId" : boat.Id});
        plotMapMarkerEvent.fire();
	}
        
})