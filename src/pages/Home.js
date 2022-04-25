import NavbarComponent from "../components/NavbarComponent"
import "../App.css";
// Home Component
export default function Home(props){
   

    return (
        <div className="text-center">
            <NavbarComponent theme={props.theme} setTheme={props.setTheme} />
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                {props.theme === "dark" ? (<h1 className="scale text-light">Welcome to <span className="text-primary">ReactJS</span> Essentials</h1>) : (<h1 className="scale text-dark">Welcome to <span className="text-primary">ReactJS</span> Essentials</h1>)}
                
                
                <ul className="mt-3 fs-5">
                    {props.theme === "dark" ? (<li className="text-light">In this React Project I just learned how to use <span className="text-danger scale">React Hooks</span> and <span className="text-success">React Routers</span>!  </li>) : (<li className="text-dark">In this React Project I just learned how to use <span className="text-danger scale">React Hooks</span> and <span className="text-success">React Routers</span>!  </li>)}
                    
                </ul>
                <div className=" w-50 h-25 d-flex justify-content-center align-items-center">
                    <img id="image" className="mt-5" src="https://avatars.githubusercontent.com/u/25438750?v=4" alt="kadiryaren" />
                   
                </div>
                
            </div>
        </div>   
    )
}