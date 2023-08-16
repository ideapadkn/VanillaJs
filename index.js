function render() {
  const productsStore = localStorageUtil.getProducts();

  headerPage.render(productsStore.length);
  productsPage.render();
}

spinnerPage.render();
let CATALOG = [];

fetch("server/catalog.json") // can add url json
  .then((res) => res.json())
  .then((body) => {
    CATALOG = body;

    setTimeout(() => {
      spinnerPage.handlerClear();
      render();
    }, 2000);
  })
  .catch((e) => {
    console.log(e);
    spinnerPage.handlerClear();
    errorPage.render();
  });
