async function fetchData() {
  try {
      const response = await fetch('http://localhost:3000/data');
      const data = await response.json();
      const list = document.getElementById('data-list');
      list.innerHTML = '';
      data.forEach(item => {
          const li = document.createElement('li');
          li.textContent = JSON.stringify(item);
          list.appendChild(li);
      });
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

document.addEventListener('DOMContentLoaded', fetchData);