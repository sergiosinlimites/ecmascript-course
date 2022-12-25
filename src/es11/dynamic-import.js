document.getElementById('btn').addEventListener('click', async () => {
  const module = await import('./module.js');
  module.hello();
})