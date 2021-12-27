import { useEffect, useState } from 'react';
import './../App.css';
import {Helmet} from "react-helmet";

function ContentBuilder(props) {
  const [show, setShow] = useState(false);

  useEffect(()=>{
    if(props.show){
      setTimeout(() => {
        setShow(!show);
        if(props.data!=null){
          var div = document.getElementById( 'container' );
          div.insertAdjacentHTML( 'beforeend', props.data );
          const removeElements = (elms) => elms.forEach(el => el.remove());
          removeElements( document.querySelectorAll(".row-add-initial") );
        }
      }, 500);
    }
  }, [props.show])

  if(props.show){
    return (
      <div className="App" style={{position:'absolute', top:0, left:0, right:0, bottom:0, backgroundColor:'#fff'}}>
        <Helmet>
          <link rel="stylesheet" href="contentbuilder/assets/bootstrap/css/bootstrap.css" />
          <link ref="stylesgeet" href="contentbuilder/assets/minimalist-blocks/content.css"/>
          <link rel="stylesheet" href="contentbuilder/contentbuilder/contentbuilder.css" />
          <link rel="stylesheet" href="contentbuilder/style.css" />
        </Helmet>
        
        <div className="container" id="container">
          
        </div>
        <br/>
        <br/>
        <button 
          className="btnSave" 
          onClick={()=>{
            props.onClose(document.getElementById("container").innerHTML);
            var myobj = document.getElementById("_cbhtml");
            myobj.remove();
            const removeElements = (elms) => elms.forEach(el => el.remove());
            removeElements( document.querySelectorAll(".moveable-control-box") );

          }}
        >
          Simpan sebagai HTML
        </button>

        <Helmet>
            <script type="text/javascript" src="contentbuilder/assets/jquery.min.js" />
            <script type="text/javascript" src="contentbuilder/contentbuilder/contentbuilder.js" />
            <script type="text/javascript" src="contentbuilder/assets/minimalist-blocks/content-v4.js" />
        </Helmet>
        {
          show &&
          <Helmet>
            <script type="text/javascript" src="contentbuilder/script.js" />
          </Helmet>
        }
        
      </div>
    );
  }else{
    return null
  }
}

export default ContentBuilder;
