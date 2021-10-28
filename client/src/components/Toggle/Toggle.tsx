import { useTypedSelector } from "../../redux/hooks/useTypeSelector"
import styled from "styled-components"
import { useDispatch } from 'react-redux'
import { darkMode } from "../../redux/actions/darkMode"

const InputWrapper = styled.label`
position:relative;
margin:10px;

`
//avoiding jump of toggle
const Input = styled.input`
/* position:absolute; */
display:none;
left:-9999px;
top:-9999px;
&:checked + span{
    background-color:#1890ff;


&:before{
    left:27px;
}
}
`

const Slider = styled.span`
display:flex;
cursor:pointer;
width:50px;
height:25px;
border-radius:100px;
background-color:#bfbfbf;
position:relative;
transition:background-color 0.2s ;

@media (max-width:1400px){
     cursor:initial
}

&:before{
    content:"";
    position:absolute;
    top:2px;
    left:2px;
    width:21px;
    height:21px;
    border-radius:45px;
    transition:0.2s;
    background:#fff;
    box-shadow:0 2px 4px;
}


 &:active:before{
     width:28px;
 }

`
const Toggle = ({ onChange }: any) => {
    const dispatch = useDispatch();
    const darkModeInfo = useTypedSelector(state => {
        return state.darkMode
    });

    const updateTheme = () => {
        if (darkModeInfo.type === 'light') {
            dispatch(darkMode('dark'))
        }
        else {
            dispatch(darkMode('light'))
        }
    }

    return (
        <InputWrapper>
            <Input type='checkbox' onChange={onChange} ></Input>
            <Slider onClick={updateTheme}></Slider>
        </InputWrapper>
    )
}

export { Toggle }