({
    onSearch : function(component) {
        console.log('onSearch');
        
        var action = component.get("c.getBoats");
        action.setParams({
            boatTypeId : component.get("v.boatTypeId")
        });
        
        action.setCallback(this, function(response){
            var state = response.getState();
            console.log("state " + state);
            
            if(state === "SUCCESS"){
                var res = response.getReturnValue();
                component.set("v.boats", res);
            }
            else{
                console.log("Failed with state: " + state);
            }
        });
        
        //send action off to be executed
        $A.enqueueAction(action);        
    }
})