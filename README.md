https://medium.com/better-programming/how-to-setup-a-powerful-api-with-graphql-koa-and-mongodb-339cfae832a1

Start with either "node server.js" or "npm run start"

In the Query editor at http:localhost:9000/graphql input:

{
    gadget(id: "5d3eb5f73962d71e47293cc5") {
        name
    price
    by_company
    release_date
    id
  }
}

After creating the MongoDB container and going into it (exec command):
1. use koa-graphql 
2. db.gadgets.insert({ 
     name: "iPhone XS",
     release_date: "21 September, 2018",
     by_company: "Apple",
     price: 999
   });