import React from 'react';
import { useEffect } from 'react';

export default function Theme() {

   useEffect(() => {
    setTheme();
    },[]);
    function setTheme() {
		var audio1 = document.getElementById("audiotheme");
		audio1.currentTime = 0;
		audio1.play();
	}

	function stopTheme() {
		var audio1 = document.getElementById("audioTheme");
		audio1.pause();
	}
	 
	 

  return (
    <div>
      {}
    </div>
  )
};




