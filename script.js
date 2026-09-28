const originalStudents = [
  "ANTUANETH MARIANA ACOSTA REY",
  "LUCIANA ALESSANDRA ALFARO CAMPOMANES",
  "GABRIEL IGNACIO ARBULU LEMA",
  "GABRIELA LIZET AYALA ATOCHE",
  "CRISTHYNE SHANTAL CABALLERO VILLANUEVA",
  "DIEGO ALESSANDRO MATIAS CALICHE CUBA",
  "MACARENA SUSANA CARLIN FEBRES",
  "FABIANA CARRERA SEGURA",
  "YAMILA AIXA CASTAÑEDA CENTTI",
  "ANDREA MELANIE CASTAÑEDA GARCIA",
  "KIARA JACQUELINE CASTRO RAMIREZ",
  "FIORELLA MIRELLA CRISTOBAL CHAVEZ",
  "ZAHIRA CUMPA TAHA",
  "GONZALO ANTONIO FERRUZO MAXIMILIANO",
  "MARIANA PAOLA GRIMALDO CASTILLO",
  "SOFIA PAMELA GUZMAN LEIGH",
  "HENRY ANIBAL HUAMAN BARRERA",
  "IVANA PAULA HURTADO GAMBARINI",
  "CARLOS ALBERTO LIMA ROJAS",
  "RODRIGO FABIAN LINARES CORREA",
  "CRISTOFER EVARISTO LOZANO ROSAS",
  "ALEJANDRA LUGON ORTIZ",
  "ANTONIO MANDUJANO YÑIPE",
  "JESUS FELIPE MEDINA TALAVERA",
  "ANGEL GABRIEL MERINO ZAMBRANO",
  "FELIPE FERNANDO MONTALVAN VARELA",
  "JOSE MIGUEL MONTENEGRO VALENCIA",
  "FABRIZIO SEBASTIAN ANDRES PALOMINO LINARES",
  "LUCIANA PANIAGUA NEYRA",
  "ANGELO BERNARDO RODRIGUEZ HERNANDEZ",
  "CAMILA MIA RODRIGUEZ MARADIEGUE",
  "JUAN DIEGO CHRISTIAN RUSSO CAMI",
  "RICARDO ANDRE SANCHEZ LORA",
  "IGNACIO SILVA SORIA",
  "ISABEL TENORIO FERNANDEZ",
  "MATIAS FERNANDO VALDEZ TAPIA",
  "VALERIA LETICIA VARGAS HERRERA",
  "PIERO ANGELLO VASQUEZ FIGUEROA",
  "RODRIGO ALEJANDRO YUPANQUI GOMEZ",
  "ALEJANDRO GUSTAVO ZANCA CALLE"
];

let students = [...originalStudents];

function renderList() {
  const list = document.getElementById("studentList");
  list.innerHTML = "";

  students.forEach((student, index) => {
    const item = document.createElement("li");

    const number = document.createElement("span");
    number.className = "number";
    number.textContent = index + 1;

    const name = document.createElement("span");
    name.className = "name";
    name.textContent = student;

    item.append(number, name);
    list.appendChild(item);
  });
}

function randomInt(maxExclusive) {
  const maxUint32 = 0x100000000;
  const limit = maxUint32 - (maxUint32 % maxExclusive);
  const values = new Uint32Array(1);

  do {
    crypto.getRandomValues(values);
  } while (values[0] >= limit);

  return values[0] % maxExclusive;
}

function shuffle(array) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = randomInt(i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

document.getElementById("shuffleBtn").addEventListener("click", () => {
  students = shuffle(students);
  renderList();

  const now = new Date();
  document.getElementById("status").textContent =
    "Último sorteo: " + now.toLocaleTimeString("es-PE", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
});

document.getElementById("resetBtn").addEventListener("click", () => {
  students = [...originalStudents];
  renderList();
  document.getElementById("status").textContent = "Orden original";
});

renderList();
