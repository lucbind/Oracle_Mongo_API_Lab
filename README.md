# Oracle Mongo API example Lab Roma

` This is just a simple example to show how a simple nodejs App written for Mongo, can run on Oracle just modify the uri `

<img width="660" alt="image" src="https://user-images.githubusercontent.com/53658658/201542381-1dc18335-6c09-43e6-9a73-45d31a34cba1.png">

The App was taken from mongo forum 


```*)Steps to run the app```

`gh repo clone lucbind/Oracle_Mongo_API_Lab
`cd Oracle_Mongo_API_Lab
`npm init
`npm install
`node server.js`

The app run on http://localhost:3000/app.html

to switch between Oracle and Mongodb take a look at database.js and dbFunctions.js where you have to put your server connection ip where Oracle and where Mongodb are installed.
In my case mongodb was on 27017 port (as usual)  and Oracle Mongo-API on 27018. port

ORDS for Oracle is a requirement, and I mapped username on Oracle APPL1 as a schema for the collection 

==LB==
