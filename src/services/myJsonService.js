class MyJsonService {
    constructor() {

    }

    myMethod() {
        // Simple GET request using fetch
        fetch("http://localhost:3000/inspections")
          .then(response => response.json())
          .then(data => (this.inspections = data));
      }
}

export default new MyJsonService();