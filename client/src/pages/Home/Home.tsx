import { About } from "../../components/About/About";
import { Projects } from "../../components/Projects/Projects";
import { Hero } from "../../components/Hero/Hero";
import styled from "styled-components";
// https://www.google.com/search?q=fullstack+developer+svg+free&tbm=isch&chips=q:fullstack+developer+svg+free,online_chips:vector:atrgsRuBOkQ%3D&hl=en&sa=X&ved=2ahUKEwjOo5PL6rLzAhUMmhoKHbFhDAsQ4lYoBHoECAEQGQ&biw=1519&bih=664

const Home: React.FC = () => {
    return (
        <div>
            <OpenningContainer>
                <Hero></Hero>
            </OpenningContainer>
            <About></About>
            <Projects ></Projects>
        </div>);
}

export { Home };

const OpenningContainer = styled.div`
background: ${(props) => {
        return props.theme.mainBodyInfo
    }};
`;





