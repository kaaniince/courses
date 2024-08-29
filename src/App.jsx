import './App.css';
import Course from './Course';
import Header from './Header';
import { courses } from './data';

function App() {
  return (
    <div>
      <Header />
      {
        courses?.map((course) => (
          <Course course={course} key={course.id} />
        ))
      }
    </div>
  );
}

export default App;
