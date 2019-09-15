({
	onFormSubmit : function(component, event, helper) {
        var formData = event.getParam("formData");
        var boatSearchResultsComponent = component.find("boatSearchResultsComponent");      
        boatSearchResultsComponent.search(formData.boatTypeId);
	}
})