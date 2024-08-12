import "./Book.css"
import OrderButton from "./OrderButton";

const Book = (props) => {
    return (
        <div className="one-book">
            <img src ={props.myimage} alt="harrypotter" /> 
            <h1 className="main-heading">{props.mytitle}</h1>
            <p>{2+2}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <OrderButton />
        </div>
    );
};

export default Book 




//nazev class NEMUZE byt pouzitej, jenom className