import "./OrderButton.css"

const OrderButton = () => {
    return ( 
       <button type="Button" className = "btn">Objednat</button>
    );
};
   
export default OrderButton


// kompotenta je obycejna funkce = () => { }
  // komponenta ma stejny nazev jako nazev souboru
  // kompotentna obsahuje return
  //na konci souoboru musi byz radek s exportem
  // v return musi neco byt
  // return dokaze vratit jenom jeden tag (proto udelame div) nebo <> abychom neneli div v divu atd
  // to co piseme tedy nahore v h1 a p neni to html, ale jde o JSX - javascript XML = JSX
  // kdyz neco vlozim do {} takt obude brat jako js funkce, treba {2+2}