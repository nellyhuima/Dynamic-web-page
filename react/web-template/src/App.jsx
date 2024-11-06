import './styles/App.css';

<styles></styles>

function App() {

  return (
    <div>
      <Header />
      <Content />
      <Footer name={'Nelly Huima'}/>
    </div>
  )
}

function Header() {
  return (
    <header>
      <h1>Welcome to my homepage</h1>
    </header>
  );
}

function Content() {
  return(
    <div className="content">
      <Card imageUrl={'https://picsum.photos/id/0/300/200'} title={'Computer'} text={'Computer science'}/>
      <Card imageUrl={'https://picsum.photos/id/34/300/200'} title={'oil'} text={'vehicles'}/>
      <Card imageUrl={'https://picsum.photos/id/23/300/200'} title={'Forks'} text={'Utensils'}/>
    </div>
    );
}

function Footer({name}) {
  return (
    <footer>
      <span>copyright: {name}</span>
    </footer>
  );
}

/* A reusable Card using bootstrap and css */

function Card({imageUrl, title, text}) {
  return (
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
    </div>
  );
}

export default App
