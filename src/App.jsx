import './App.css';
import Navbar2 from './Navbar2';
import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home"



import Footer from './component/Footer';
import Courses from './pages/Courses';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import About from './pages/About';
import Login from './pages/Login';


export default function App() {

  const routes = [
    { path: '/', element: <Home /> },
    { path: '/courses', element: <Courses /> },
    { path: '/blog', element: <Blog /> },
    { path: '/careers', element: <Careers /> },
    { path: '/about', element: <About /> },
    { path: '/login', element: <Login /> }


  ]


  return (
    <>


      {/* <Navbar2/> */}


      <Navbar2 />

      <Routes>

        {
          routes.map((route, index) => {
            return (
               
                <Route
                key={index}
                  path={route.path}
                  element={route.element}

                />
              
            )
          })
        }

      </Routes>

      {/* <Routes>

<Route path='/' element={<Home/>}/>
<Route path='/courses' element={<Courses/>}></Route>
<Route path='/blog' element={<Blog/>}/>
<Route path='/careers' element={<Careers/>}
/>
<Route path='/about' element={<About/>}/>
<Route path='/login' element={<Login/>}/>

</Routes> */}



      <Footer />


      {/* <Calculator/> */}


    </>
  )



}










//   const [data, setdata] = useState([])
//   const [loading, setloading] = useState(true)
//   const [error, seterror] = useState(null)
//   const [search, setsearch] = useState('')

//   async function fetchdata() {
//     try {
//       const response = await fetch('https://dummyjson.com/users')
//       if (!response.ok) {
//         throw new Error('something went wrong')
//       }
//       const data = await response.json()
//       setdata(data.users)
//       console.log(data)

//     } catch (error) {
//       seterror(error.message)
//     } finally {
//       setloading(false)
//     }
//   }

//   useEffect(() => {
//     fetchdata()
//   }, [])

//   if (loading) {
//     return <h1>Loading...</h1>
//   }

//   if (error) {
//     return <h1>{error}</h1>
//   }

//   function handledelete(index) {
//     setdata(data.filter((item, i) => {
//       return i !== index
//     }))
//   }

//   const filtersearch = data.filter((item) => {
//     return item.firstName.toLowerCase().includes(search.toLowerCase())
//   })




//   return (
//     <>
//       <h1>App component</h1>
//       <input type="text" placeholder='search' onChange={(e) => setsearch(e.target.value)} />

//       {
//         filtersearch.map((item, index) => {
//           return (
//             <div key={item.id}>
//               <h1>{item.firstName} - {item.lastName}</h1>
//               <button onClick={() => handledelete(index)}>Delete</button>
//             </div>

//           )
//         })
//       }

//     </>
//   )
// }