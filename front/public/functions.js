//configurações gerais de tabela
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

//adicionando linhas na tabela
const tableBody = document.getElementById("tableBody");

document.querySelectorAll(".muscle-btn").forEach((button) => {
  button.addEventListener("click", () => addRow(button));
});

function addRow(button) {
  const muscleId = button.dataset.muscle;
  const muscleName = muscleMap[muscleId];

  if (document.querySelector(`tr[data-row="${muscleId}"]`)) return;

  const row = document.createElement("tr");
  row.setAttribute("data-row", muscleId);
  row.innerHTML = `<td  class="muscle-name">${muscleName}</td>
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
                  <td><button type="button"class="trash"><i class="bi bi-trash"></i></button></td>
                  `;
  row.querySelector(".trash").addEventListener("click", () => rmvRow(row));
  tableBody.appendChild(row);
}

function rmvRow(row) {
  row.remove();
}
// adicionando campo "outro" a conselho de classe
const radioInputConselho = document.querySelectorAll(
  "input[type='radio'][name='classe']",
);
const inputOutroConselho = document.getElementById("outroclasse");
function addInputConselho() {
  //selecionando os inputs da classe conselho
  // let selected;
  // radioInputConselho.forEach((radio) => {
  //   if (radio.checked) {
  //     selected = radio.value;
  //   }
  //   if (selected === "outro") {
  //     inputOutroConselho.style.display = "block";
  //     inputOutroConselho.setAttribute("required", "");
  //   } else {
  //     inputOutroConselho.style.display = "none";
  //     inputOutroConselho.removeAttribute("required", "");
  //   }
  // });
  // console.log(selected);
  const selected = document.querySelector("input[name='classe']:checked");
  if (!selected) return;
  if (selected.value === "outro") {
    inputOutroConselho.style.display = "block";
    inputOutroConselho.setAttribute("required", "");
  } else {
    inputOutroConselho.style.display = "none";
    inputOutroConselho.removeAttribute("required");
    inputOutroConselho.value = "";
  }
}
radioInputConselho.forEach((radio) => {
  radio.addEventListener("change", addInputConselho);
});

const radioMedicamento = document.querySelectorAll(
  "input[type='radio'][name='medicamento']",
);
function setOtherMedication() {
  const medicamentoOther = document.querySelector("#outroMedicamento");
  const selected = document.querySelector("input[name='medicamento']:checked");
  radioMedicamento.forEach((radio) => {
    if (!selected) return;

    if (selected.value === "sim") {
      medicamentoOther.style.display = "block";
      medicamentoOther.setAttribute("required", "");
    } else {
      medicamentoOther.style.display = "none";
      medicamentoOther.removeAttribute("required", "");
    }
  });
}
radioMedicamento.forEach((radio) => {
  radio.addEventListener("change", setOtherMedication);
});
const diseasesRadio = document.querySelectorAll(
  "input[type='radio'][name='doencasassociadas']",
);
function setOtherDiseases() {
  const otherDiseases = document.getElementById("outraDoenca");
  let selected;
  diseasesRadio.forEach((radio) => {
    if (radio.checked) {
      selected = radio.value;
    }
    if (selected === "sim") {
      otherDiseases.style.display = "block";
      otherDiseases.setAttribute("required", "");
    } else {
      otherDiseases.style.display = "none";
      otherDiseases.removeAttribute("required", "");
    }
  });
}
diseasesRadio.forEach((radio) => {
  radio.addEventListener("change", setOtherDiseases);
});

const massRadio = document.querySelectorAll(
  "input[type='radio'][name='volumeConstituicao']",
);
function setOtherMass() {
  const otherMass = document.getElementById("outroVolume");
  let selected;
  massRadio.forEach((radio) => {
    if (radio.checked) {
      selected = radio.value;
    }
    if (selected === "outro") {
      otherMass.style.display = "block";
      otherMass.setAttribute("required", "");
    } else {
      otherMass.style.display = "none";
      otherMass.removeAttribute("required", "");
    }
  });
}
massRadio.forEach((radio) => {
  radio.addEventListener("change", setOtherMass);
});

const diluentRadio = document.querySelectorAll(
  "input[type='radio'][name='diluenteUtilizado']",
);
function setOtherDiluent() {
  const otherDiluent = document.getElementById("outroDiluente");
  let selected;
  diluentRadio.forEach((radio) => {
    if (radio.checked) {
      selected = radio.value;
    }
    if (selected === "outro") {
      otherDiluent.style.display = "block";
      otherDiluent.setAttribute("required", "");
    } else {
      otherDiluent.style.display = "none";
      otherDiluent.removeAttribute("required", "");
    }
  });
}
diluentRadio.forEach((radio) => {
  radio.addEventListener("change", setOtherDiluent);
});

