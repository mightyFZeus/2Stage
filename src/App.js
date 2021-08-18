import "./styles.css";
import {Grid, LinearProgress, Card, CardContent, CardMedia} from '@material-ui/core'
import me from './me2.png'
import useStyles from './Styles'
import DisplayName from './DisplayName'
import zuri from './zuri.png'
import hng from './hng.png'


export default function App() {
  const classes = useStyles()
  return (
    <div className="App">
      
    <DisplayName />
    <div className={classes.toolbar} />
    <Grid container spacing={3}>
    <Grid item sm={12} md={4}>
      <Card>
        <CardContent>
         <img src={me} className='test' alt='profile-pic' />
        <p style={{fontWeight:'bold', textAlign:'center'}}>BOLARIN OLABISI</p>
        <p style={{fontWeight:'bold', textAlign:'center'}}>Frontend Dev</p>
        </CardContent>
      </Card>
    </Grid>
    <Grid className={classes.test} item sm={12} md={8}>
    <Card>
        <CardContent>
          
          <h2>About Me</h2>
          <p>Who is Bolarin Olabisi?

    I'm a Junior frontend web developer living in Ibadan, Nigeria who specializes in web development and open source. I am proficient in HTML and CSS and JavaScript including one of it's framework,REACT, and have built mutilpe simple projects with with these tools. Currently serving my country. In my spare time, I love contributing to Open Source Projects ,bulding projects, watching movies and football and I support MANCHESTER UNITED, GGMU!!!</p>
        <hr />
        <h4>PERSONAL INFO</h4>
        <div className='personal'>
          <div>
            
            <p><span style={{fontWeight:'bold'}}>Adress</span>: Ibadan Oyo State, Nigeria </p>
            <p><span style={{fontWeight:'bold'}}>Email</span>: bolarinolabisi36@gmail.com </p>
            <p><span style={{fontWeight:'bold'}}>Phone</span>: 09015752977</p>
          </div>
          <div>
            <p><span style={{fontWeight:'bold'}}>Main Language</span>: Yoruba</p>
            <p><span style={{fontWeight:'bold'}}>Second Language</span>: English</p>
            <p><span style={{fontWeight:'bold'}}>Native Language</span>: Yoruba</p>
           
            <p><span style={{fontWeight:'bold'}}>Nationality</span>: Nigerian</p>
          </div>
        </div>
        </CardContent>
      </Card>
      
    </Grid>
    </Grid>
    <div className={classes.toolbar} />
    <Grid container justifyContent='flex-end' >
    <Grid className={classes.test} item md={8} sm={12}>
        <Card>
          <CardContent>
          <h4>PROFESSIONAL SKILLS</h4>
            <div className='prof'>
              <div>
              
              <p style={{fontWeight:'bold'}}>
                HTML
              <LinearProgress variant="determinate" value='90'  />
              </p>
              <p style={{fontWeight:'bold'}}>
               CSS
              <LinearProgress variant="determinate" value='90'  />
              </p>
              <p style={{fontWeight:'bold'}}>
               JAVASCRIPT
              <LinearProgress variant="determinate" value='90'  />
              </p>
              
              <p style={{fontWeight:'bold'}}>
                REACT JS
              <LinearProgress variant="determinate" value='90'  />
              </p>
              <p style={{fontWeight:'bold'}}>
               REACT NATIVE
              <LinearProgress variant="determinate" value='90'  />
              </p>
              <p style={{fontWeight:'bold'}}>
               TYPESCRIPT
              <LinearProgress variant="determinate" value='90'  />
              </p>
              </div>
            </div>
            
          </CardContent>
        </Card>
    </Grid>
    </Grid>
    <div className={classes.toolbar} />
    <Grid container justifyContent='flex-end'>
      <Grid item md={8} sm={12}>
        <Card>
          <CardContent>
            <h4>Education</h4>
        <div className='education-div'>
          <div>
            <p style={{textDecoration:'underline'}}>University</p>
            <p>University Of Abuja</p>
            <p>Bsc Computer Science</p>
          </div>
          <div>
            <p style={{textDecoration:'underline'}}>SSCE</p>
            <p>Oyun Baptist high school,ijagbo</p>
            <p>Bsc Computer Science</p>
          </div>
        </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
      <div className={classes.toolbar} />
      <Grid container justifyContent='flex-end'>
        <Grid item md={8} sm={12}>
          
            <Card>
            <h4>EXPERIENCE</h4>
            
              <CardContent>
              <div>
            <div>
              <p style={{textDecoration:'underline'}}>Intership @</p>
              <p>1. ITMS(University of Abuja, Abuja), 2016-2018</p>
              <p>2. HNGi8, 2021</p>
            </div>
            
            </div>


              </CardContent>
            </Card>
        </Grid>
      </Grid>
    <Grid container justifyContent='flex-end'>
    <Grid item sm={12} md={8}>
        <div className={classes.toolbar} />
        <div className='image'>
          <a href='https://internship.zuri.team/'>
                 <img src={zuri} style={{width:'200px'}} />
          </a>
          <a href="https://hng.tech/">
             <img src={hng} style={{width:'50px'}} />
        
          </a>
   
       
        </div>
      </Grid>
    </Grid>
    </div>
  );
}
