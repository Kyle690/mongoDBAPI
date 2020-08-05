# MongoDB Express Api
[![Build Status](https://travis-ci.com/Kyle690/mongoDBAPI.svg?branch=master)](https://travis-ci.com/Kyle690/mongoDBAPI)
[![Coverage Status](https://coveralls.io/repos/github/Kyle690/mongoDBAPI/badge.svg?branch=master)](https://coveralls.io/github/Kyle690/mongoDBAPI?branch=master)

Setup steps
- get code climate if from https://codeclimate.com
- then setup coveralls from https://coveralls.io


### Dependencies
`npm install --save
    compression
    cors
    cookie-parser
    debug
    dontenv
    express
    http-errors
    mongoose
    morgan
`


### Dev Dependencies

`
    npm install --save-dev
    @babel/cli
    @babel/core
    @babel/node
    @babel/plugin-transform-runtime
    @babel/register
    @babel/runtime
    @babel/preset-env
    chai
    coveralls
    eslint
    eslint-config-airbnb-base
    eslint-plugin-import
    mocha
    nodemon
    nyc
    prettier
    sinon
    sinon-chai
    supertest
`

#### End Points

- get /v1/test
    - returns test object
- get /v1/messages
    - return array of object messages from db
    - `{
        messages:[
            {name:'name',message:'message'},
            {name:'name',message:'message'}
        ]
    }`
- post/v1/messages
    - `body:{name:'name',message:'message'}`
    - returns object


