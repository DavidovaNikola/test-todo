import Book from "./components/Book"


const App = () => {
    const books = [
    {
      id: 1,
      image: "https://www.knihydobrovsky.cz/thumbs/book-detail-fancy-box/mod_eshop/produkty/h/harry-potter-a-kamen-mudrcu-9788000061917_10.jpg",
      title:"Nazev knihy 1 "
    },
    {
      id: 2,
      image: "https://www.knihydobrovsky.cz/thumbs/book-detail-fancy-box/mod_eshop/produkty/h/harry-potter-a-kamen-mudrcu-9788000067582_2.jpg",
      title:"Nazev knihy 2 "
    },
    {
      id: 3,
      image: "https://www.knihydobrovsky.cz/thumbs/book-detail-fancy-box/mod_eshop/produkty/h/harry-potter-a-princ-dvoji-krve-9788000067599_7.jpg",
      title:"Nazev knihy 3"
    },
    ]


  return (
    <div className ="all-books">
    <Book myimage = {books[0].image} mytitle={books[0].title} />
    <Book myimage = {books[1].image} mytitle={books[1].title} />
    <Book myimage = {books[2].image} mytitle={books[2].title} />
    </div>
  );
};

export default App;




  // kompotenta je obycejna funkce
  // komponenta ma stejny nazev jako nazev souboru
  // kompotentna obsahuje return
  //na konci souoboru musi byz radek s exportem
  // v return musi neco byt
  // return dokaze vratit jenom jeden tag (proto udelame div) nebo <> abychom neneli div v divu atd
  // to co piseme tedy nahore v h1 a p neni to html, ale jde o JSX - javascript XML = JSX
  // kdyz neco vlozim do {} takt obude brat jako js funkce, treba {2+2}