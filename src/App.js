import './App.scss';
import headshot from './assets/laynet.jpeg';
import projectData from './project-data';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>home</li>
          <li>web</li>
          <li>experience</li>
          <li>resume</li>
          <li>contact</li>
        </ul>
      </nav>
      <section className='bio'>
        <img className='headshot' src={headshot} alt='' />
        <div className='bio-content'>
          <h1>Layne Taylor</h1>
          <h2>Front end web developer for hire</h2>
          <p>
            Motivated junior web developer looking for a role as a front end or
            full stack developer. 4 years of coding experience with a varied and
            diverse career and education.
          </p>
        </div>
      </section>
      <section className='projects card-grid'>
        {projectData.map((item) => {
          return (
            <div className='card'>
              <a href={item.link} target='_blank'>
                <img src={item.screenShot} alt='' />
              </a>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default App;
