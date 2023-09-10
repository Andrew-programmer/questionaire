import styled from 'styled-components'

type ButtonProps = {
    children?: React.ReactNode,
    onClick: () => void,
}

const StyledButton = styled.button`
    background-color: #69C6E0;
    border: none;
    border-radius: 10px;
    padding: .5rem 2rem;

    &:hover{
        transition: 0.2s linear;
        background-color: black;
        color: white;
        cursor: pointer;
    }
`

export const Button: React.FC<ButtonProps> = ({children, onClick}) => {
    return (
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
    );
}