# Lab 8!!

## Amjad Al-Omar and Joanne Wu!!

## Check Your Understanding Questions: 

1. We are choosing option 1. "Within a Github action that runs whenever code is pushed " because it is the best option of the three to ensure that code is adequately tested and safe to have in the main repo. If we decided to go with option 2. and included the automated tests as something manual that the developer has to do, there may be instances where the developer may forget to run these tests and we could have erroneous code pushed to the main repo. For option 3. it would be the most inefficient of the three due to the fact that there could have been erroneous code written with bugs all over and we wouldnt know until the code was pushed, deployed and tested on the actual website by users as opposed to a testing team. Option 1. ensures the most safety and a 100% chance of code being tested before being pushed.  
   
2. No, we would use unit testing
   
3. No we would use end to end testing for this. Due to the fact that we would need to check that typing a message into the message area and then making sure that the data inside of the message area is correct, it would be similar to checking the add to cart functionaility that we did in the expose section. We would then need to check that sending the message works as intended. Since we are testing a feature like messaging, we need to test the functionality of all portions of messaging as a whole, not just one specific function. Thus, end to end would be best.
   
4. We would use unti testing for this feature. In this instance, we are just checking that the current length of the message is either less than/equal to or greater than 80. Since this is basically a minor, one function check, we should be using unit testing to ensure that the proper output is happening from this function. 
