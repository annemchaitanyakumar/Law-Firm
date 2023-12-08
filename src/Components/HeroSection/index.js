import "./herosection.css";

export default () => {
  return (
    <div className="herosection">
      <div>
        <p style={{ color: 'white', fontSize: '66px' }}>
          You don't have to <br />
          <b style={{ fontWeight: 'bold' }}>Fight them Alone.</b>
        </p>
        <p style={{ color: 'white' }}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,<br />
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor <br />
          eget, hac massa gravida arcu interdum proin curae.
        </p>
        <div style={{ position: 'relative', width: '100%' }}>
          <input
            type="text"
            placeholder="✉️ Enter your Email Address"
            style={{
              padding: '10px',
              fontSize: '16px',
              width: '380px',
              height: '40px',
              borderRadius: '43px',
              opacity: '0.3',
            }}
          />
          <button
            style={{
              position: 'absolute',
              width:'110px',
              height:'52px',
              right: '100px',
              top: '5.8px',
              left:'287.5px',
              borderRadius: '43px',
              background:'#E3B748',
              fontSize:'16px',
              fontWeight:'bolder',
              border:'none',
              cursor:'pointer'
            }}
          >
            Let's Talk
          </button>
        </div>
      </div>
      
        <img src="./man.png" alt="Man" style={{
            height:'467px'
        }}/>
      
    </div>
  );
};
