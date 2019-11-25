import styled from 'styled-components';

const ScrollWrapper = styled.div`
    margin-top: 10%;
    position: relative;
    .pc{
        display:none; 
    }
    .box1, .box2, .box3 {
        width: 4px; 
        height: 4px; 
        background: #5b5b5b; 
    }
    .box1, .box2, .box3 {
        margin-bottom:4%;
    }

    .scroll-text {
        position: absolute;
        margin: 0;
        top: 0;
        left: 20px;
    }

    div.scroll {
        -webkit-animation: mover 1s infinite  alternate;
        animation: mover 1s infinite  alternate;
    }
    @-webkit-keyframes mover {
        0% { transform: translateY(0); }
        100% { transform: translateY(-10px); }
    }
    @keyframes mover {
        0% { transform: translateY(0); }
        100% { transform: translateY(-10px); }
    }
    
    @media only screen and (min-width:415px) and (max-width:768px){
        .box1, .box2, .box3{
            margin-bottom:2%;
        }
        .pc{
            display:none; 
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        .box1, .box2, .box3{
            margin-bottom:2%;
        }
        .mobile{
            display:none;   
        }
        .pc{
            display:block; 
        }
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        margin-top: 5%;
        .mobile{
            display:none;   
        }
        .pc{
            display:block; 
        }
        .box1, .box2, .box3{
            margin-bottom:1.5%;
        }
    }
    @media only screen and (min-width:1441px){
        margin-top: 5%;
        .mobile{
            display:none;   
        }
        .pc{
            display:block; 
        }
        .box1, .box2, .box3{
            margin-bottom:1.5%;
        }
    }
`;

export default ScrollWrapper;