const supportEmail = 'street.rival.help@gmail.com';
const owner = 'Oleksandr Raienko';

const templates = {
  '{{support}}': `<a href="mailto:${supportEmail}">${supportEmail}</a>`,
  '{{owner}}': owner,
}
document.addEventListener('DOMContentLoaded', function(){
  let html = document.body.innerHTML;
  for (let key in templates) {
    html = html.replaceAll(key, templates[key]);
  }
  document.body.innerHTML = html;
});
