// import { Container, Row,Col } from "react-bootstrap";
// import { ArrowRightCircle } from "react-bootstrap-icons";
// import Particle from './Particle';
// import personalImg from '../assets/img/personal-img.jpg';
// import bg from '../assets/img/home-main.svg'

// export const Banner = () =>{
//     const [loopNum, setLoopNum] = useState(0);
//     const [isDeleting, setIsDeleting] = useState(false);
//     const toRotate = [ "Web Developer", "Web Design" ];
//     const [text, setText] = useState('');
//     const [delta, setDelta] = useState(300 - Math.random() * 100);
//     const period = 2000 ; 
    
//     useEffect(()=>{
//         let ticker = setInterval(() => {
//             tick();
//           }, delta);
      
//           return () => { clearInterval(ticker) };
//         }, [text, delta])

//     const tick = () =>{
//         let i = loopNum % toRotate.length;
//         let fullText = toRotate[i];
//         const upDatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);

//         setText(upDatedText);

//         if (isDeleting){
//             setDelta(prevDelta => prevDelta / 2)
//         }

//         if(!isDeleting && upDatedText === fullText){
//             setIsDeleting(true);
//             setDelta(period);
//         }else if(isDeleting && upDatedText === ''){
//             setIsDeleting(false);
//             setLoopNum(loopNum + 1);
//             setDelta(500);
//         }
//     }

//     return(
//         <section className="banner" id="home">
//             <Particle/>
//             <Container>
//                 <Row className="align-items-center">
//                     <Col xs={12} md={6} xl={7}>
//                     <span className="tagline">
//                         Welcome to my Portfolio 
//                     </span>
//                     <h1>Hi I'm {""}  <span className="wrap">{text}</span></h1>
//                     <p> I'm a Full Stack Web Developer with experience in HTML, CSS, JavaScript, React Js,Node Js, and Python. <br/> 
//                     SKilled in both front and backend development, with a focus on creating intuitive user experience and efficient database management.</p>
//                     <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /> </button>
//                     </Col>
//                     <Col xs={12} md={6} xl={5}>
//                     <img src={bg} alt="Headder Img"/>
//                     </Col>
//                 </Row>
//             </Container>

//         </section>
//     )
// } 