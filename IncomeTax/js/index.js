 $("#Result").hide();
 $("#ResultValue").hide();
  $(document).ready(function()
  {

  $("#Submit").click(function()
  {

   var annualAmount = $("#amount").val();
   var citizenType = $('input[name="citizen"]:checked', '#incomTax').val()
   
 if(annualAmount==null||annualAmount=="")
  {
   
    showResult("Please enter the proper amount.Amount cannot be empty");
  } 
  else if(isNaN(annualAmount))
  {
      showResult("Please Enter the numeric value.");
  }
  else if(annualAmount <= 250000)
  {
       showResult("NIL");
  }
  else if(annualAmount <=300000 && citizenType == "seniorCitizen")
  {
        showResult("NIL");
  }
  else if(annualAmount <=500000 && citizenType == "superSenior")
  {
        showResult("NIL");
  }
  else
  {
      var taxPercentage = getPercentage(annualAmount,citizenType);
      var totalAmount = incomAmountcalculation(annualAmount,taxPercentage);
      totalAmount = totalAmount + "Rs";
      showResultwithValue("Your Monthly Income Tax Amount : "+ totalAmount);
  }
    
});
}); 

 function incomAmountcalculation(amount,taxPercentage)
 {
      amount = amount*taxPercentage/100;
      amount = amount/12;
      return amount;
 }
 // Get Percentage based on citizen.
 function getPercentage(annualAmount,citizenType)
 {
      var PercentageValue;
     
         
          if(citizenType == "general")
          {
              if(annualAmount<=500000)
              {
                  PercentageValue = 10;
              }
              else if(annualAmount<=1000000)
              {
                  PercentageValue = 20;
              }
              else
              {
                  PercentageValue = 30;
              }
          }
          
          if(citizenType == "seniorCitizen")
          {

              if(annualAmount<=500000)
              {
                  PercentageValue = 10;
              }
              else if(annualAmount<=1000000)
              {
                  PercentageValue = 20;
              }
              else
              {
                  PercentageValue = 30;
              }
          }
          
          if(citizenType == "superSenior")
          {
              
              if(annualAmount<=1000000)
              {
                  PercentageValue = 20;
              }
              else
              {
                  PercentageValue = 30;
              }
          }
         return PercentageValue;
 }
 function showResult(value)
 {
    $("#ResultValue").hide();
    $("#Result").hide();
    $("#Result").slideDown("slow");
    $("#Result").html(value);
 }
 function showResultwithValue(value)
 {
  $("#Result").hide();
    $("#ResultValue").hide();
    $("#ResultValue").slideDown("slow");
    $("#ResultValue").html(value);
 }


