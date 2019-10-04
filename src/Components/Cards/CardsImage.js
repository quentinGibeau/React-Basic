import React from 'react';
import FlexView from 'react-flexview';

// ES6 syntax
const cardsImage = (props) => {
    return (
        <FlexView hAlignContent='center' vAlignContent='center'     height='50%'
        marginTop='auto' wrap='true'
        basis={200}>
            <section className='CardsImage'>
                <article>
                    <img src={require('./logo.svg')} alt='Logo React' />
                    <p>{props.children}</p>
                </article>
            </section>  
            <section className='CardsImage'>
                <article>
                    <img src={require('./logo.svg')} alt='Logo React' />
                    <p>{props.children}</p>
                </article>
            </section>   
            <section className='CardsImage'>
                <article>
                    <img src={require('./logo.svg')} alt='Logo React' />
                    <p>{props.children}</p>
                </article>
            </section>   
            <section className='CardsImage'>
                <article>
                    <img src={require('./logo.svg')} alt='Logo React' />
                    <p>{props.children}</p>
                </article>
            </section>         
        </FlexView>
    )
};

export default cardsImage;