//Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons. Write a function to verify that a coupon is valid and not expired. If the coupon is good, return true. Otherwise, return false. A coupon expires at the END of the expiration date. All dates will be passed in as strings in this format: "June 15, 2014"

//Test Data
('123','123','September 5, 2014','October 1, 2014')
('123a','123','September 5, 2014','October 1, 2014')

//Solution 1
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if(enteredCode !== correctCode) return false;
  if(Date.parse(currentDate) >= Date.parse(expirationDate)) return false;
  return true;
}

//Solution 2
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate);
}