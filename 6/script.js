function showUserTitles() {

  let headerTag = document.getElementById("users-data-titles");
  
  let userKeys = Object.keys(userData[0]);
  let userTitle = null;
  let sortedUserData = [];
  let arrayOfUserTitle = [];

  let rowNumber = document.createElement("th");
  rowNumber.textContent = "row";
  headerTag.appendChild(rowNumber);

  for (let i = 0; i < userKeys.length; i++) {
    userTitle = document.createElement("th");
    userTitle.textContent = userKeys[i];
    headerTag.appendChild(userTitle);
  }

   arrayOfUserTitle = document.querySelector("tr").children;

  for (let j = 1; j < arrayOfUserTitle.length; j++) {
    arrayOfUserTitle[j].onclick = function () {

      sortedUserData = userData.sort(function (a, b) {

        if (isNaN(Number(userData[0][arrayOfUserTitle[j].innerText]))) {

          if (a[arrayOfUserTitle[j].innerText] < b[arrayOfUserTitle[j].innerText])
            return -1;

          if (a[arrayOfUserTitle[j].innerText] > b[arrayOfUserTitle[j].innerText])
            return 1;

          return 0;
        }
        return a[arrayOfUserTitle[j].innerText] - b[arrayOfUserTitle[j].innerText];
      });
      showUserInfo(sortedUserData);
    };
  }
}


function showUserInfo(edittedUserData) {

  let dataTag = document.getElementById("users-data-data");
  let tr = null;
  let td = null;
  let userKeys = Object.keys(userData[0]);
  let arrayOfUsersInfo = [];
  let rowNumber = null;
  let userValue = null;
  let inputContainer = null;
  let userTable = document.getElementById("user-data");
  let editButton = document.getElementById("edit");
  let deleteButton = document.getElementById("delete");
  let addButton = document.getElementById("add");
  let saveButton = document.getElementById("save");
  let addNewUserTable = document.getElementById("add-user-table");
  let userInfoToShow = userData;

  if (edittedUserData) {
    userInfoToShow = edittedUserData;
    dataTag.innerHTML = "";
  }

  for (let i = 0; i < userInfoToShow.length; i++) {

    arrayOfUsersInfo = Object.values(userInfoToShow[i]);

    tr = document.createElement("tr");
    rowNumber = document.createElement("td");
    rowNumber.textContent = i;
    tr.appendChild(rowNumber);

    for (let j = 0; j < arrayOfUsersInfo.length; j++) {
      td = document.createElement("td");
      td.textContent = arrayOfUsersInfo[j];
      tr.appendChild(td);
    }

    dataTag.appendChild(tr);
  }
let userInfo = dataTag.children;

  for (let i = 0; i < userInfo.length; i++) {
    userInfo[i].onclick = function () {
      userTable.innerHTML = "";
      editButton.style.display = "inline-block";
      deleteButton.style.display = "inline-block";
      for (let j = 1; j < userInfo[i].children.length; j++) {
        let tr = document.createElement("tr");
        let tdKey = document.createElement("td");
        tdKey.textContent = userKeys[j - 1];
        if (j === 1) {
          inputContainer = document.createElement("td");
          userValue = document.createElement("td");
          userValue.textContent = userInfo[i].children[j].textContent;
        } else {
          inputContainer = document.createElement("td");
          userValue = document.createElement("input");
          userValue.value = userInfo[i].children[j].textContent;
        }
        inputContainer.appendChild(userValue);
        tr.appendChild(tdKey);
        tr.appendChild(inputContainer);
        userTable.appendChild(tr);

        editButton.onclick = function () {
                  let inputsValue = document
            .getElementById("user-data")
            .querySelectorAll("input");

          if (!inputsValue[0].value)
            return alert("please enter a valid name");

          if (!inputsValue[1].value)
            return alert("please enter a valid lastname");

          if (!inputsValue[2].value)
            return alert("please enter a valid city");

          if (!inputsValue[3].value || isNaN(Number(inputsValue[3].value)))
            return alert("please enter a valid postalCode");

          if (!inputsValue[4].value || isNaN(Number(inputsValue[4].value)))
            return alert("please enter a valid phone number");

          if (!inputsValue[5].value || typeof inputsValue[5].value !== "string")
            return alert("please enter a valid position");

          userInfoToShow[i].firstname = inputsValue[0].value;
          userInfoToShow[i].lastname = inputsValue[1].value;
          userInfoToShow[i].city = inputsValue[2].value;
          userInfoToShow[i].postalCode = inputsValue[3].value;
          userInfoToShow[i].phoneNumber = inputsValue[4].value;
          userInfoToShow[i].position = inputsValue[5].value;

          showUserInfo(userInfoToShow);
          userTable.innerHTML = "";
          editButton.style.display = "none";
          deleteButton.style.display = "none";
        };
        deleteButton.onclick = function () {
          userInfoToShow.splice(i, 1);
          showUserInfo(userInfoToShow);
          userTable.innerHTML = "";
          deleteButton.style.display = "none";
          editButton.style.display = "none";
        };
      }
    };
  }
  addButton.onclick = function () {
    saveButton.style.display = 'block';
    for (let i = 0; i < userKeys.length; i++) {
      let tr = document.createElement("tr");
      let tdKey = document.createElement("td");
      tdKey.textContent = userKeys[i];
      inputContainer = document.createElement("td");
      userValue = document.createElement("input");

      inputContainer.appendChild(userValue);
      tr.appendChild(tdKey);
      tr.appendChild(inputContainer);
      addNewUserTable.appendChild(tr);
    }
  };
  saveButton.onclick = function () {
    let inputsValue = addNewUserTable.querySelectorAll("input");

    let isUidExist = userInfoToShow.find(
      (user) => user.uid == inputsValue[0].value
    );
    if (!!isUidExist) return alert("This uid is already added!");

    if (!inputsValue[0].value || isNaN(Number(inputsValue[0].value)))
      return alert("please enter a valid uid");

    if (!inputsValue[1].value || typeof inputsValue[1].value !== "string")
      return alert("please enter a valid name");

    if (!inputsValue[2].value || typeof inputsValue[2].value !== "string")
      return alert("please enter a valid lastname");

    if (!inputsValue[3].value || typeof inputsValue[3].value !== "string")
      return alert("please enter a valid city");

    if (!inputsValue[4].value || isNaN(Number(inputsValue[4].value)))
      return alert("please enter a valid postalCode");

    if (!inputsValue[5].value || isNaN(Number(inputsValue[5].value)))
      return alert("please enter a valid phone number");

    if (!inputsValue[6].value || typeof inputsValue[6].value !== "string")
      return alert("please enter a valid position");
    let newUser = {};
    newUser.uid = inputsValue[0].value;
    newUser.firstname = inputsValue[1].value;
    newUser.lastname = inputsValue[2].value;
    newUser.city = inputsValue[3].value;
    newUser.postalCode = inputsValue[4].value;
    newUser.phoneNumber = inputsValue[5].value;
    newUser.position = inputsValue[6].value;
    userInfoToShow.push(newUser);
    showUserInfo(userInfoToShow);
    saveButton.style.display='none';
    addNewUserTable.innerHTML = "";
    return alert('user is added successfully')

  };
}

showUserTitles();
showUserInfo();
