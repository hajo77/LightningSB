({
    onInit  : function(component, event, helper) {
        component.find("service").getNewRecord(
            "BoatReview__c", // sObject type (objectApiName)
            null,      // recordTypeId
            false,     // skip cache?
            $A.getCallback(function() {
                var rec = component.get("v.newBoatReview");
                var error = component.get("v.recordError");
                if(error || (rec === null)) {
                    console.log("Error initializing record template: " + error);
                    return;
                }
                
                rec.Boat__c = component.get("v.boat.Id");
                component.set('v.boatReview', rec); 
            })
        );
    }
})