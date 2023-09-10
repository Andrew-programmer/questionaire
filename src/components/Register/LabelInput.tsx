import styled from 'styled-components'

type LabelInputProps = {
    placeholder: string;
    children?: React.ReactNode;
    props: {};
}

const StyledLabel = styled.label`
    margin: 1rem 0;
`

const StyledInput = styled.input`
    width: 100%;
`

export const LabelInput: React.FC<LabelInputProps> = ({placeholder, children, ...props}) => {
    return (
        <StyledLabel>
            {children}
            <StyledInput placeholder={placeholder} {...props}/>
        </StyledLabel>
    );
}