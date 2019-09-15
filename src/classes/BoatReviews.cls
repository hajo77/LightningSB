public class BoatReviews {

    @AuraEnabled
    public static List<BoatReview__c> getAll(String boatId){
        List<BoatReview__c> boatReviewList;
        if(boatId == null || boatId == ''){
            return null;
        } 
        
        boatReviewList = [SELECT 
                          Id, 
                          Name, 
                          Comment__c, 
                          Rating__c, 
                          LastModifiedDate, 
                          CreatedDate, 
                          CreatedBy.Name,
                          CreatedBy.SmallPhotoUrl,
                          CreatedBy.CompanyName
                          FROM BoatReview__c WHERE Boat__c = :boatId
                          ORDER By CreatedDate DESC  
                          ];  
        
        return boatReviewList;     
    }
    
}