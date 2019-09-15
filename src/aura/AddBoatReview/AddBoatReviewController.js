({
    doInit : function(component, event, helper){
      helper.onInit(component, event, helper);
        
    },
    
	onSave : function(component, event, helper) {
		console.log('onSave clicked');
        
		component.set("v.boatReview.Boat__c", component.get("v.boat.Id"));

        component.find("service").saveRecord($A.getCallback(function(saveResult) {
            // use the recordUpdated event handler to handle generic logic when record is changed
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                // handle component related logic in event handler
     
                if($A.get("e.force:showToast")){
                    var resultToast = $A.get("e.force:showToast");
                    resultToast.setParams({
                        "title": "Thanks for your time!",
                        "message" : "Your review was added!",
                        "type": "success"
                    });
                    resultToast.fire();                      
                    
                } else {
                    alert('Thanks for your time! Your review was added!');
                }

                var boatReviewAddedEvent = component.getEvent('boatReviewAdded');
                boatReviewAddedEvent.fire();
                
                helper.onInit(component, event, helper) ;
                
                
            } else if (saveResult.state === "INCOMPLETE") {
                console.log("User is offline, device doesn't support drafts.");
            } else if (saveResult.state === "ERROR") {
                console.log('Problem saving record, error: ' + JSON.stringify(saveResult.error));
            } else {
                console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
            }
        }));        
        
        
	},
    
    onRecordUpdated : function(component, event, helper){
        // empty for now

    }
})