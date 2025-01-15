// submit-form.js
document.getElementById("submit-form").innerHTML = `
  <section id="submit-form">
    <div class="container">
      <h2>Submit Your Request</h2>
      <form>
        <label for="name">Full Name</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>

        <label for="message">Message</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  </section>
`;
