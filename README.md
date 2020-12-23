#WhatsApp Mern Build

Here i have made a whatsapp mern clone with backsuppor of express.js running on node.js and
and front-end with react.js

The database that i have used here is mongodb-atlas
and to make mongodb realtime ,have made use of a service called Pusher

##Pusher

to install pusher on front-end

-npm i pusher-js

to install pusher on back-end

- npm i pusher

To achieve this functionality we have to add an streamListener which is going to listen to any changes made to a particular collection inside our database
here pusher is like a listener to the mongodb-database and when ever one pushes/add data to the collection we gonna trigger pusher.
