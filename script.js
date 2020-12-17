function reduireArray(array, size) {
  if (array.length <= size) {
    return [array];
  }
  return [array.slice(0, size), ...reduireArray(array.slice(size), size)];
}

const dateTimeFormat = Intl.DateTimeFormat("fr");

function afficher(json){
  const repos = json.map(j => ({
    name: j.name,
    description: j.description || "",
    updated_at: j.updated_at
  }));

  const selections = reduireArray(repos, 3);

  let html = "";

  selections.forEach(selection => {
    html += '<div class="columns">';

    selection.forEach(repo => {
      html += `
            <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://static.cnews.fr/sites/default/files/styles/image_640_360/public/multiplication_ok.jpg?itok=UCr5M8zC"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img
                        src="https://giffiles.alphacoders.com/981/98174.gif"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">${repo.name}</p>
                    <p class="subtitle is-6">@Parcourir</p>
                  </div>
                </div>
  
                <div class="content">
                   ${repo.description}
                  <br />
                  Dernière mise à jour: <time datetime="${
                    repo.updated_at
                  }">${dateTimeFormat.format(new Date(repo.updated_at))}</time>
                </div>
              </div>
            </div>
          </div>`;
    });
    html += "</div>";
  });

  document.querySelector(".container").innerHTML = html;
}

const json = [
	{
		"name": "Image 1",
		"created_at": "2020-10-09T12:09:56Z",
		"updated_at": "2020-10-09T12:09:56Z",
		"description": "Photo",
		"url": "https://static.cnews.fr/sites/default/files/styles/image_640_360/public/multiplication_ok.jpg?itok=UCr5M8zC"
	},
	
	{
		"name": "Image 2",    
		"created_at": "2020-10-09T12:09:56Z",
		"updated_at": "2020-10-09T12:09:56Z",
		"description":"Photo"
	},
	
	{
		"name": "Image 3",
		"created_at": "2020-10-09T12:09:56Z",
		"updated_at": "2020-10-09T12:09:56Z",
		"description": "Photo"
	},
	
	{
		"name": "Image 4",        
		"description": "Photo",
		"created_at": "2020-10-09T12:09:56Z",
		"updated_at": "2020-10-09T12:09:56Z"
	},
	
	{
		"name": "Image 5",
		"description": "Photo",
		"created_at": "2018-10-08T10:58:58Z",
		"updated_at": "2020-10-09T12:09:56Z"
	}
];

document.addEventListener("DOMContentLoaded", function() {
   fetch("https://galerie-lea.netlify.app/data.json")
   .then((response) => response.json())
   .then((json) => afficher(json));
});