public class BoatSearchResults {

    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
        List<Boat__c> boatList;
        if(boatTypeId == null || boatTypeId == ''){
            boatList = [SELECT Id, Name, BoatType__c, Geolocation__Latitude__s, Geolocation__Longitude__s, Contact__r.Name, Picture__c FROM Boat__c];
        } else{
          	boatList = [SELECT Id, Name, BoatType__c, Geolocation__Latitude__s, Geolocation__Longitude__s, Contact__r.Name, Picture__c FROM Boat__c WHERE BoatType__c = :boatTypeId];  
        } 
        return boatList;     
    }
    
}