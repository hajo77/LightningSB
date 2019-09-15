({
    onBoatSelected : function(component, event, helper){
        
        console.log('onBoatSelected called');   
        var boat = event.getParam("boat");
        component.set('v.Id', boat.Id);
        component.set('v.boat', boat);
        
        var service = component.find("service");
        service.reloadRecord() ;   
    },
    
    onRecordUpdated : function(component, event, helper) {
        console.log('onRecordUpdated called');  
        var brc = component.find('brc');
        if(typeof brc != 'undefined'){
            brc.refresh();
        }  
    },
    
    onBoatReviewAdded : function(component, event, helper){
        console.log('onBoatReviewAdded called')
        component.find('tabs').set('v.selectedTabId', 'boatreviewtab');
        var brc = component.find('brc');
        if(typeof brc != 'undefined'){
            brc.refresh();
        }
    } 
})