// =====================
// DAFTAR AKUN
// =====================

function register() {
  let username = document.getElementById("regUsername").value;

  let password = document.getElementById("regPassword").value;

  if (username == "" || password == "") {
    pesan.innerHTML = "Isi semua data!";

    return;
  }

  let akun = JSON.parse(localStorage.getItem("akun")) || [];

  let cek = akun.find((user) => user.username == username);

  if (cek) {
    pesan.innerHTML = "Akun sudah ada!";

    return;
  }

  akun.push({
    username: username,

    password: password,
  });

  localStorage.setItem(
    "akun",

    JSON.stringify(akun),
  );

  alert("Akun berhasil dibuat");

  location.href = "login.html";
}

// =====================
// LOGIN
// =====================

function login() {
  let username = document.getElementById("username").value;

  let password = document.getElementById("password").value;

  let akun = JSON.parse(localStorage.getItem("akun")) || [];

  let user = akun.find((data) => data.username == username && data.password == password);

  if (user) {
    localStorage.setItem("login", "true");

    localStorage.setItem("user", username);

    // simpan riwayat

    let riwayat = JSON.parse(localStorage.getItem("riwayatLogin")) || [];

    riwayat.push({
      username: username,

      waktu: new Date().toLocaleString(),
    });

    localStorage.setItem(
      "riwayatLogin",

      JSON.stringify(riwayat),
    );

    location.href = "dashboard.html";
  } else {
    pesan.innerHTML = "Login gagal!";
  }
}

// =====================
// CEK LOGIN
// =====================

function cekLogin() {
  if (localStorage.getItem("login") != "true") {
    location.href = "login.html";
  }
}

// =====================
// RIWAYAT LOGIN
// =====================

function tampilRiwayat() {
  let data = JSON.parse(localStorage.getItem("riwayatLogin")) || [];

  let tabel = document.getElementById("riwayat");

  data.reverse().forEach((item) => {
    tabel.innerHTML += `

<tr>

<td>
${item.username}
</td>


<td>
${item.waktu}
</td>


</tr>


`;
  });
}

// =====================
// LOGOUT
// =====================

function logout() {
  localStorage.removeItem("login");

  location.href = "login.html";
}
