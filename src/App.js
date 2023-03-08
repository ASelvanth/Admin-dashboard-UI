import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Teachers from './Components/Teachers';
import Login from './Components/Login';
import Portal from './Components/Portal';
import Students from './Components/Students';

import CreateTeachers from './Components/CreateTeacher';
import CreateStudents from './Components/CreateStudent';
import EditTeacher from './Components/EditTeacher';
import EditStudent from './Components/EditStudent';

import { UserProvider } from './context/userContext';

function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Portal' element={<Portal />} >
            <Route path="TeachersList" element={<Teachers />} />
            <Route path="TeachersList/CreateTeachers" element={<CreateTeachers />} />
            <Route path="TeachersList/EditTeacher/:id" element={<EditTeacher />} />
            <Route path="StudentList" element={<Students />} />
            <Route path="StudentList/CreateStudents" element={<CreateStudents />} />
            <Route path="StudentList/EditStudent/:id" element={<EditStudent />} />
            <Route path='*' element={<Login />} />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>

  );
}

export default App;