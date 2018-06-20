import React from 'react';
import styled from 'styled-components';

import ErrorMsg from './ErrorMsg';

const EditFormContainer = styled.div`
    border: 0;
    border-left: .3rem solid #9b4dca;
    color: #655d5d;
    background: #f4f5f6;
    height: 100%;
    width: 100%;
`

const SaveButton = styled.button`
    float: right;
`

const EditFromInput = styled.input`
    background-color: #ffffff!important;
`

const ButtonDiv = styled.div`
    height: 4rem;
`

const EditForm = ({
    id,
    onNameChange,
    onEmailChange,
    onClickSave,
    name,
    email,
    error
}) => {
    return (
        <EditFormContainer>
            <form>
                <fieldset>
                    <label>id</label>
                    <p>{id}</p>
                    <label>Name</label>
                    <EditFromInput value={name} type="text" placeholder="" id="nameField" onChange={onNameChange}/>
                    {error.name && <ErrorMsg>{error.name}</ErrorMsg>}
                    <label>Email</label>
                    <EditFromInput value={email} type="text" placeholder="" id="emailField" onChange={onEmailChange}/>
                    {error.email && <ErrorMsg>{error.email}</ErrorMsg>}
                </fieldset>
                <ButtonDiv>
                    <SaveButton
                        disabled={error.email || error.name}
                        onClick={(e)=>onClickSave(e,id)}
                    >Save</SaveButton>
                </ButtonDiv>
            </form>
        </EditFormContainer>
    )
}

export default EditForm;