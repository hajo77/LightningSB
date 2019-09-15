({
    init : function(component, event, helper) {
        component.set('v.isEventAvailable', $A.get("e.force:navigateToSObject")); 
    },
    
    onFullDetails : function(component, event, helper) {
        console.log('onFullDetails clicked');
        
        var boat = component.get("v.boat");
        var navBoatPageEvent = $A.get('e.force:navigateToSObject');
        navBoatPageEvent.setParams(
            {
                recordId : boat.Id,
                slideDevName : 'detail'
            }
        );
        navBoatPageEvent.fire();   
    }
})