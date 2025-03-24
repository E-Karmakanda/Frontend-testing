
import Cards from './components/Cards'
import image from './assets/icon.png'
function App() {


  return (
    <div className='container'>
      <h1 className='container__header'>Tasks</h1>
      <div className="container__elements">
        <Cards
          title="My Page for mobile and broadbrand"
          label="Overview of your mobile services.See consumption and invoice, buy data and add services. "
          buttonText="Sign in"
          image={image}
          color="#FF68A7"
        ></Cards>
        <Cards
          title="My Page for mobile and broadbrand"
          label="Overview of your mobile services.See consumption and invoice, buy data and add services. "
          buttonText="Sign in"
          image={image}
          color="#68A4FF"
        ></Cards>
      </div>
    </div>
  )
}

export default App
