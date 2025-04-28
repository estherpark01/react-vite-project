import Main from '../pages/Main';
import About from '../pages/About';
import Position from '../pages/Position';
import Data from '../pages/Data';
import Notice from '../pages/Notice';

const navpass = [
    {
       path:'/',
       component:Main
     },
     {
       path:'/About/*',
       component:About
     },
    {
      path:'/Position',
      component:Position
    },
    {
     path:'/Data',
     component:Data
    },
    {
     path:'/Notice',
     component:Notice
    }
  ];
  
  export default navpass;