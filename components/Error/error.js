class Error {
  render() {
    const html = `
      <div class="error-container">
        <h3 class="error-message">No Data :(</h3>
      </div>
    `;

    ROOT_ERROR.innerHTML = html;
  }
}

const errorPage = new Error();
 