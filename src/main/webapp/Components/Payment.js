/**
 * 
 */
 
$(document).ready(function() 
{ 
	if ($("#alertSuccess").text().trim() == "") 
	 { 
	 	$("#alertSuccess").hide(); 
	 } 
	 $("#alertError").hide(); 
}); 


// SAVE ============================================
	$(document).on("click", "#btnSave", function(event) 
{ 
// Clear alerts---------------------
 $("#alertSuccess").text(""); 
 $("#alertSuccess").hide(); 
 $("#alertError").text(""); 
 $("#alertError").hide(); 
 
// Form validation-------------------
var status = validatePaymentForm(); 
if (status != true) 
 { 
 $("#alertError").text(status); 
 $("#alertError").show(); 
 return; 
 } 
 
 
 
// If valid------------------------
var type = ($("#hidpayidSave").val() == "") ? "POST" : "PUT"; 
 $.ajax( 
 { 
	 url : "PaymentAPI", 
	 type : type, 
	 data : $("#formPayment").serialize(), 
	 dataType : "text", 
	 
 complete : function(response, status) 
 { 
 	onPaymentSaveComplete(response.responseText, status); 
 } 
 }); 
});


function onPaymentSaveComplete(response, status) 
{ 
if (status == "success") 
 { 
	 var resultSet = JSON.parse(response); 
	 if (resultSet.status.trim() == "success") 
 { 
	 $("#alertSuccess").text("Successfully saved."); 
	 $("#alertSuccess").show(); 
	 $("#divPaymentGrid").html(resultSet.data); 
 } else if (resultSet.status.trim() == "error") 
 { 
	 $("#alertError").text(resultSet.data); 
	 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
	 $("#alertError").text("Error while saving."); 
	 $("#alertError").show(); 
 } else
 { 
	 $("#alertError").text("Unknown error while saving.."); 
	 $("#alertError").show(); 
 } 
 
	 $("#hidpayidSave").val(""); 
	 $("#formPayment")[0].reset(); 
}



// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event) 
{ 
 $("#hidpayidSave").val($(this).closest("tr").find('#hidpayidUpdate').val()); 
 $("#paydate").val($(this).closest("tr").find('td:eq(0)').text()); 
 $("#payamt").val($(this).closest("tr").find('td:eq(1)').text()); 
 $("#paytype").val($(this).closest("tr").find('td:eq(2)').text()); 
 $("#paycus").val($(this).closest("tr").find('td:eq(3)').text()); 
 $("#paycusid").val($(this).closest("tr").find('td:eq(4)').text()); 
}); 


// CLIENT-MODEL================================================================
	function validatePaymentForm() 
	{ 
		// paydate
		if ($("#paydate").val().trim() == "") 
 		{ 
			 return "Insert Payment Date ."; 
 		} 
 		
		// payamount
			if ($("#payamt").val().trim() == "") 
			 { 
 				return "Insert Payment Amount."; 
 			} 
		
		 // paytype
			if ($("#paytype").val().trim() == "") 
			 { 
 				return "Insert Payment Type."; 
 			} 
 
		// paycus
			if ($("#paycus").val().trim() == "") 
			 { 
 				return "Insert payed Customer."; 
 			} 
 
 		// paycusid
			if ($("#paycusid").val().trim() == "") 
			 { 
 				return "Insert payed Customer ID."; 
 			} 

		return true; 
	}


//DELETE
$(document).on("click", ".btnRemove", function(event) 
{ 
 $.ajax( 
 { 
 url : "PaymentAPI", 
 type : "DELETE", 
 data : "payid=" + $(this).data("payid"),
 dataType : "text", 
 complete : function(response, status) 
 { 
 onPaymentDeleteComplete(response.responseText, status); 
 } 
 }); 
});


function onPaymentDeleteComplete(response, status) 
{ 
if (status == "success") 
 { 
 var resultSet = JSON.parse(response); 
 if (resultSet.status.trim() == "success") 
 { 
 $("#alertSuccess").text("Successfully deleted."); 
 $("#alertSuccess").show(); 
 $("#divPaymentGrid").html(resultSet.data); 
 } else if (resultSet.status.trim() == "error") 
 { 
 $("#alertError").text(resultSet.data); 
 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
 $("#alertError").text("Error while deleting."); 
 $("#alertError").show(); 
 } else
 { 
 $("#alertError").text("Unknown error while deleting.."); 
 $("#alertError").show(); 
 } 
 }