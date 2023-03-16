function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5nvsUG46fg7":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbyJpo9ui2gXpfn4VblGOkKe_tib6xn9R3ag3OWNl7mqdqCeI735Ca9Yi5YJYyjeS6Pu/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

