import "./newsletter.css";

export default () => {
    return(
        <div style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            paddingTop:'10px',
            backgroundColor:'#47474780',
            paddingBottom:'90px',
            margin:'60px',
            // width:'1245px'
        }}>
            <p style={{color:'white',fontSize:'55px'}}>Subscribe Our Newsletter</p>
            <div style={{
                left:'50%',
                width:'686px',
                display:'flex',
                height:'40px',
                justifyContent:'center',
                gap:'10px'
            }}>
                <input placeholder="Name:" style={{width:'276px',borderRadius:'10px 0 0 10px',border:'none'}}></input>
                <input placeholder="Enter your Email" style={{width:'276px'}}></input>
                <button style={{width:'116px',borderRadius:'0 10px 10px 0',border:'none',fontWeight:'600',backgroundColor:'#E3B748',textAlign:'center'}}>SEND</button>
            </div>
        </div>
    )
}