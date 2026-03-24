const formu = document.getElementById("formularioEntries");
async function handleSubmit(e) {
  console.log("deu certo");
  //   e.preventDefault();

  const formData = new FormData(formu);

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
    document.querySelector("input[name='medicamento']:checked").value === "sim"
  ) {
    data.medicamento = document.getElementById("outroMedicamento").value;
  }
  if (
    document.querySelector("input[name='doencasassociadas']:checked").value ===
    "sim"
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
  console.log(data);
  data.administracao = formData.getAll("administracao");
  if (data.administracao.includes("outro")) {
    const outroValor = document.getElementById("otherAdminRoute").value;

    if (outroValor) {
      data.administracao = data.administracao.filter(
        (item) => item !== "outro",
      );
      data.administracao.push(outroValor);
    }
    try {
      axios.post("/submit-form", data);
    } catch (err) {
      console.error("Erro ao enviar os dados:", err);
    }
  }
}

formu.addEventListener("submit", (e) => {
  handleSubmit(e);
});
