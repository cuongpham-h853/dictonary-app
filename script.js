const dictionary = [
    { jp: "開発", vn: "Phát triển" },
    { jp: "設計", vn: "Thiết kế" },
    { jp: "要件", vn: "Yêu cầu" },
    { jp: "試験", vn: "Kiểm thử" },
    { jp: "保守", vn: "Bảo trì" }
  ];
  
  const input = document.getElementById("search");
  const resultList = document.getElementById("result-list");
  
  input.addEventListener("input", function () {
    const keyword = this.value.trim().toLowerCase();
    resultList.innerHTML = "";
  
    dictionary.forEach(entry => {
      if (
        entry.jp.toLowerCase().includes(keyword) ||
        entry.vn.toLowerCase().includes(keyword)
      ) {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${entry.jp}</strong> - ${entry.vn}`;
        resultList.appendChild(li);
      }
    });
  });