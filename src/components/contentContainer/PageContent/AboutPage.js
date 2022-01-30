import { AccountBox } from '@material-ui/icons';

function AboutPage() {
    return <div>
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ margin: "0 0", padding: '0 0', color: '#3266a8' }}>{<AccountBox style={{ color: '#3266a8', marginRight: '3px' }}></AccountBox>}About Me</h1></div>
        <p>Hi, I’m Richard! I’m a (soon to be) B.Sc Computer Science graduate at
            The University of British Columbia based in Vancouver, BC.
            I am currently seeking a full-time position as a junior software developer.
        </p>
        <p>I have worked in agile development team settings in both front-end and back-end development,
            creating high quality features to completion. Throughout my education as a computer science student,
            I have gained valuable experience in working in teams to create elegant solutions for difficult problems.
            As a result, I have become aware of my style of learning and the work environments that I thrive in,
            as well as honing my skills in collaborating with teammates and stakeholders when developing products.
        </p>
        <p>Outside of development, I enjoy trying new foods and staying active.
            Since a very young age, I have had a passion for cooking/baking,
            which has been further amplified by the amount of free time I have as a result of COVID-19.
            However, my newest hobby is training my puppy, who I have had since August 2021, and haven’t shut up about since!
        </p>
    </div>;
}

export default AboutPage;
