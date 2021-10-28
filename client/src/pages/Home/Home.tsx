import styled from "styled-components"
import circles from "./circles.svg"
import "./Home.css"
import { About } from "../../components/About/About";
import { Projects } from "../../components/Projects/Projects"
import { Hero } from "../../components/Hero/Hero"

// https://www.google.com/search?q=fullstack+developer+svg+free&tbm=isch&chips=q:fullstack+developer+svg+free,online_chips:vector:atrgsRuBOkQ%3D&hl=en&sa=X&ved=2ahUKEwjOo5PL6rLzAhUMmhoKHbFhDAsQ4lYoBHoECAEQGQ&biw=1519&bih=664


const Home: React.FC = () => {
    return (
        <div>
            <OpenningContainer>
                <div className="check">
                    <Hero></Hero>
                </div>
                <img className='circles' src={circles} alt="circleSvg"></img>
            </OpenningContainer>
            <About></About>
            <Projects></Projects>
        </div>)
}

export { Home }


const OpenningContainer = styled.div`
width:100%;
z-index:1;
background: ${(props) => {
        return props.theme.mainBodyInfo
    }};


@media (max-width:812px){
top:initial;
left:initial;
top:initial;
left:initial;

}    
`



