import "./intro.css"

export default () => {
    return (
        <div style={{
            display:'flex',
            justifyContent:'space-around',
            alignItems:'center',
            top:'50px',
            position:'relative',
            width: '1132px',
            height: '234px',
            left: '100px',
            paddingBottom:'80px'

        }}>
                <h2 className='intro'>Let’s Introduce<br /> Ourself</h2>
            
            <div >
                <img src="Line.png" style={{
                top:'17px',
                position:'absolute',
                fontSize:'50px',
                border:'1.5px solid #6A6A6A',
            }}/>
            </div>

            <div>
                <h2 style={{
                    color:'white'
                }}>
                    Criminal Lawyer
                </h2>
                <p style={{
                    color:'#FFFFFF',
                    opacity:'50%'
                }}>
                Amet minim mollit non deserunt ullamco est<br />
                sit aliqua dolor do amet sint. Velit officia consequatduis<br />
                enim velit mollit Exercitation.
                </p>

            </div>
        </div>
        
   )
}