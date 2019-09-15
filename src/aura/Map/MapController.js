({
    jsLoaded: function(component) {
        component.set("v.jsLoaded", true);
    },
    
    onPlotSet : function(component, event, helper){
        var lat = event.getParam('lat');
        var long = event.getParam('long');
        var label = event.getParam('label');
        var sobjectid = event.getParam('sobjectid');
        
        component.set('v.location', {
            'lat' : lat,
            'long' : long,
            'label' : label,
            'sobjectid' : sobjectid
        });
    }
})