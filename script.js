const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");
const submit = document.getElementById("submit-btn");


// open.addEventListener("click", () => modal.classList.add("show-modal"));

close.addEventListener('click', () => modal.classList.remove('show-modal'));

window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false);

submit.addEventListener("click", () =>
    alert('送信しました。回答までしばらくお待ち下さい。')
);

$('#open').on("click", function () {
    $('#modal').addClass('show-modal');
})