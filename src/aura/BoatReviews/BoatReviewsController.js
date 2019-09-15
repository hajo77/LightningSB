({
	doInit : function(component, event, helper) {
        helper.onInit(component, event, helper);
	},
    
    onUserInfoClick : function(component, event, helper){
        var userId = event.currentTarget.getAttribute('data-userid');
        var navigateToUserRecordEvent = $A.get('e.force:navigateToSObject');
        navigateToUserRecordEvent.setParams({'recordId' : userId});
        navigateToUserRecordEvent.fire();
    }
})