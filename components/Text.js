import React from 'react';

import styled from 'styled-components';


export default TextStyle = ({ ...props }) => {
    return <Text {...props}> {props.children} </Text>
}

const Text = styled.Text`
    color: ${props => props.color ?? "#ffffff"};

    ${({ title, large, medium, small }) => {
        switch (true) {
            case title:
                return `font-size:32px`;
            case large:
                return `font-size:28px`;
            case medium:
                return `font-size:18px`;
            case small:
                return `font-size:13px`;
            default:
                return `font-size:14px`;
        }
    }};

    ${({ light, bold, heavy }) => {
        switch (true) {
            case light:
                return `font-weight:200`;
            case bold:
                return `font-weight:600`;
            case heavy:
                return `font-weight:700`;
            default:
                return `font-weight:400`;
        }
    }};

    ${({ center, right, left }) => {
        switch (true) {
            case center:
                return `text-align:center`;
            case right:
                return `text-align:right`;
            case left: 
                return `text-align:left`;
            default:
                return `text-align:justify`;
        }
    }};

    ${({ black, red }) => {
        switch (true) {
            case black:
                return `color:#2d3436`;
            case red:
                return `color:#d63031`;
            default:
                return `color:#ffffff`;
        }
    }};

   
`;