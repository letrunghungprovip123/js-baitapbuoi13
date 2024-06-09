document.querySelector("#btn1").onclick = function () {
  let doc = document.querySelector(".container.baitap1 p");
  if (doc) {
    document.querySelector(".container.baitap1").removeChild(doc);
    let soNgayLam = parseInt(document.getElementById("soNgayLam").value);
    let tongLuong = soNgayLam * 100000;
    let theP = document.createElement("p");
    theP.className = "bg-success text-white p-4 mt-4";
    theP.innerHTML = `Tổng lương là: ${tongLuong.toLocaleString("VN", {
      style: "currency",
      currency: "VND",
    })}`;
    document.querySelector(".container.baitap1").appendChild(theP);
  } else {
    let soNgayLam = parseInt(document.getElementById("soNgayLam").value);
    let tongLuong = soNgayLam * 100000;
    let theP = document.createElement("p");
    theP.className = "bg-success text-white p-4 mt-4";
    theP.innerHTML = `Tổng lương là: ${tongLuong.toLocaleString("VN", {
      style: "currency",
      currency: "VND",
    })}`;
    document.querySelector(".container.baitap1").appendChild(theP);
  }
};

document.querySelector("#btn2").onclick = function () {
  let doc = document.querySelector(".container.baitap2 p");
  if (doc) {
    document.querySelector(".container.baitap2").removeChild(doc);
    let so1 = parseInt(document.getElementById("so1").value);
    let so2 = parseInt(document.getElementById("so2").value);
    let so3 = parseInt(document.getElementById("so3").value);
    let so4 = parseInt(document.getElementById("so4").value);
    let so5 = parseInt(document.getElementById("so5").value);
    let trungBinh = (so1 + so2 + so3 + so4 + so5) / 5;
    let theP = document.createElement("p");
    theP.className = "bg-success text-white p-4 mt-4";
    theP.innerHTML = `Trung bình các số trên là : ${trungBinh}`;
    document.querySelector(".container.baitap2").appendChild(theP);
  } else {
    let so1 = parseInt(document.getElementById("so1").value);
    let so2 = parseInt(document.getElementById("so2").value);
    let so3 = parseInt(document.getElementById("so3").value);
    let so4 = parseInt(document.getElementById("so4").value);
    let so5 = parseInt(document.getElementById("so5").value);
    let trungBinh = (so1 + so2 + so3 + so4 + so5) / 5;
    let theP = document.createElement("p");
    theP.className = "bg-success text-white p-4 mt-4";
    theP.innerHTML = `Trung bình các số trên là : ${trungBinh}`;
    document.querySelector(".container.baitap2").appendChild(theP);
  }
};

document.querySelector("#btn3").onclick = function () {
  let doc = document.querySelector(".container.baitap3 p");
  if (doc) {
    document.querySelector(".container.baitap3").removeChild(doc);

    let soTien = parseInt(document.getElementById("soTien").value);
    let tienViet = soTien * 23500;
    let theP = document.createElement("p");
    theP.className = "bg-success text-white p-4 mt-4";
    theP.innerHTML = `Sô tièn quy đổi là : ${tienViet.toLocaleString("VN", {
      style: "currency",
      currency: "VND",
    })}`;
    document.querySelector(".container.baitap3").appendChild(theP);
  } else {
    let soTien = parseInt(document.getElementById("soTien").value);
    let tienViet = soTien * 23500;
    let theP = document.createElement("p");
    theP.className = "bg-success text-white p-4 mt-4";
    theP.innerHTML = `Sô tièn quy đổi là : ${tienViet.toLocaleString("VN", {
      style: "currency",
      currency: "VND",
    })}`;
    document.querySelector(".container.baitap3").appendChild(theP);
  }
};

document.querySelector("#btn4-cv").onclick = function () {
  let doc = document.querySelector(".container.baitap4 p");
  if (doc) {
    document.querySelector(".container.baitap4").removeChild(doc);
    let chieuDai = parseInt(document.getElementById("chieuDai").value);
    let chieuRong = parseInt(document.getElementById("chieuRong").value);
    let chuVi = (chieuDai + chieuRong) * 2;
    let theP = document.createElement("p");
    theP.className = "bg-success text-white p-4 mt-4";
    theP.innerHTML = `Chu vi hình chữ nhật là: ${chuVi}`;
    document.querySelector(".container.baitap4").appendChild(theP);
  } else {
    let chieuDai = parseInt(document.getElementById("chieuDai").value);
    let chieuRong = parseInt(document.getElementById("chieuRong").value);
    let chuVi = (chieuDai + chieuRong) * 2;
    let theP = document.createElement("p");
    theP.className = "bg-success text-white p-4 mt-4";
    theP.innerHTML = `Chu vi hình chữ nhật là: ${chuVi}`;
    document.querySelector(".container.baitap4").appendChild(theP);
  }
};

document.querySelector("#btn4-dt").onclick = function () {
  let doc = document.querySelector(".container.baitap4 p");
  if (doc) {
    document.querySelector(".container.baitap4").removeChild(doc);
    let chieuDai = parseInt(document.getElementById("chieuDai").value);
    let chieuRong = parseInt(document.getElementById("chieuRong").value);
    let dienTich = chieuDai * chieuRong;
    let theP = document.createElement("p");
    theP.className = "bg-primary text-white p-4 mt-4";
    theP.innerHTML = `diện tích hình chữ nhật là: ${dienTich}`;
    document.querySelector(".container.baitap4").appendChild(theP);
  } else {
    let chieuDai = parseInt(document.getElementById("chieuDai").value);
    let chieuRong = parseInt(document.getElementById("chieuRong").value);
    let dienTich = chieuDai * chieuRong;
    let theP = document.createElement("p");
    theP.className = "bg-primary text-white p-4 mt-4";
    theP.innerHTML = `diện tích hình chữ nhật là: ${dienTich}`;
    document.querySelector(".container.baitap4").appendChild(theP);
  }
};

document.querySelector("#btn5").onclick = function () {
  let doc = document.querySelector(".container.baitap5 p");
  if (doc) {
    document.querySelector(".container.baitap5").removeChild(doc);
    let soNgauNhien = parseInt(document.getElementById("soNgauNhien").value);
    let soChuc = soNgauNhien / 10;
    let soDonVi = soNgauNhien % 10;
    let tongKySo = Math.floor(soChuc) + soDonVi;
    let theP = document.createElement("p");
    theP.className = "bg-success text-white p-4 mt-4";
    theP.innerHTML = `Tổng ký số của 2 số trên là: ${tongKySo}`;
    document.querySelector(".container.baitap5").appendChild(theP);
  } else {
    let soNgauNhien = parseInt(document.getElementById("soNgauNhien").value);
    let soChuc = soNgauNhien / 10;
    let soDonVi = soNgauNhien % 10;
    let tongKySo = Math.floor(soChuc) + soDonVi;
    let theP = document.createElement("p");
    theP.className = "bg-success text-white p-4 mt-4";
    theP.innerHTML = `Tổng ký số của 2 số trên là: ${tongKySo}`;
    document.querySelector(".container.baitap5").appendChild(theP);
  }
};
