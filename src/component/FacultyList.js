import React, { Component } from 'react'

import Card from 'react-bootstrap/Card'

import CardColumns from 'react-bootstrap/CardColumns'


import data from  './data/faculty.json'



              const  newdata= data.map( ( data) =>{
                return  (
                    <Card key= {data.name}>
                      <Card.Body>
                        <Card.Title>{ data.name}</Card.Title>
                        <Card.Title>{ data.designation}</Card.Title>
                        <Card.Text>
                              {data.desc}
                        </Card.Text>
                      </Card.Body>
                    </Card> 
                  
                  )
                }
              )




export default class FacultyInfo extends Component {
    render() {
        return (
            <CardColumns className=" m-3 p-3 owncard ">  {newdata}  </CardColumns>
           
        )
    }
}