import "./styles.css";
import {Grid, LinearProgress, Card, CardContent, CardMedia} from '@material-ui/core'
import me from './me2.png'
import useStyles from './Styles'


export default function App() {
  const classes = useStyles()
  return (
    <div className="App">
    <Grid container spacing={3}>
    <Grid item sm={12} md={4}>
      <Card>
        <CardContent>
         <img src={me} className='test' alt='profile-pic' />
        </CardContent>
      </Card>
    </Grid>
    <Grid className={classes.test} item sm={12} md={8}>
    <Card>
        <CardContent>
          
          <h2>About Me</h2>
          <p>Who is Bolarin Olabisi?

    I'm a Junior frontend web developer living in Ibadan, Nigeria who specializes in web development and open source. I am proficient in HTML and CSS and JavaScript including one of it's framework,REACT, and have built mutilpe simple projects with with these tools. Currently serving my country. In my spare time, I love contributing to Open Source Projects ,bulding projects, watching movies and football and I support MANCHESTER UNITED, GGMU!!!</p>
        <div className='personal'>
          <div>
            <p>PERSONAL INFO</p>
            <p>Adress: 123 lorem </p>
            <p>Email: bolarinolabisi36@gmail.com </p>
            <p>phone: 09015752977</p>
          </div>
          <div>
            <p>main Language: Yoruba</p>
            <p>Second Language: English</p>
            <p>Native Language: Yoruba</p>
            <p>Native Language: Yoruba</p>
            <p>Nationality: Nigerian</p>
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
            <div className='prof'>
              <div>
              <h4>PROFESSIONAL SKILLS</h4>
              <p>
                HTML
              <LinearProgress variant="determinate" value='90'  />
              </p>
              <p>
               CSS
              <LinearProgress variant="determinate" value='90'  />
              </p>
              <p>
               JAVASCRIPT
              <LinearProgress variant="determinate" value='90'  />
              </p>
              
              <p>
                REACT JS
              <LinearProgress variant="determinate" value='90'  />
              </p>
              <p>
               REACT NATIVE
              <LinearProgress variant="determinate" value='90'  />
              </p>
              <p>
               TYPESCRIPT
              <LinearProgress variant="determinate" value='90'  />
              </p>
              </div>
            </div>
            
          </CardContent>
        </Card>
    </Grid>
    </Grid>
    </div>
  );
}
