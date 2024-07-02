
  let list =  document.querySelectorAll('.links li');

  function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
  }
  list.forEach((item) =>
  item.addEventListener('click', activeLink));

