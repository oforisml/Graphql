const express=require('express');
const { graphqlHTTP } =require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://pentester:Ad100200.@database.i5okv.mongodb.net/DataBase?retryWrites=true&w=majority");

mongoose.connection.once('open',()=>{
    console.log('connection is Up and running')
})

const app=express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000, ()=>{
    console.log('Listening to port 4000')
});