import "./footer.css";


export default () => {
    return (
        <div>
        <div style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            marginLeft:'100px',
            marginRight:'100px',
            padding:'10px',
            alignItems:'center',
            // backgroundColor:'black'
            
        }}>
            <div className="logo">
                <img src="./logo.png" />
                <h2>IGSTUDIO</h2>
            </div>
            <div className='centerContent' style={{ 
            }}>
                <h4>Home</h4>
                <h4>Attorneys</h4>
                <h4>Practice Areas</h4>
                <h4>About Us</h4>
            </div>
            <div>
                <img src="Group.png" />
            </div>
            
        </div>
        <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            color:'white',
            gap:'20px',
            fontWeight:'400',
            fontSize:'12px',
            paddingBottom:'30px'
        }}>
            <p>© 2020 Acme. All rights reserved</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
        </div>
        
        </div>
    )
}