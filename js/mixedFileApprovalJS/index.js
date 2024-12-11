const qiModalPdf = document.querySelector(".qi-modalPdf");
const qiShowInfo = document.querySelectorAll(".qi-showInfo");
const qiPreviewPdf = document.querySelector(".qi-preview-pdf");

// Xử lý sự kiện cho qiModalPdf
qiModalPdf.addEventListener("mousedown", () => {
  qiModalPdf.classList.add("hidden");
});

// Xử lý sự kiện cho mỗi phần tử qiShowInfo
qiShowInfo.forEach((value) => {
  value.addEventListener("mousedown", () => {
    qiModalPdf.classList.toggle("hidden");
  });
});

// Ngăn sự kiện từ qiPreviewPdf lan lên cha
qiPreviewPdf.addEventListener("mousedown", (event) => {
  event.stopPropagation();
});
