## About
App Name	: Agwar's NIM Finder
Creator		: Aliffiqri Agwar - 13517107

## How To Run
* Go to [Agwar's NIM Finder](https://sorrowinrain.github.io/agwar_nimfinder/)
* It will redirect you to [Login Page](https://sorrowinrain.github.io/agwar_nimfinder/login)
![](https://github.com/SorrowInRain/agwar_nimfinder/blob/master/screenshot/login.png?raw=true)
* If you don't have any account to continue, you can go to [Register Page](https://sorrowinrain.github.io/agwar_nimfinder/register)
![](https://github.com/SorrowInRain/agwar_nimfinder/blob/master/screenshot/register.png?raw=true)
* After you login, you will get the page like this
![](https://github.com/SorrowInRain/agwar_nimfinder/blob/master/screenshot/get.png?raw=true)
* You can insert two types of query. NIM of the student or name of the student. Query with NIM is like shown
![](https://github.com/SorrowInRain/agwar_nimfinder/blob/master/screenshot/get-nim.png?raw=true)
* If you press search button, it will loading for a while. Getting the data from the server
![](https://github.com/SorrowInRain/agwar_nimfinder/blob/master/screenshot/get-loading.png?raw=true)
* The result is like shown
![](https://github.com/SorrowInRain/agwar_nimfinder/blob/master/screenshot/get-result.png?raw=true)
* You can expand the size limit for the data. You can fill it like shown.
![](https://github.com/SorrowInRain/agwar_nimfinder/blob/master/screenshot/get-result-size.png?raw=true)
* Also, you can go to another page of the data. Default is 0.
![](https://github.com/SorrowInRain/agwar_nimfinder/blob/master/screenshot/get-result=page.png?raw=true)

## Library
1. ReactJS for the main program and building. [Source](https://reactjs.org/)
2. Axios for get and post request. [Source](https://www.npmjs.com/package/axios)
3. Querystringify for post request. [Source](https://www.npmjs.com/package/querystringify)
4. JS-Cookie for cookie handler. [Source](https://www.npmjs.com/package/js-cookie)

## Review for Application
#### Disadvantages :
1. There is a bug that you can't go to directly to https://sorrowinrain.github.io/agwar_nimfinder/login or https://sorrowinrain.github.io/agwar_nimfinder/register or https://sorrowinrain.github.io/agwar_nimfinder/get. It will return 404. You must go to https://sorrowinrain.github.io/agwar_nimfinder/ for auto-redirect go to https://sorrowinrain.github.io/agwar_nimfinder/login
2. 

## How It Designed?
It uses [Strategy Pattern](https://www.tutorialspoint.com/design_pattern/strategy_pattern.htm) for the design. So the application has 3 main classes :
1. PostRegister for viewing Register Page and Excecuting Post Request in Register from the API.
2. PostLogin for viewing Login Page and Excecuting Post Request in Login from the API.
3. GetData for viewing Get Page and Excecuting Get Request by sending query to the API.

So when the user input the query to the app, it will be seperated by the website that the user choose.

## How It Works?
1. Register Page
When username and password has inputted, the application sent POST request with axios to the API. The response from API, will be viewed to the website.

2. Login Page
When username and password has inputted, the application sent POST request with axios to the API. The response from API is variative. If the password and username didn't match, it won't do anything but sending error message to the user and offer them to input the data again. If the password and username match, the application will save the cookie on browser and redirect to the Get Page.

3. Get Page
The query from the user will be requested with GET method with axios to the API. The response presentated to the browser.
