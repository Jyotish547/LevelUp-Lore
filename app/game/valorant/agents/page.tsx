

// fetch("https://valorant-api.com/v1/agents")
// .then(response => response.json())
// .then(json => {
//     const list = document.getElementById("list");

//     for(const data of json.data) {
//         //There is one repeated agent and the API suggested this to remove the repeat
//         if(data.isPlayableCharacter === true){
//             const listItem = document.createElement("div");
//             listItem.classList.add("listItem");

//             const iconContainer = document.createElement("div");
//             iconContainer.classList.add("Icon-Container");

//             const information = document.createElement("div");
//             information.classList.add("Information");

//             const icon = document.createElement("img");
//             icon.src = data.displayIconSmall;
//             icon.classList.add("icon");

//             const name  = document.createElement("p");
//             name.innerHTML = `<b>Name:</b> ${data.displayName}`;
//             name.classList.add("name");

//             const role = document.createElement("p");
//             role.innerHTML = `<b>Role:</b>  ${data.role.displayName}`;
//             role.classList.add("role");

//             const desc = document.createElement("p");
//             desc.innerHTML = `<b>Description:</b> <br> ${data.description}`;
//             desc.classList.add("desc");
            
//             iconContainer.appendChild(icon);
//             information.appendChild(name);
//             information.appendChild(role);
//             information.appendChild(desc);
//             listItem.appendChild(iconContainer);
//             listItem.appendChild(information);

//             list.appendChild(listItem);
//             console.log(data.displayName);
//         }
//     }
// });

export default function Agents() {
    return(
        <div>
            This is the Agent List Page
        </div>
    )
}