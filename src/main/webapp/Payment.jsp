<%@page import="com.Payment"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>


<!DOCTYPE html>
<html>
<head>

	<meta charset="ISO-8859-1">
	<title>Payment Management</title>
</br>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/Payment.js"></script>

</head>

<body>
	<div class="container"><div class="row"><div class="col-6"> 
<h1>Payment Management </h1>
<form id="formPayment" name="formPayment">
 Payment Date: 
 <input id="paydate" name="paydate" type="text" 
 class="form-control form-control-sm">
 <br> Payment Amount: 
 <input id="payamt" name="payamt" type="text" 
 class="form-control form-control-sm">
 <br> Payment Type: 
 <input id="paytype" name="paytype" type="text" 
 class="form-control form-control-sm">
 <br> Payed Customer: 
 <input id="paycus" name="paycus" type="text" 
 class="form-control form-control-sm">
 <br> Payed Customer ID: 
 <input id=paycusid name="paycusid" type="text" 
 class="form-control form-control-sm">
 <br>
 <input id="btnSave" name="btnSave" type="button" value="Save" 
 class="btn btn-primary">
 <input type="hidden" id="hidpayidSave" 
 name="hidpayidSave" value="">
</form>
<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>
<br>
<div id="divPaymentGrid">
 <%
 Payment payObj = new Payment(); 
  out.print(payObj.readPayment());
 %>
</div>
</div> </div> </div> 
	
</body>
</html>