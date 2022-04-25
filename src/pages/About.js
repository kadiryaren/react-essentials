import NavbarComponent from "../components/NavbarComponent";
// About Component
export default function About(props){

    return (
        <div className={props.theme === "dark" ? 'text-center text-light' : 'text-center text-dark'}>
            <NavbarComponent theme={props.theme} setTheme={props.setTheme} />
            <h1 className="mt-5">Who am I?</h1>

            <span>3rd grade CS student and freelance app developer</span>

        </div>   
    );
};
