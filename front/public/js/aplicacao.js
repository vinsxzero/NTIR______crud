const muscleMap = {
  1: "M. Frontal (direito)",
  2: "M. Frontal (esquerdo)",
  3: "M. Corrugador (direito)",
  4: "M. Corrugador (esquerdo)",
  5: "M. Prócero",
  6: "M. orbicular do olho (direito)",
  7: "M. orbicular do olho (esquerdo)",
  8: "M. nasal",
  9: "M. masseter (direito)",
  10: "M. masseter (esquerdo)",
  11: "M. orbicular da boca",
  12: "M. platisma (direito)",
  13: "M. platisma (esquerdo)",
  14: "M. depressor do ângulo da boca (direito)",
  15: "M. depressor do ângulo da boca (esquerdo)",
  16: "M. mentual(direito)",
  17: "M. mentual(esquerdo)",
};
const tableBody = document.getElementById("tableBody");

function addRow(button) {
  const muscleId = button.dataset.muscle;
  const muscleName = muscleMap[muscleId];

  if (document.querySelector(`tr[data-row="${muscleId}"]`)) return;

  const row = document.createElement("tr");
  row.setAttribute("data-row", muscleId);
  row.innerHTML = `<td>
                    <input type="text" class="muscle-name" name="regiao" value="${muscleName}" readonly />
                  </td>
                  <td>
                    <select name="gravidadeInfeccao">
                      <option>Selecione</option>
                      <option>Leve</option>
                      <option>Moderada</option>
                      <option>Grave</option>
                    </select>
                  </td>
                  <td><input name="numeroDePontos" type="number" min="0" /></td>
                  <td><input name="volumePorPonto" type="number" min="0" step="0.01" /></td>
                  <td><input name="volumeTotal" type="number" min="0" step="0.01" /></td>
                  <td><input name="unidades" type="number" min="0" /></td>
                  <td>
                    <select name="paralisia">
                      <option>Selecione</option>
                      <option>Sim</option>
                      <option>Não</option>
                    </select>
                  </td>
                  <td class="remove"><button type="button"class="trash"><i class="bi bi-trash"></i></button></td>
                  `;
  row.querySelector(".trash").addEventListener("click", () => rmvRow(row));
  tableBody.appendChild(row);
}

function rmvRow(row) {
  row.remove();
}
const formApp = document.getElementById("appForm");
const tableApp = document.getElementById("tableBody");

async function addApplication(e) {
  e.preventDefault();

  const muscleRows = document.querySelectorAll("#tableBody tr");

  for (const row of muscleRows) {
    const regiao = row.querySelector(".muscle-name").value;
    const gravidadeInfeccao = row.querySelector(
      "select[name='gravidadeInfeccao']",
    ).value;
    const numeroDePontos = row.querySelector(
      "input[name='numeroDePontos']",
    ).value;
    const volumePorPonto = row.querySelector(
      "input[name='volumePorPonto']",
    ).value;
    const volumeTotal = row.querySelector("input[name='volumeTotal']").value;
    const unidades = row.querySelector("input[name='unidades']").value;
    const paralisia = row.querySelector("select[name='paralisia']").value;

    const data = {
      regiao,
      gravidadeInfeccao,
      numeroDePontos,
      volumePorPonto,
      volumeTotal,
      unidades,
      paralisia,
    };

    try {
      await axios.post(
        `/insert-application/${window.location.pathname.split("/").pop()}`,
        data,
      );
    } catch (error) {
      console.error(error);
    }
  }
  alert("Enviando dados...");
  window.location.href = "/success";
}

const submitButton = document.getElementById("submit-form");

submitButton.addEventListener("click", async (e) => {
  await addApplication(e);
});
document.querySelectorAll(".muscle-btn").forEach((button) => {
  button.addEventListener("click", () => addRow(button));
});
