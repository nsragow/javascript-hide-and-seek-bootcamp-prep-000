function getFirstSelector(selector)
{
  return document.querySelector(selector)
}

function nestedTarget()
{
  return document.querySelector("#nested .target")
}

function deepestChild()
{
  var next = document.querySelector("div#grand-node")
  while(true)
  {
    var temp = next.querySelector("*")
    if(temp === null)
    {
      return next;
    }
    next = temp
  }
}





function increaseRankBy(n)
{
  var toChange = document.querySelectorAll(".ranked-list *")
  for(var i = 0; i < toChange.length; i++)
  {
    toChange[i].innerHTML = parseInt(toChange[i].innerHTML)+n
  }
}