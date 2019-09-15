({
	onInit : function(component, event, helper) {
        var action = component.get('c.getAll');
        action.setParams({
            "boatId": component.get("v.boat").Id
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            console.log("state " + state);
            
            if(state === "SUCCESS"){
                var res = response.getReturnValue();
                component.set("v.boatReviews", res);
            } else{
                console.log("Failed with state: " + state);
            }
        });  
        $A.enqueueAction(action);
	}
})