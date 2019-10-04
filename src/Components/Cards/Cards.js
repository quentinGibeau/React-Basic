import React from 'react';
import FlexView from 'react-flexview';

// ES6 syntax
const cards = (props) => {
    return (
        <FlexView hAlignContent='center' vAlignContent='center'     height='50%'
        marginTop='auto' wrap='true'
        basis={200}>
            <section className='Cards'>
                <article>
                    <h2  onClick={props.click}>I'm a Card about {props.name}</h2>
                    <p>{props.children}</p>
                    <input type="text" onChange={props.changed} />
                </article>
            </section>        
        </FlexView>
    )
};

export default cards;