const rtlLanguages = ['he', 'ar', 'fa'];
const url = window.location.href;
const strings = url.split('/');
const filter = strings.filter((str => rtlLanguages.includes(str)));
const isRtl = Boolean(filter.length);

const element = document.getElementById("placeholderContainer");

element.style.direction = isRtl ? 'rtl' : 'ltr';
