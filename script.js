// Единственное место, где нужно менять адрес и версию сервера.
const server = { address: 'mc.akit808.ru', version: '26.3' };

document.querySelectorAll('[data-server-address]').forEach((element) => {
  element.textContent = server.address;
});
document.querySelectorAll('[data-version]').forEach((element) => {
  element.textContent = server.version;
});

const toast = document.querySelector('.toast');
let toastTimer;
document.querySelectorAll('[data-copy-server]').forEach((button) => {
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(server.address);
      toast.textContent = 'Адрес скопирован';
    } catch {
      toast.textContent = `Адрес: ${server.address}`;
    }
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2300);
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
