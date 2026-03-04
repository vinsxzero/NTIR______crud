import "regenerator-runtime/runtime";
import DataTable from "datatables.net-dt";
import axios from "axios";
const url = "http://localhost:3000/test";
const bodyParameters = {
  key: "value",
};
// $("#btnSalvar").click(async function () {
//   const name = $("#name").val();
//   axios
//     .post(url, { name: name })
//     .then(function (response) {
//       alert("feito");
//     })
//     .catch(function (error) {
//       alert(error);
//     });
// });
// $("#btnSalvar").click(async function () {
//   const name = $("#name").val();

//   console.log("Valor enviado:", name); // debug

//   try {
//     await axios.post("http://localhost:3000/test", { name });
//     alert("feito");
//   } catch (error) {
//     console.error(error);
//     alert("erro");
//   }
// });
document.querySelector("form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;

  await axios.post("http://localhost:3000/test", { name });
});
