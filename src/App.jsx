import './App.css';
import Course from './Course';
import Header from './Header';
import { courses } from './data';
import './css/Course.css';

function App() {
  return (
    <div>
      <Header />
      <div  className='course-main'>
          {
            courses?.map((course) => (
              <Course course={course} key={course.id} />
            ))
          }
      </div>
    </div>
  );
}

export default App;
