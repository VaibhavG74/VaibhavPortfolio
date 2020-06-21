import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {

    render() {

        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                       <h2>Vaibhav</h2>
                       <img
                         src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png"
                         alt="avatar"
                         style={{height: '250px'}}
                        />
                        <p style={{ width: "75%", margin: "auto", paddingTop: "1em"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </Cell>
                    <Cell col={6}>

                        <h3>Contact Me</h3>
                        <hr/>
                        
                        <div className="contact-list">
                        <List>
                         <ListItem>
                          <ListItemContent style={{fontSize:'2.8vmax',fontFamily:'Anton'}}>
                              <i className="fa fa-phone-square" aria-hidden="true"/>
                              +91 8800981724
                          </ListItemContent>
                         </ListItem>
                         
                         <ListItem>
                         <ListItemContent style={{fontSize:'2.8vmax',fontFamily:'Anton'}}>
                              <i className="fa fa-fax" aria-hidden="true"/>
                              420-1982564
                          </ListItemContent>                          
                         </ListItem>

                         <ListItem>
                         <ListItemContent style={{fontSize:'2.8vmax',fontFamily:'Anton'}}>
                              
                              gupta.vaibhav54@gmail.com
                          </ListItemContent>                          
                         </ListItem>
                        </List>
                        </div>
                        

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;