//checkbox

const indicationCheckbox = document.querySelectorAll(
  "input[type='checkbox'][name='indicacao']",
);
function setOtherIndication() {
  const otherIndication = document.getElementById("otherindicacao");
  let select = new Array();
  indicationCheckbox.forEach((checkbox) => {
    if (checkbox.checked) {
      select.push(checkbox.value);
      console.log(select);
    }
    if (select.includes("outro")) {
      otherIndication.style.display = "block";
      otherIndication.setAttribute("required", "");
    } else {
      otherIndication.style.display = "none";
      otherIndication.removeAttribute("required", "");
    }
  });
}
indicationCheckbox.forEach((checkbox) => {
  checkbox.addEventListener("change", setOtherIndication);
});

const adminRouteCheckbox = document.querySelectorAll(
  "input[type='checkbox'][name='administracao']",
);

function setOtherAdminRoute() {
  const otherAdminRoute = document.getElementById("otherAdminRoute");
  let selected = new Array();
  adminRouteCheckbox.forEach((checkbox) => {
    if (checkbox.checked) {
      selected.push(checkbox.value);
      console.log(selected);
    }
    if (selected.includes("outro")) {
      otherAdminRoute.style.display = "block";
      otherAdminRoute.setAttribute("required", "");
    } else {
      otherAdminRoute.style.display = "none";
      otherAdminRoute.removeAttribute("required", "");
    }
  });
}
adminRouteCheckbox.forEach((checkbox) => {
  checkbox.addEventListener("change", setOtherAdminRoute);
});
const form = document.querySelector("#formularioEntries");
const table = document.querySelector("#applicationForm");

async function handleSubmit(e) {
  console.log("deu certo");
  e.preventDefault();

  const formData = new FormData(form);
  const muscleRows = document.querySelectorAll("#tableBody tr");

  const data = Object.fromEntries(formData.entries());

  if (
    document.querySelector("input[name='classe']:checked").value === "outro"
  ) {
    const outroValor = document.getElementById("outroclasse").value.trim();
    if (!outroValor) {
      alert("Preencha o campo 'Outro Conselho de Classe'");
      return;
    }
    data.classe = outroValor;
  }
  if (
    document.querySelector("input[name='medicamento']:checked").value ===
    "outro"
  ) {
    data.medicamento = document.getElementById("outroMedicamento").value;
  }
  if (
    document.querySelector("input[name='doencasassociadas']:checked").value ===
    "outro"
  ) {
    data.doencasassociadas = document.getElementById("outraDoenca").value;
  }
  if (
    document.querySelector("input[name='volumeConstituicao']:checked").value ===
    "outro"
  ) {
    data.volumeConstituicao = document.getElementById("outroVolume").value;
  }
  if (
    document.querySelector("input[name='diluenteUtilizado']:checked").value ===
    "outro"
  ) {
    data.diluenteUtilizado = document.getElementById("outroDiluente").value;
  }

  data.indicacao = formData.getAll("indicacao");
  if (data.indicacao.includes("outro")) {
    const outroValor = document.getElementById("otherindicacao").value;

    if (outroValor) {
      data.indicacao = data.indicacao.filter((item) => item !== "outro");
      data.indicacao.push(outroValor);
    }
  }

  data.administracao = formData.getAll("administracao");
  if (data.administracao.includes("outro")) {
    const outroValor = document.getElementById("otherAdminRoute").value;

    if (outroValor) {
      data.administracao = data.administracao.filter(
        (item) => item !== "outro",
      );
      data.administracao.push(outroValor);
    }
  }
  data.aplicacoes = Array.from(muscleRows).map((row) => {
    const regiao = row.querySelector(".muscle-name").textContent;
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

    return {
      regiao,
      gravidadeInfeccao,
      numeroDePontos,
      volumePorPonto,
      volumeTotal,
      unidades,
      paralisia,
    };
  });
  try {
    console.log("DATA FINAL:", JSON.stringify(data, null, 2));
    alert("Feito");
    await axios.post("http://localhost:3000/submit-form", data);
  } catch (error) {
    console.error(error);
    alert("Erro");
    console.log(data);
  }
}
form.addEventListener("submit", handleSubmit);
