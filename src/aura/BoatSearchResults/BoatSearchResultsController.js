({
	doSearch : function(component, event, helper) {
		console.log('doSearch');
        helper.onSearch(component);
	}, 
    
    search: function(component, event, helper){
        console.log('Search called');
        var params = event.getParam('arguments');
        if(params){
            component.set("v.boatTypeId", params.boatTypeId);
            helper.onSearch(component);
        }        
    },
    
    onBoatSelect: function(component, event, helper){
        console.log('OnBoatSelect called');
        component.set('v.selectedBoatId',  event.getParam('boatId'));
    }
    
})