const body = document.body;

// Высота всего документа
const allDocumentHeight = document.documentElement.scrollHeight;

// Высота видимого окна браузера
const visibleDocumentHeight = document.documentElement.clientHeight;

// Ширина скролла
const scrollWidth = window.innerWidth - document.documentElement.clientWidth;

// Экспортируем функции
export const band = () => {
  if (allDocumentHeight > visibleDocumentHeight) {
    return body.style.cssText = `overflow: hidden; margin-right: ${scrollWidth}px;`;
  }
};

export const band2 = () => {
  if (allDocumentHeight > visibleDocumentHeight) {
    return body.style.cssText = `overflow: ; margin-right: `;
  }
};