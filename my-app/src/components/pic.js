import React, { useEffect } from 'react';
import { connect } from 'react-redux';
 
import { getPic } from '../actions/actions'
import styled from 'styled-components'

const Button = styled.button`
  background: white;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  padding:5rem;
  font-size:5rem;
  transition: 0.5s;
  margin:1rem;
    :hover{
        color:white;
        background:palevioletred;
    }
`

const Img = styled.img`
width:50rem;
height:50rem;

`

const Div = styled.div`
background:powderblue;
`

const H2 = styled.h2`
font-size:5rem;
color: palevioletred;
`

const H1 = styled.h2`
font-size:3rem;
color: palevioletred;
`
const H11 = styled.h2`
font-size:3rem;
color: powderblue;
`

const Pic = (props) => {
    const { author, picture, isFetching, error } = props;
    const handleClick = (e)=> {
        window.location.reload();
        props.getPic();
    }
  
    useEffect(() => {
      props.getPic();
    }, []);
  
    if (error) {
      return <h2>We got an error: {error}</h2>;
    }
  
    if (isFetching) {
      return <h2>Loading Artwork ...</h2>;
    }
  
    return (
      <>
        <H1>Author</H1>
        <H11>{author}</H11>
        <Div>
        <H2> ArtWork </H2>
        <Img src={picture} alt="a" width="300" height="300"/>
        <div>
        <Button onClick={handleClick}>Get a new Picture</Button>
        </div>
        </Div>
      </>
    );
  };
  
  const mapStateToProps = state => {
      console.log(state.author)
    return {
        author: state.author,
        picture: state.picture,
        isFetching: state.isFetching,
        error: state.error
    };
  };
  
  export default connect(mapStateToProps, { getPic })(Pic);