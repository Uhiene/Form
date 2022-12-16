import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"
import FormPage from "./component/FormPage"



const App = () => {
  return (
    <div className="min-h-screen">
      <FormPage/>

      <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default App
