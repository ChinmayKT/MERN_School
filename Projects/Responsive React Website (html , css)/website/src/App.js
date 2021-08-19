import Styled, {css} from 'styled-components'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Feature from './components/Feature/Feature'
import Service from './components/Service/Service'
import Price from './components/Price/Price'
import Contact  from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const shape = css`
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
z-index:-1;
`


const IntroShape = Styled.div`
${shape}
clip-path: polygon(69% 0, 100% 0, 100% 100%, 23% 100%);
background-color : #FF7D00 `

const FeatureShape = Styled.div`
${shape}
clip-path: polygon(100% 0, 47% 41%, 42% 100%, 0 100%, 0 0);
background-color :  #FF7D00 `

const ServiceShape = Styled.div`
${shape}
clip-path: polygon(42% 0, 45% 72%, 100% 100%, 0 100%, 0 0);
background-color :  #FF7D00 `

const PriceShape = Styled.div`
${shape}
clip-path: polygon(100% 0, 44% 41%, 36% 100%, 0 100%, 0 0);
background-color :  #FF7D00 `

const ContactShape = Styled.div`
${shape}
clip-path: polygon(36% 0, 44% 41%, 100% 100%, 0 100%, 0 0);

background-color :  #FF7D00 `




function App() {
  return (
    <>
    <div style={{height:'100vh', overflow:'hidden' , position:'relative'}}>
      <Navbar/>
      <Intro/>
      <IntroShape/>
    </div>

    <div style={{height:'100vh', overflow:'hidden', position:'relative'}} >
        <Feature/>
        <FeatureShape/>
    </div>

    <div style={{height:'100vh', overflow:'hidden', position:'relative'}} >
        <Service/>
        <ServiceShape/>
    </div>

    <div style={{height:'100vh', overflow:'hidden', position:'relative'}} >
        <Price/>
        <PriceShape/>
    </div>

    <div style={{height:'100vh', overflow:'hidden', position:'relative'}} >
        <Contact/>
        <ContactShape/>
        
    </div>

    <div >
        <Footer/>
        
    </div>
    </>
  );
}

export default App;
