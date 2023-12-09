import Swiper from "../Swiper"

export default () =>{
    return (
        <div>
            <div>
            <p style={{
                color:'white',
                textAlign:'left',
                paddingLeft:'100px',
                paddingTop:'50px',
                fontSize:'54px',
                lineHeight:'77.23px'

            }}>What says our <br />happy Clients</p>
            <div>
            <div className="swiper-button-prev">
                <img src="left.png" alt="Previous" style={{
                    margin:'50px',
                    position:'absolute'
                }}/>
            </div>
            <div className="swiper-button-next">
                <img src="left.png" alt="Next" style={{
                    margin:'50px',
                    position:'absolute'
                }}/>
            </div>
            </div>
            <div></div>
            </div>


            <div style={{
                display:'flex',
                justifyContent:'space-around',
                margin:'100px',
                top:'0',
                paddingBottom:'50px'
            }}>

            <div style={{
                left:'100px',
                padding:'10px',
                border: '1.4px solid rgba(255, 255, 255, 0.3)',
                borderRadius:'14px'
            }}>
                <img src="Ellipse1.png" style={{
                    width:'80px',
                    height:'80px'
                }}/>
                <h3 style={{
                    color:'white'
                }}>Jane Cooper <br /><p style={{fontSize:'14px'}}>Ceo of Hunt</p></h3>
                <p style={{
                    color:'white',
                    opacity:'30%'
                }}>Amet minim mollit non deserunt ullamco est<br />
                    sit aliqua dolor do amet sint. Velit officia<br />
                    consequatduis enim velit mollit Exer.
                </p>
            </div>





            <div style={{
                left:'100px',
                padding:'10px',
                border: '1.4px solid rgba(255, 255, 255, 0.3)',
                borderRadius:'14px',
                paddingBottom:'30px',
                backgroundColor:'#3E3E3E'
            }}>
                <img src="Ellipse2.png" style={{
                    width:'80px',
                    height:'80px'
                }}/>
                <h3 style={{
                    color:'white'
                }}>Robert Fox <br /><p style={{fontSize:'14px'}}>Ceo of Hunt</p></h3>
                <p style={{
                    color:'white',
                    opacity:'30%'
                }}>Amet minim mollit non deserunt ullamco est<br />
                    sit aliqua dolor do amet sint. Velit officia<br />
                    consequatduis enim velit mollit Exer.
                </p>
            </div>





            <div style={{
                left:'100px',
                padding:'10px',
                border: '1.4px solid rgba(255, 255, 255, 0.3)',
                borderRadius:'14px'
            }}>
                <img src="Ellipse3.png" style={{
                    width:'80px',
                    height:'80px'
                }}/>
                <h3 style={{
                    color:'white'
                }}>Devon Lane <br /><p style={{fontSize:'14px'}}>Ceo of Hunt</p></h3>
                <p style={{
                    color:'white',
                    opacity:'30%'
                }}>Amet minim mollit non deserunt ullamco est<br />
                    sit aliqua dolor do amet sint. Velit officia<br />
                    consequatduis enim velit mollit Exer.
                </p>
            </div>

            </div>





        </div>
    )
}