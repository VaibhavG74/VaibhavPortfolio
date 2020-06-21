import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Certification from './certification';
import Achievement from './Achievement';

class Resume extends Component {

    render() {

        return(
            <div>

                <Grid>

                    <Cell col={4}>

                        <div style={{textAlign:'center'}}>
                         <img
                          src="https://cdn3.iconfinder.com/data/icons/avatar-set/512/Avatar03-512.png"
                          alt="avatar"
                          style={{height:'200px'}}
                         
                         />
                           
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Vaibhav</h2>
                        <h4 style={{color: 'grey'}}>Web Developer</h4>
                        <hr style={{borderTop: '3px solid #004e92', width: '50%'}}/>
                        <p>A highly motivated self learner with never give up attitude and intermediate skills in web
development and photography.</p>
                        <hr style={{borderTop: '3px solid #004e92', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>Ghaziabad, Uttar Pradesh, India</p>
                        <h5>Phone</h5>
                        <p>+91 8800981724</p>
                        <h5>Email</h5>
                        <p>gupta.vaibhav54@gmail.com</p>
                        <hr style={{borderTop: '3px solid #004e92', width: '50%'}}/>                        

                    </Cell>
                    <Cell className='resume-right-col' col={8}>

                        <h2>Education</h2>
                         <Education
                           startYear={2015}
                           endYear={2019}
                           schoolName="ABES ENGINEERING COLLEGE, GHAZIABAD"
                           schoolDescription="B.Tech(Hons.) in Electronics and Communication Engineering with 77.2% aggregate."
                         />
                         <Education
                           startYear={2014}
                           endYear={2015}
                           schoolName="KDB PUBLIC SCHOOL, GHAZIABAD"
                           schoolDescription="Senior Secondary Education (12th) with 87.6% aggregate in PCM stream."
                         />
                         <Education
                           startYear={2012}
                           endYear={2013}
                           schoolName="KDB PUBLIC SCHOOL, GHAZIABAD"
                           schoolDescription="Higher Secondary Education (10th) with 10 CGPA."
                         />

                         <hr style={{borderTop: '3px solid #e22947'}}/>
                         
                         <h2>Certification</h2>
                         <Certification
                          monthOfCompletion="April 2020"
                          courseName="The Complete Web Developer Course 2.0"
                          courseDetails="Udemy"
                         />
                         <Certification
                          monthOfCompletion="April 2020"
                          courseName="Professional Diploma in Photography"
                          courseDetails="Shaw Academy, Grade: Distinction"
                          />
                         
                         <hr style={{borderTop: '3px solid #e22947'}}/>

                         

                         

                         <h2>Skills</h2>
                         <Skills
                            skill="HTML/CSS"
                            progress="90"
                         />
                         
                         <Skills
                            skill="Bootstrap"
                            progress="85"
                         />

                         <Skills
                            skill="JavaScript"
                            progress="70"
                         />
                         <Skills
                            skill="React"
                            progress="50"
                         />
                         <Skills
                            skill="php"
                            progress="30"
                         />

                          <hr style={{borderTop: '3px solid #e22947'}}/>
                        
                        <h2>Achievement</h2>
                         <Achievement
                          point="1."
                          description="My captured picture was featured by Nikon Asia on their Instagram Handle."
                          
                         />
                         <Achievement
                          point="2."
                          description="Mention of my picture in Editors Favourite section on National Geographic."
                         />
                         <Achievement
                          point="3."
                          description="Winner of CIRCUITCRAFT'18 under IEEE in 3rd year of college"
                         />
                        
                        <hr style={{borderTop: '3px solid #e22947'}}/>

                         <h2>Experience</h2>
                         <Experience
                           startYear="August 2019"
                           endYear="December 2019"
                           companyName="Dyson India"
                           jobDescription="Demo Expert (Voice) (Contract)"
                         /> 
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;