const button = document.getElementById("btn3");
const output = document.getElementById("output");

button.addEventListener("click", async (e) => {
  e.preventDefault();
  var api =
    "https://folarin-feedback-backend.onrender.com/users/get-all-feedback";

  fetch(api, {
    method: "GET",
    // mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      var data = data.data;
      console.log(data);
      var datatoHTML = `<tr>
        <th style="margin-right: 5%;">ID</th>
        <th>Feedback</th>
      </tr>`;

      data.map((data) => {
        datatoHTML += `
       <tr>
         <td>${data.id}</td>
         <td>${data.description}</td>
       </tr>`;
      });

      output.innerHTML = datatoHTML;
    })
    .catch((err) => {
      console.log(err);
    });
});

const postButton = document.getElementById("btn");

postButton.addEventListener("click", async (e) => {
  e.preventDefault();
  var description = document.getElementById("creatDescription").value;

  // console.log(data)
  var api = "https://folarin-feedback-backend.onrender.com/users/post-feedback";
  fetch(api, {
    method: "POST",
    // mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description: `${description}`,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

const patchbutton = document.getElementById("btn1");
patchbutton.addEventListener("click", (e) => {
  e.preventDefault();
  var id = document.getElementById("patchId").value;
  var description = document.getElementById("patchDescription").value;

  var api =
    "https://folarin-feedback-backend.onrender.com/users/update-feedback";
  fetch(api, {
    method: "PATCH",
    // mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: `${id}`,
      description: `${description}`,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

const deleteButton = document.getElementById("btn2");

deleteButton.addEventListener("click", async (e) => {
  e.preventDefault();
  var id = document.getElementById("deleteId").value;

  console.log(id);
  const deleteMethod = {
    method: "DELETE", // Method itself
    headers: {
      "Content-type": "application/json; charset=UTF-8", // Indicates the content
    },
    body: JSON.stringify({
      id,
    }),
    // No need to have body, because we don't send nothing to the server.
  };
  // Make the HTTP Delete call using fetch api
  fetch(
    "https://folarin-feedback-backend.onrender.com/users/delete-feedback",
    deleteMethod
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
    .catch((err) => console.log(err)); // Do something with the error
});
