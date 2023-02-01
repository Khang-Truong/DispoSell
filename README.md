# DispoSell
A website dedicated to collect unused furniture in usable condition, refurbishing them, and selling them, operated in Metro Vancouver.
## How to run
1. Configure IntelliJ to [delegate build and run actions to Maven](https://www.jetbrains.com/help/idea/delegate-build-and-run-actions-to-maven.html#delegate_to_maven)
2. Run the application
## Deployment
1. AWS Elastic Beanstalk: http://disposell-dev.us-west-2.elasticbeanstalk.com/
2. Heroku App: http://disposell.herokuapp.com/
## How to test
1. Open http://disposell.herokuapp.com/
2. Add a few furniture to carts and checkout using these fake credit card:
	* Card number: 4111 1111 1111 1111
	* Expiry date in MM/YY format: 12/23
	* CVC/CVV: 123
3. Login as an admin using these information to view the new order:
	* Username: test_admin
	* Password: test_admin
4. As an admin, assign shipper and schedule delivery for this new order
5. Login as a shipper using these information:
	* Username: test_shipper
	* Password: test_shipper
6. Update delivery information for the order, i.e. real-time position for tracking delivery, for [Order 14](http://disposell.herokuapp.com/orderDetails/14) by clicking on the Google map at the bottom, then click on "Update Tracking" button right below it
7. At the same time, open a separate tab as an anonymous user using the same link for [Order 14](http://disposell.herokuapp.com/orderDetails/14), Google map position would be updated in real-time
## Some pictures 
![image](https://user-images.githubusercontent.com/62549740/215921906-5ed519c0-59e1-45d2-a042-22d62f09f592.png)
![image](https://user-images.githubusercontent.com/62549740/215922181-25dfdc24-b997-4dec-b78e-60533c299d23.png)
![image](https://user-images.githubusercontent.com/62549740/215922263-bafefa79-8499-4d25-a99a-1d588e498462.png)
![image](https://user-images.githubusercontent.com/62549740/215922360-c71e3b0e-8587-447c-87d9-eb6e9f0dba37.png)
![image](https://user-images.githubusercontent.com/62549740/215922441-380a1756-745d-47e0-9220-39aed9b4d951.png)
![image](https://user-images.githubusercontent.com/62549740/215922698-971a4188-c57d-47c9-9aa0-ad904493cc86.png)
![image](https://user-images.githubusercontent.com/62549740/215922735-99fce649-36fa-49c5-a08c-01badb1b2267.png)

