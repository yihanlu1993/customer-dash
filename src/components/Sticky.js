import React from 'react';
import styled from 'styled-components';


const LeftBox = styled.div`
    height: 100%
    background: #f4f5f6;
    border: 0.4rem solid #9b4dca;
`
const StickyLayOutParent = styled.div`
    height: 50rem;
    background: #f4f5f6;
`

const Sticky = () => {
    return <div>
        <div className="row">
            <div className={'column column-25'}>
                <LeftBox>
                    <h4>Something on the left</h4>
                </LeftBox>
            </div>
            <div className={'column'}>
                <StickyLayOutParent>
                    <div className="sticky-layout">
                        <div className="sticky-layout__header">Header</div>
                        <div className="sticky-layout__content">
                            <p>Scrollable Content</p>
                            <p>Scrollable Content</p>
                            <p>Scrollable Content</p>
                            <p>Scrollable Content</p>
                            <p>Scrollable Content</p>
                            <p>Scrollable Content</p>
                            <p>Scrollable Content</p>
                            <p>Scrollable Content</p>
                            <p>Scrollable Content</p>
                            <p>Scrollable Content</p>
                            <p>Scrollable Content</p>
                            <p>Scrollable Content</p>
                            <p>Scrollable Content</p>
                            <p>Scrollable Content</p>
                            <p>Scrollable Content</p>
                            <p>Scrollable Content</p>
                        </div>
                        <div className="sticky-layout__footer">Footer</div>
                    </div>
                </StickyLayOutParent>
            </div>
        </div>
    </div>
}

export default Sticky;