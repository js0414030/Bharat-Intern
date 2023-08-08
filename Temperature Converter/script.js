function convert(source) {

    if (source === 'celsius') {

      let celsius = parseFloat(document.getElementById('celsius').value);
      let fahrenheit = (celsius * 9) / 5 + 32;
      document.getElementById('fahrenheit').value = isNaN(fahrenheit) ? '' : fahrenheit.toFixed(2);
   
    } 
    
    else if (source === 'fahrenheit') {

      let fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
      let celsius = ((fahrenheit - 32) * 5) / 9;
      document.getElementById('celsius').value = isNaN(celsius) ? '' : celsius.toFixed(2);
    
    }
  
  }
