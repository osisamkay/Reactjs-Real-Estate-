import React from 'react';
import styled from 'styled-components';


const ListItemStyle = styled.div`
  border-radius: .4em;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .2);
  background: #031249;
  color: #fff;
  overflow: hidden;
  margin:10px;

  img{
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  div{
    padding: 5px 10px;
  }
  h3, h5{
    margin: 5px 0;
  }
  h3{
    margin: 12px 0;
    font-weight: 300;
    font-size: 25px;
  }
  a{
    color: inherit;
  }
  
`;



const ListItems = ({ children, rating, image }) => (
  <ListItemStyle>
    <img src={image || 'http://placehold.it/200'} alt="List item" />
    <div>
      {children}
    </div>
  </ListItemStyle>
)

export default ListItems;
