import React from 'react';


function Datain(props ) {



  return (
    <div  >
      <form   onSubmit={e =>{ 
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Array.from(formData.entries()).reduce((memo, pair) => ({
              ...memo,
              [pair[0]]: pair[1],
            }), {});

            props.datain(JSON.stringify(data))
			console.log("data:"+ JSON.stringify(data))
        }}>
       
  <input name='baz' />
  <input type='submit' />
</form>


    </div>
  );
}

export default Datain
