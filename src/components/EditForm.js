import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
                    {error && error.name && <ErrorMsg>{error && error.name}</ErrorMsg>}
                    <label>Email</label>
                    <EditFromInput value={email} type="text" placeholder="" id="emailField" onChange={onEmailChange}/>
                    {error && error.email && <ErrorMsg>{error.email}</ErrorMsg>}
                </fieldset>
                <ButtonDiv>
                    <SaveButton
                        disabled={(error && error.email) || (error && error.name)}
                        onClick={(e)=>onClickSave(e,id)}
                    >Save</SaveButton>
                </ButtonDiv>
            </form>
        </EditFormContainer>
    )
}
EditForm.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onNameChange: PropTypes.func.isRequired,
    onEmailChange: PropTypes.func.isRequired,
    onClickSave: PropTypes.func.isRequired,
    name: PropTypes.string,
    email: PropTypes.string,
    error: PropTypes.object
}

export default EditForm;