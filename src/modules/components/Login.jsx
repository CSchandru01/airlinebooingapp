import react ,{Component}from "react";

import Background from "../../airport3.jpg"

export class Login extends Component{
    render(){
        return (
            <div style={{
                width: "100%",
                height: "100vh",
                backgroundImage:  Background,
                backgroundSize: "cover"
              }}>
                <br />
                <div>
                <h2 style={{ fontWeight: 900 }}> A project case study</h2>
                <div style={{
                    alignContent:"center",
                    display:"-ms-flexbox",
                    backgroundColor :"black"

                }}>
                    Hi

                </div>

                </div>
                
                
            </div>
        )
    }
}