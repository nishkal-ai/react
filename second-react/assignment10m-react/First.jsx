function First()
{
    return(
<div>
            
      <h1>react 1st assignment</h1>
      <img src="image.jpeg"  alt="image demo" class="photo"></img>
  <ol>
    <li>invent new traffic lights</li>
    <li>rehearse a movie scene </li>
    <li> improve the spectrum technology</li>
  </ol>
    <button onClick={cllfun} >Click me</button>
</div>
        
    )
}

function cllfun()
{
    alert("clicked");
}




export default First