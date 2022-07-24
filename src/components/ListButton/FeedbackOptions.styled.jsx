
import styled from '@emotion/styled';


export const List = styled.ul`
display: flex;
list-style: none;
    padding: 0;
    margin: 0 0 20px;
    gap: 12px;
`;

export const Button = styled.button`
    padding: 4px 8px;
    font-size: 16px;
    display: flex;
    min-width: 80px;
    justify-content: center;
    border-radius: 5px;
    border: 1px solid ghostwhite;
    cursor: pointer;

    &:active{
    background-color: #82B1FF;   
    border:  1px solid #82B1FF;
        }

        @media (min-width: 420px) {
         min-width: 130px;
         padding: 8px;
      }

       @media (min-width: 768px) {
         min-width: 230px;
         padding: 8px 12px;
      }

      
`;
