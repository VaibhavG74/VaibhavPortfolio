import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Achievement extends Component{
   render(){

     return(
        <Grid>

            <Cell col={1}>
                <h5 style={{marginTop: '0px'}}>{this.props.point}</h5>
            </Cell>
            <Cell col={11}>
               <h5 style={{marginTop: '0px'}}>{this.props.description}</h5>
               
            </Cell>
        </Grid>
        
     )
   }

}
export default Achievement;