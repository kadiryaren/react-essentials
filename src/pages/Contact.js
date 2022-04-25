
import NavbarComponent from "../components/NavbarComponent"
// Contacts Component

export default function Contact(props){
    return(
        <div className={props.theme === "dark" ? 'text-center text-light' : 'text-center text-dark'}>
            <NavbarComponent theme={props.theme} setTheme={props.setTheme} />
            <h1 className="mt-5">Say my name!</h1>

            <div className="mt-3"><i class="bi bi-github"></i> Github: kadiryaren</div>
            <div className="mt-3"><i class="bi bi-linkedin"></i> Linkedin: kadiryaren</div>

        </div>
    )
};