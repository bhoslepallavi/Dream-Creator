import { createGlobalStyle} from 'styled-components';

export const Globalstyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizzing: border-box;
    ${'' /* background-color: blue; */}
}

.main-header{
    display: grid;
    grid-template-columns: auto auto ;
    ${'' /* padding: 40px; */}
    widhth: 80vw;
    height: 80px;
    background-color: #68b6c4;
    ${'' /* align-item: space-between;
    background-image: url("images/sweet.jpg");
    background-repeat: no-repeat;
    background-size:cover;
    height: 550px; */}
}

.main-header img{
    width: 350px;
    height: 60px;
    padding: 10px 30px;
    grid-column: 1 / 2;
}

.menuIcon{
}

.navbar-list{
    display:flex;
      gap: 100px;
      padding: 25px 30px;
}

.navbar-list li a{
    list-style:none;
    text-decoration: none;
    justify-content: space-between;
    align-item:center;
    font-size: 20px;
    
}

.navbar-list li {
    list-style:none;   
}

.navbar-list li:hover{
    transform: scale(0.9);
    transition: color 0.4s linear;
}

.navbar-list li a {
           ${'' /* text-decoration: none; */}
           color:black;
           text-transform: uppercase;
           &:hover, &:active{
            color: #df0a3d;
            transition: color 0.3s linear;
            
           }




`