import React from "react";
import './styles.css';
async function getAllGames() {
  let pages = [ ...Array(5).keys() ];
  let allData = [];

  await Promise.all(
    pages.map(async p => {
      var url = new URL("https://www.balldontlie.io/api/v1/games");
      url.searchParams.append("page", p + 1);
      url.searchParams.append("per_page", 100);
      const res = await fetch(url).then(data => { return data.json(); });
      allData.push(res);
    })
  );
  console.log(allData);
  let results = "";
  for(let j = 0; j < allData.length; j++) {
    let json = allData[ j ];
    console.log(allData[ j ]);
    for(let i = 0; i < json.data.length; i++) {
      console.log(json.data[ i ].date);
      let date = new Date(json.data[ i ].date).toString().substring(0, 15);
      results += "<div className=\'game\'> <p className=\'date\'> Date: " + date + "</p>";
      results += "<div className=\'teams\'><div className=\'home\'>Home: " + json.data[ i ].home_team.full_name + "</div> <div className=\'away\'>Away: " + json.data[ i ].visitor_team.full_name + "</div></div>";
      results += "<p className=\'score\'>Score: " + json.data[ i ].home_team_score + " to " + json.data[ i ].visitor_team_score + "</p></div>";
    }
  }
  document.getElementById("match").innerHTML = results;
}


const NBA = () => {
  getAllGames();
  return (
    <div className='row-2'>
      <div className="games" id="match"></div>
    </div>
  );
};

export default NBA;