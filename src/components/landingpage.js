import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {

    render() {

        return(
            <div style={{width: '100%', height: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                          src="https://cdn3.iconfinder.com/data/icons/avatar-set/512/Avatar03-512.png"
                          alt="avatar"
                          className="avatar-image"
                        />

                        <div className="banner-text">
                           <h1>Web Developer</h1>
                           <hr/>
                           <p>HTML | CSS | JavaScript | Bootstrap | React</p>
                           <div className="social-links">
                               
                               {/*LinkedIn*/}
                               <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                               </a>

                               {/*GIThub*/}
                               <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"/>
                               </a>

                               {/*Instagram*/}
                               <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-instagram" aria-hidden="true"/>
                               </a>

                               {/*Facebook*/}
                               <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook-square" aria-hidden="true"/>
                               </a>

                           </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;