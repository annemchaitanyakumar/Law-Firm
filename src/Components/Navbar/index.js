import "./navbar.css";


export default () => {
    return (
        <div style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            margin:'0px',
            padding:'10px',
            alignItems:'center',
            color:'black'
            
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
            <button className="contactBtn">Contact Now</button>
        </div>
    )
}