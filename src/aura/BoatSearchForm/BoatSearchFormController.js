({
    doInit : function(component, event, helper) {
        
        console.log('Init called');
        
        var isEnabled = $A.get("e.force:createRecord");        
        if(isEnabled){
            component.set("v.displayNewButton", true);
        }

        var action = component.get('c.getBoatTypes');
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log(response.getReturnValue());  
                component.set("v.BoatTypes", response.getReturnValue());

            } else if (state === "INCOMPLETE") {
                // do something
            } else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });        
        
        $A.enqueueAction(action);
    },
    
    searchBoat : function(component, event, helper){
        var selectedBoatType = component.get('v.selectedBoatType');
        console.log('Search button clicked');        
    },
    
    createNewBoat : function(component, event, helper){
        console.log('Create button clicked');
        var boatTypeId = component.get("v.selectedBoatType");
        var requestNewBoat = component.getEvent("initNewBoatPage");
        requestNewBoat.setParams({"boatTypeId": boatTypeId});
        requestNewBoat.fire();    
    },    
    
    initNewBoatPage : function (component, event, helper){
        var createNewBoat = $A.get("e.force:createRecord"); 
        var boatTypeId = component.get("v.selectedBoatType");
        
        if(boatTypeId == ""){
            alert('Please select the boat type!');
            return;
        }
        
        createNewBoat.setParams({
            "entityApiName": "Boat__c",
            "defaultFieldValues" : {
                "BoatType__c" : boatTypeId
            }
        });
   
        createNewBoat.fire();    
    },
    
    onFormSubmit : function(component, event, helper){
        var boatTypeId = component.get('v.selectedBoatType');
        console.log('Search button clicked: ' + boatTypeId);  
        var requestSearchBoat = component.getEvent("formsubmit");
        requestSearchBoat.setParams(
            {
                "formData": {
                    "boatTypeId" : boatTypeId     
                }
            }
        );
        requestSearchBoat.fire();
    }
})