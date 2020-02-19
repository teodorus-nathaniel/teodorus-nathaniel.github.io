export default function initNav (){
  document.getElementById('nav-icon').addEventListener('click', function (){
    this.classList.toggle('open');
  });
}
