import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, Button, CardMenu, IconButton, CardText, CardActions } from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }
    
toggleCategories() {

    if(this.state.activeTab === 0){
        return(

            <div className="projects-grid">

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
               <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://ncoughlin.com/wp-content/uploads/2018/10/js.png) center / cover'}}>Project 1</CardTitle>
               <CardText>
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
               </CardText>
               <CardActions border>
                  <Button colored>Github</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live</Button>
                  
               </CardActions>
               <CardMenu style={{color: '#fff'}}>
                 <IconButton name="share" />
               </CardMenu>
            </Card>
            
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
               <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://ncoughlin.com/wp-content/uploads/2018/10/js.png) center / cover'}}>Project 2</CardTitle>
               <CardText>
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
               </CardText>
               <CardActions border>
                  <Button colored>Github</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live</Button>
                  
               </CardActions>
               <CardMenu style={{color: '#fff'}}>
                 <IconButton name="share" />
               </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
               <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://ncoughlin.com/wp-content/uploads/2018/10/js.png) center / cover'}}>Project 3</CardTitle>
               <CardText>
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
               </CardText>
               <CardActions border>
                  <Button colored>Github</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live</Button>
                  
               </CardActions>
               <CardMenu style={{color: '#fff'}}>
                 <IconButton name="share" />
               </CardMenu>
            </Card>

            </div>
        )
   }
   else if(this.state.activeTab === 1){
    return(
        <div className="projects-grid">

        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/c/c1/PHP_Logo.png) center / cover'}}>Project 1</CardTitle>
           <CardText>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
           </CardText>
           <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live</Button>
              
           </CardActions>
           <CardMenu style={{color: '#fff'}}>
             <IconButton name="share" />
           </CardMenu>
        </Card>
        
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/c/c1/PHP_Logo.png) center / cover'}}>Project 2</CardTitle>
           <CardText>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
           </CardText>
           <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live</Button>
              
           </CardActions>
           <CardMenu style={{color: '#fff'}}>
             <IconButton name="share" />
           </CardMenu>
        </Card>

        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/c/c1/PHP_Logo.png) center / cover'}}>Project 3</CardTitle>
           <CardText>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
           </CardText>
           <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live</Button>
              
           </CardActions>
           <CardMenu style={{color: '#fff'}}>
             <IconButton name="share" />
           </CardMenu>
        </Card>

        </div>
    )
    }
    else if(this.state.activeTab === 2){
        return(
            <div className="projects-grid">

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
               <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://create-react-app.dev/img/logo-og.png) center / cover'}}>Project 1</CardTitle>
               <CardText>
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
               </CardText>
               <CardActions border>
                  <Button colored>Github</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live</Button>
                  
               </CardActions>
               <CardMenu style={{color: '#fff'}}>
                 <IconButton name="share" />
               </CardMenu>
            </Card>
            
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
               <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://create-react-app.dev/img/logo-og.png) center / cover'}}>Project 2</CardTitle>
               <CardText>
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
               </CardText>
               <CardActions border>
                  <Button colored>Github</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live</Button>
                  
               </CardActions>
               <CardMenu style={{color: '#fff'}}>
                 <IconButton name="share" />
               </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
               <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://create-react-app.dev/img/logo-og.png) center / cover'}}>Project 3</CardTitle>
               <CardText>
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
               </CardText>
               <CardActions border>
                  <Button colored>Github</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live</Button>
                  
               </CardActions>
               <CardMenu style={{color: '#fff'}}>
                 <IconButton name="share" />
               </CardMenu>
            </Card>

            </div>
        )
    }
}

    
     
    render() {

        return(
            <div className="category-tabs">
              <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>JavaScript</Tab>
                    <Tab>PHP</Tab>
                    <Tab>React</Tab>
              </Tabs>

              
                  <Grid>
                      <Cell col={12}>

                          <div className="content">{this.toggleCategories()}</div>
                      </Cell>
                      
                  </Grid>
                  
              
            </div>
        )
    }
}

export default Projects;