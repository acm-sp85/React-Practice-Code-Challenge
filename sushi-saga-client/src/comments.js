/* 
   renderPlates takes an array 
   and renders an empty plate
   for every element in the array
*/

<div className="sushi">
<div className="plate" 
     onClick={/* Give me a callback! */ null}>
  { 
    /* Tell me if this sushi has been eaten! */ 
    false ?
      null
    :
      <img src={/* Give me an image source! */ } width="100%" />
  }
</div>
<h4 className="sushi-details">
  {/* Give me a name! */} - ${/* Give me a price! */}
</h4>
</div>